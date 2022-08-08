import { DEVICE_SIZES } from '@/utils/constants';
import { useState, useEffect } from 'react';

interface DimensionState {
  device: 'mobile' | 'desktop';
  rotation: 'landscape' | 'portrait';
  width: number;
  height: number;
}

const getWindowDimensions = (): DimensionState => {
  const { innerWidth: width, innerHeight: height } = window;
  const rotation = width > height ? 'landscape' : 'portrait';
  const device = width > DEVICE_SIZES.tablet ? 'desktop' : 'mobile';
  return {
    device,
    rotation,
    width,
    height,
  };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<DimensionState>({
    device: 'mobile',
    rotation: 'portrait',
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowDimensions(getWindowDimensions());
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        setWindowDimensions(getWindowDimensions());
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
