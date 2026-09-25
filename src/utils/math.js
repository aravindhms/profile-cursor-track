/**
 * Circular angle interpolation using the shortest path around the circle.
 * @param {number} current - Current angle in radians
 * @param {number} target - Target angle in radians
 * @param {number} factor - Lerp smoothing factor (0.26 for ~35ms responsiveness)
 * @returns {number} Smoothed angle in radians
 */
export function lerpAngle(current, target, factor = 0.26) {
  let diff = (target - current) % (2 * Math.PI);
  if (diff < -Math.PI) diff += 2 * Math.PI;
  if (diff > Math.PI) diff -= 2 * Math.PI;
  return current + diff * factor;
}

/**
 * Standard scalar lerp
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Converts radians to frame index [0..totalFrames-1]
 * 0 radians (RIGHT) -> 0
 * PI/2 radians (DOWN) -> 16
 * PI radians (LEFT) -> 32
 * 3*PI/2 radians (UP) -> 48
 */
export function angleToFrameIndex(angleRad, totalFrames = 64) {
  let norm = angleRad % (2 * Math.PI);
  if (norm < 0) norm += 2 * Math.PI;
  return Math.round((norm / (2 * Math.PI)) * totalFrames) % totalFrames;
}
