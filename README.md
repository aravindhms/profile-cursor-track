# Aravindh MS — Interactive SRE & Application Support Portfolio

An award-winning luxury portfolio hero section with ultra-smooth, zero-lag, zero-ghosting cursor-tracking character animation.

Built with **React 19**, **Vite**, **Tailwind CSS**, and an optimized **60 FPS Canvas Renderer** powered by Python/OpenCV frame extraction.

---

## ⚡ Core Technical Features

1. **Rock-Solid Motionless Body (No CSS 3D Transforms):**
   - Strictly avoids CSS 3D transforms (`perspective`, `rotateX`, `rotateY`). The body remains 100% motionless; only the head and eyes rotate naturally in the pre-rendered frames.
2. **Zero-Lag 60 FPS Canvas Renderer:**
   - Pre-extracted 64 high-quality WebP circular rotation frames + 1 center frame (~42 KB each, total footprint ~2.75 MB).
   - Fast shortest-path circular angular lerp (`lerpAngle`, factor `~0.26`) achieving ~35 ms response time with zero tracking lag.
   - **Zero-Ghosting:** Draws exactly one crisp frame at 100% opacity per frame (no alpha blending).
3. **Center Eye Contact (Deadzone):**
   - When the cursor enters a 12% screen radius near the face, smoothly transitions to `center.webp` for direct eye contact.
4. **Seamless Color Matching:**
   - Samples the video edge pixels to calculate the median RGB `(210, 29, 24)` / Hex `#d21d18`. Canvas and page background match with zero visible seams.
5. **Interactive Controls & Telemetry:**
   - Scale Mode Selector: `Compact` (65%), `Balanced` (78% default), and `Full` (100% cover).
   - Floating frosted-glass navigation pill (`backdrop-filter: blur(20px)`).
   - Official 3-Page Resume modal with direct PDF download and in-browser preview.
   - Verified Open-Source SRE Tools from GitHub (`sd-dashboard`, `prod-support-automation-pack`, `terminaldecoder`, `unixutils`).
   - Direct contact channels for Email, LinkedIn, WhatsApp, and GitHub.
   - Glowing magnetic cursor with trailing ring and interactive hover expansion.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, Lucide Icons
- **Image Processing:** Python 3, OpenCV (`cv2`), WebP
- **Math & Animation:** Shortest-path circular lerp, HTML5 Canvas 2D API (`requestAnimationFrame`)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Pre-extract Frames (Optional / Re-run)
```bash
python extract_frames.py
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## 👤 Profile & Contacts

- **Name:** Aravindh MS
- **Role:** Technical Lead · SRE & Application Support Engineer
- **Location:** Gowrivakkam, Chennai - 600073
- **Email:** [aravindhms1@gmail.com](mailto:aravindhms1@gmail.com)
- **LinkedIn:** [linkedin.com/in/aravindhms](https://www.linkedin.com/in/aravindhms/)
- **WhatsApp / Phone:** [+91-9840693143](https://wa.me/919840693143)
- **GitHub:** [github.com/aravindhms](https://github.com/aravindhms)
