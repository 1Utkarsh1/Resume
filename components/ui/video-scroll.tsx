'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VideoScroll = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // We need to wait for the video metadata to load to get its duration
    const onLoadedMetadata = () => {
      // Create a GSAP timeline linked to the scroll position of the entire page
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrubbing
        },
      });

      // Animate the video's currentTime property from 0 to its full duration
      tl.to(video, {
        currentTime: video.duration,
        ease: 'none',
      });
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', onLoadedMetadata);
    }

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full -z-10 bg-black">
      {/*
        Ensure video fills the screen.
        Plays inline and muted are usually required for programmatic playback.
      */}
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-full h-full object-cover opacity-60"
        playsInline
        muted
        preload="auto"
      />
      {/* Optional gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
    </div>
  );
};
