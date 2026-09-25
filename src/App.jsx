import React, { useState, useCallback, useEffect } from 'react';
import { useFramePreloader } from './hooks/useFramePreloader';
import CharacterCanvas from './components/CharacterCanvas';
import HeaderNav from './components/HeaderNav';
import HeroContent from './components/HeroContent';
import CustomCursor from './components/CustomCursor';
import Modals from './components/Modals';
import Loader from './components/Loader';
import FooterTelemetry from './components/FooterTelemetry';

export default function App() {
  const { isLoaded, progress, frames, centerFrame } = useFramePreloader();
  const [activeModal, setActiveModal] = useState(null);
  const [faceCoords, setFaceCoords] = useState({ x: 0, y: 0 });

  const handleTabClick = (tabId) => {
    setActiveModal(tabId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // Keyboard shortcut: Escape to close any open modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModal) {
        setActiveModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  const handleFaceCoordsUpdate = useCallback((coords) => {
    setFaceCoords(coords);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0d0f12] text-white select-none">
      {/* 1. Loading splash screen until 64 frames + center are fully preloaded */}
      {!isLoaded && <Loader progress={progress} />}

      {/* 2. Zero-ghosting, 60fps Canvas Character Renderer */}
      <CharacterCanvas
        frames={frames}
        centerFrame={centerFrame}
        isLoaded={isLoaded}
        scaleMode="balanced"
        onFaceCoordsUpdate={handleFaceCoordsUpdate}
      />

      {/* 3. Floating Frosted-Glass Navigation Header */}
      <HeaderNav activeTab={activeModal} onTabClick={handleTabClick} />

      {/* 4. Bottom-Left Hero Typography & Action Pill Buttons */}
      <HeroContent
        onOpenWork={() => setActiveModal('work')}
        onOpenContact={() => setActiveModal('contact')}
      />

      {/* 5. Bottom-Right SRE Telemetry & Socials */}
      <FooterTelemetry faceCoords={faceCoords} />

      {/* 6. Custom Glowing Magnetic Cursor */}
      <CustomCursor />

      {/* 7. Interactive Glass Modals for Work, About, Contact, Resume */}
      <Modals activeModal={activeModal} onClose={handleCloseModal} />
    </div>
  );
}
