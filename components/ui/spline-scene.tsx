'use client';

// Make sure to use the /next import path as per documentation
import Spline from '@splinetool/react-spline/next';

interface SplineSceneProps {
  scene: string;
  className?: string;
  // Add any other props you expect the Spline component to receive,
  // like onLoad, onMouseDown, etc., if they are used by the page.
  // For now, keeping it simple as per current usage.
}

export function SplineScene({ scene, className, ...props }: SplineSceneProps) {
  return (
    <Spline
      scene={scene}
      className={className}
      {...props} // Pass through any other props
    />
  );
}