import { useState, useEffect, useRef } from 'react';

export function useFramePreloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const framesRef = useRef([]);
  const centerFrameRef = useRef(null);

  useEffect(() => {
    const totalFrames = 64;
    let loadedCount = 0;
    const totalToLoad = totalFrames + 1; // 64 circular + 1 center
    const images = [];

    const handleSingleLoad = () => {
      loadedCount++;
      setProgress(Math.floor((loadedCount / totalToLoad) * 100));
      if (loadedCount === totalToLoad) {
        setIsLoaded(true);
      }
    };

    // Preload center frame
    const centerImg = new Image();
    centerImg.src = '/frames/center.webp';
    centerImg.onload = handleSingleLoad;
    centerImg.onerror = () => {
      console.error('Failed to load center frame');
      handleSingleLoad();
    };
    centerFrameRef.current = centerImg;

    // Preload 64 circular frames
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const padded = i.toString().padStart(2, '0');
      img.src = `/frames/frame_${padded}.webp`;
      img.onload = handleSingleLoad;
      img.onerror = () => {
        console.error(`Failed to load frame_${padded}.webp`);
        handleSingleLoad();
      };
      images.push(img);
    }
    framesRef.current = images;

    return () => {
      // Cleanup if unmounted
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
      centerImg.onload = null;
      centerImg.onerror = null;
    };
  }, []);

  return {
    isLoaded,
    progress,
    frames: framesRef.current,
    centerFrame: centerFrameRef.current,
  };
}
