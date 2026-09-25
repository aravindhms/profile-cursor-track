import cv2
import os
import json
import numpy as np

def extract_character_frames(video_path="video.mp4", output_dir="public/frames"):
    print("=" * 60)
    print("CURSOR-TRACKING CHARACTER ANIMATION FRAME EXTRACTOR")
    print("=" * 60)

    if not os.path.exists(video_path):
        raise FileNotFoundError(f"Video file not found: {video_path}")

    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration = total_frames / fps if fps > 0 else 0

    print(f"[1/5] Inspecting Video:")
    print(f"      Resolution:   {width}x{height}")
    print(f"      Total Frames: {total_frames}")
    print(f"      Framerate:    {fps:.2f} fps")
    print(f"      Duration:     {duration:.2f} seconds")

    # Load all frames into memory
    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frames.append(frame)
    cap.release()

    if len(frames) != total_frames:
        print(f"      Warning: Read {len(frames)} frames vs reported {total_frames}")

    # Determine background color
    print("\n[2/5] Detecting Background Color:")
    sample_pixels = []
    for f_idx in range(0, len(frames), 10):
        f = frames[f_idx]
        sample_pixels.append(f[5:25, 5:25])
        sample_pixels.append(f[5:25, width-25:width-5])
        sample_pixels.append(f[height-25:height-5, 5:25])
        sample_pixels.append(f[height-25:height-5, width-25:width-5])
    
    all_pix = np.concatenate([s.reshape(-1, 3) for s in sample_pixels], axis=0)
    median_bgr = np.median(all_pix, axis=0)
    b, g, r = int(median_bgr[0]), int(median_bgr[1]), int(median_bgr[2])
    bg_hex = f"#{r:02x}{g:02x}{b:02x}"
    print(f"      Median BGR: [{b}, {g}, {r}]")
    print(f"      Median RGB: ({r}, {g}, {b})")
    print(f"      Seamless Background Hex: {bg_hex}")

    # Compass Keyframe Identification
    # Trajectory:
    # 0 deg (RIGHT):      frame 77
    # 45 deg (DOWN-RIGHT): frame 110
    # 90 deg (DOWN):       frame 140
    # 135 deg (DOWN-LEFT): frame 170
    # 180 deg (LEFT):      frame 195
    # 225 deg (UP-LEFT):   frame 212
    # 270 deg (UP):        frame 224 (and wraps to 15)
    # 315 deg (UP-RIGHT):  frame 45
    # 360 deg (RIGHT):     frame 77
    # CENTER (NEUTRAL):    frame 238
    
    keyframe_mapping = {
        "RIGHT": 77,
        "DOWN_RIGHT": 110,
        "DOWN": 140,
        "DOWN_LEFT": 170,
        "LEFT": 195,
        "UP_LEFT": 212,
        "UP": 224,
        "UP_WRAP": 15,
        "UP_RIGHT": 45,
        "CENTER": 238
    }

    print("\n[3/5] Identified 8 Compass Directions & Center Frame:")
    print("      0°   RIGHT:       Frame", keyframe_mapping["RIGHT"])
    print("      45°  DOWN-RIGHT:  Frame", keyframe_mapping["DOWN_RIGHT"])
    print("      90°  DOWN:        Frame", keyframe_mapping["DOWN"])
    print("      135° DOWN-LEFT:   Frame", keyframe_mapping["DOWN_LEFT"])
    print("      180° LEFT:        Frame", keyframe_mapping["LEFT"])
    print("      225° UP-LEFT:     Frame", keyframe_mapping["UP_LEFT"])
    print("      270° UP:          Frame", keyframe_mapping["UP"], f"(wraps via {keyframe_mapping['UP_WRAP']})")
    print("      315° UP-RIGHT:    Frame", keyframe_mapping["UP_RIGHT"])
    print("      CENTER (NEUTRAL): Frame", keyframe_mapping["CENTER"])

    # Interpolation function for 360 degrees into video frames
    def angle_to_video_frame(angle_deg):
        angle = angle_deg % 360.0
        if 0.0 <= angle <= 45.0:
            return 77.0 + (angle - 0.0) / 45.0 * (110.0 - 77.0)
        elif 45.0 < angle <= 90.0:
            return 110.0 + (angle - 45.0) / 45.0 * (140.0 - 110.0)
        elif 90.0 < angle <= 135.0:
            return 140.0 + (angle - 90.0) / 45.0 * (170.0 - 140.0)
        elif 135.0 < angle <= 180.0:
            return 170.0 + (angle - 135.0) / 45.0 * (195.0 - 170.0)
        elif 180.0 < angle <= 225.0:
            return 195.0 + (angle - 180.0) / 45.0 * (212.0 - 195.0)
        elif 225.0 < angle <= 270.0:
            return 212.0 + (angle - 225.0) / 45.0 * (224.0 - 212.0)
        elif 270.0 < angle <= 315.0:
            return 15.0 + (angle - 270.0) / 45.0 * (45.0 - 15.0)
        else: # 315.0 < angle < 360.0
            return 45.0 + (angle - 315.0) / 45.0 * (77.0 - 45.0)

    os.makedirs(output_dir, exist_ok=True)

    print(f"\n[4/5] Pre-extracting 64 Circular WebP Frames into '{output_dir}':")
    webp_quality = 92
    num_angles = 64
    extracted_frames = []

    for i in range(num_angles):
        angle = i * (360.0 / num_angles)
        v_frame_idx = int(round(angle_to_video_frame(angle)))
        v_frame_idx = max(0, min(v_frame_idx, len(frames) - 1))
        
        frame_filename = f"frame_{i:02d}.webp"
        output_path = os.path.join(output_dir, frame_filename)
        
        cv2.imwrite(output_path, frames[v_frame_idx], [cv2.IMWRITE_WEBP_QUALITY, webp_quality])
        extracted_frames.append({
            "index": i,
            "angle_deg": round(angle, 3),
            "video_frame": v_frame_idx,
            "filename": frame_filename
        })

    # Save center neutral frame
    center_filename = "center.webp"
    center_path = os.path.join(output_dir, center_filename)
    cv2.imwrite(center_path, frames[keyframe_mapping["CENTER"]], [cv2.IMWRITE_WEBP_QUALITY, webp_quality])
    print(f"      Extracted 64 circular frames + 1 center frame successfully.")

    # Save metadata
    metadata = {
        "total_frames": num_angles,
        "degrees_per_frame": 360.0 / num_angles,
        "bg_hex": bg_hex,
        "bg_rgb": [r, g, b],
        "face_center": {
            "x_pct": 0.50,
            "y_pct": 0.41
        },
        "deadzone_radius_pct": 0.12,
        "keyframe_mapping": keyframe_mapping,
        "frames": extracted_frames
    }

    meta_path = os.path.join(output_dir, "metadata.json")
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(metadata, f, indent=2)

    total_dir_size = sum(os.path.getsize(os.path.join(output_dir, f)) for f in os.listdir(output_dir))
    print(f"\n[5/5] Frame Extraction Complete!")
    print(f"      Total directory size: {total_dir_size / (1024 * 1024):.2f} MB")
    print(f"      Metadata saved to:    {meta_path}")
    print("=" * 60)

if __name__ == "__main__":
    extract_character_frames()
