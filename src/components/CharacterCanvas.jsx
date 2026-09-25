import React, { useEffect, useRef } from 'react';
import { lerpAngle, angleToFrameIndex } from '../utils/math';

const BG_COLOR = '#d21d18';
const FACE_X_PCT = 0.50; // Face horizontal center in video frame (50%)
const FACE_Y_PCT = 0.41; // Face vertical center (eyes/bridge) in video frame (41%)
const DEADZONE_RADIUS_PCT = 0.12; // 12% radius for center eye-contact

export default function CharacterCanvas({
  frames,
  centerFrame,
  isLoaded,
  scaleMode = 'balanced',
  onFaceCoordsUpdate
}) {
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: null, y: null, active: false });
  const smoothedAngleRef = useRef(0); // in radians
  const isInDeadzoneRef = useRef(true);
  const lastDrawnFrameRef = useRef(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isLoaded || !centerFrame) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    let animationFrameId;

    // Handle high DPI resize
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Default mouse to center face if not yet moved
      if (!mousePosRef.current.active) {
        mousePosRef.current.x = w * FACE_X_PCT;
        mousePosRef.current.y = h * FACE_Y_PCT;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (e) => {
      mousePosRef.current.x = e.clientX;
      mousePosRef.current.y = e.clientY;
      mousePosRef.current.active = true;
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        mousePosRef.current.x = e.touches[0].clientX;
        mousePosRef.current.y = e.touches[0].clientY;
        mousePosRef.current.active = true;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mousePosRef.current.x = e.touches[0].clientX;
        mousePosRef.current.y = e.touches[0].clientY;
        mousePosRef.current.active = true;
      }
    };

    const handleTouchEnd = () => {
      // Return to gentle ambient scanning shortly after touch ends
      setTimeout(() => {
        mousePosRef.current.active = false;
      }, 1800);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // 60 FPS Canvas Render Loop
    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const videoRatio = 1280 / 720;

      let drawW, drawH, drawX, drawY;

      if (scaleMode === 'full') {
        // Full screen cover
        const screenRatio = w / h;
        if (screenRatio > videoRatio) {
          drawW = w;
          drawH = w / videoRatio;
          drawX = 0;
          drawY = (h - drawH) / 2;
        } else {
          drawH = h;
          drawW = h * videoRatio;
          drawX = (w - drawW) / 2;
          drawY = (h - drawH) / 2;
        }
      } else {
        // Controlled scale: 'compact' (65%) or 'balanced' (78%)
        const scaleMultiplier = scaleMode === 'compact' ? 0.65 : 0.78;
        drawH = h * scaleMultiplier;
        drawW = drawH * videoRatio;

        // Mobile responsive safeguard: ensure character stays visible on narrow mobile viewports
        if (w < 640 && drawW < w * 0.95) {
          drawW = w * 1.05;
          drawH = drawW / videoRatio;
        }

        drawX = (w - drawW) / 2;
        // Anchor to bottom of screen so shirt cut sits naturally on screen bottom
        drawY = h - drawH;
      }

      // Calculate exact face center in screen coordinates
      const faceScreenX = drawX + drawW * FACE_X_PCT;
      const faceScreenY = drawY + drawH * FACE_Y_PCT;

      if (onFaceCoordsUpdate) {
        onFaceCoordsUpdate({ x: faceScreenX, y: faceScreenY });
      }

      // Target cursor position
      const mouseX = mousePosRef.current.x ?? faceScreenX;
      const mouseY = mousePosRef.current.y ?? faceScreenY;

      const dx = mouseX - faceScreenX;
      const dy = mouseY - faceScreenY;
      const distance = Math.hypot(dx, dy);

      // Deadzone check: 12% of character rendering dimension
      const characterDim = Math.min(drawW, drawH);
      const deadzoneThreshold = characterDim * DEADZONE_RADIUS_PCT;

      let imageToDraw;

      if (!mousePosRef.current.active) {
        // Natural ambient idle breathing/gaze when no pointer is active (mobile & idle)
        const time = performance.now() * 0.0007; // Very gentle slow organic cycle
        const ambientRadius = characterDim * 0.25;
        const ambientX = faceScreenX + Math.cos(time) * ambientRadius;
        const ambientY = faceScreenY + Math.sin(time * 0.8) * (ambientRadius * 0.5);
        const targetAngle = Math.atan2(ambientY - faceScreenY, ambientX - faceScreenX);

        smoothedAngleRef.current = lerpAngle(smoothedAngleRef.current, targetAngle, 0.06);
        const frameIndex = angleToFrameIndex(smoothedAngleRef.current, 64);
        imageToDraw = frames[frameIndex] || centerFrame;
        lastDrawnFrameRef.current = frameIndex;
      } else if (distance < deadzoneThreshold) {
        // Cursor is inside the deadzone near face -> Direct eye contact!
        isInDeadzoneRef.current = true;
        imageToDraw = centerFrame;
      } else {
        isInDeadzoneRef.current = false;
        // Target angle from character face center to cursor
        const targetAngle = Math.atan2(dy, dx);

        // Fast response factor (~0.26) for ~35ms zero-lag shortest-path angular lerp
        smoothedAngleRef.current = lerpAngle(smoothedAngleRef.current, targetAngle, 0.26);

        // Map smoothed angle to nearest frame index [0..63]
        const frameIndex = angleToFrameIndex(smoothedAngleRef.current, 64);
        imageToDraw = frames[frameIndex] || centerFrame;
        lastDrawnFrameRef.current = frameIndex;
      }

      // Fill canvas background with exact matching red (#d21d18)
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, w, h);

      // Draw exactly ONE crisp image at 100% opacity
      if (imageToDraw && imageToDraw.complete && imageToDraw.naturalWidth > 0) {
        ctx.drawImage(imageToDraw, drawX, drawY, drawW, drawH);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded, frames, centerFrame, scaleMode, onFaceCoordsUpdate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        backgroundColor: BG_COLOR,
      }}
    />
  );
}
