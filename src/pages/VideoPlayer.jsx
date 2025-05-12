// src/components/VideoPlayer.js
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'; // Replace with your secure HLS URL

  useEffect(() => {
    const video = videoRef.current;

    // Initialize HLS
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });

      return () => {
        hls.destroy(); // Cleanup on unmount
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    }

    // Disable right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);

    // Disable drag
    const disableDrag = (e) => e.preventDefault();
    video.addEventListener('dragstart', disableDrag);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      video.removeEventListener('dragstart', disableDrag);
    };
  }, []);

  return (
    <div style={styles.container}>
      <video ref={videoRef} controls style={styles.video} />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  video: {
    width: '80%',
    maxWidth: '800px',
    border: '2px solid #444',
    borderRadius: '12px',
  },
};

export default VideoPlayer;
