

import React, { useEffect } from 'react';

const VideoPlayer = () => {
  const videoId = '1OfbZTWC4iEciBv128t8OZuXcLcD-U6cg'; // Your Google Drive File ID
  const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  useEffect(() => {
    // Disable right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
        <iframe
          src={videoUrl}
          width="100%"
          height="100%"
          allow="autoplay"
          allowFullScreen
          frameBorder="0"
          title="Google Drive Video"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        ></iframe>
        <div style={styles.overlay}></div>
      </div>
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
  videoWrapper: {
    position: 'relative',
    width: '800px',
    height: '450px',
    border: '2px solid #444',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    pointerEvents: 'none',
  },
};

export default VideoPlayer;
