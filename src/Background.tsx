import React from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';

export const Background: React.FC = () => {
  return (
    <AbsoluteFill style={{ zIndex: -1 }}>
      <Img
        src={staticFile('God_Valley_Infobox.jpg')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Dark overlay to ensure foreground elements pop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />
    </AbsoluteFill>
  );
};
