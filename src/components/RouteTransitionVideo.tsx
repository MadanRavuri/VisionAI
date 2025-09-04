// src/components/RouteTransitionVideo.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTransitionVideo: React.FC<{ skipFirst?: boolean }> = ({ skipFirst = false }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const firstLoad = useRef(true);
  const initialPath = useRef(location.pathname);

  useEffect(() => {
    // Skip transition if this is the first load and skipFirst is true
    if (skipFirst && firstLoad.current) {
      firstLoad.current = false;
      initialPath.current = location.pathname;
      return;
    }
    
    // Only show transition if we're actually navigating to a different path
    if (location.pathname !== initialPath.current) {
      setShow(true);
    }
  }, [location.pathname, skipFirst]);

  // Allow manual triggering (e.g., before navigation to ensure visible)
  useEffect(() => {
    const handler = () => setShow(true);
    window.addEventListener('force-route-transition', handler as EventListener);
    return () => window.removeEventListener('force-route-transition', handler as EventListener);
  }, []);

  useEffect(() => {
    if (!show || !videoRef.current) return;
    const v = videoRef.current;
    const onEnded = () => setShow(false);
    const onError = () => setShow(false);
    v.currentTime = 0;
    v.muted = true;
    v.play().catch(() => setShow(false));
    v.addEventListener('ended', onEnded);
    v.addEventListener('error', onError);
    return () => {
      v.removeEventListener('ended', onEnded);
      v.removeEventListener('error', onError);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#000',
      zIndex: 9999
    }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          background: '#000'
        }}
      >
        <source src="/transition.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default RouteTransitionVideo;
