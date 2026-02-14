import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const FollowButton: React.FC = () => {
    const frame = useCurrentFrame();

    // Click happens around frame 130 (startFrame 60 + 70)
    const isClicked = frame > 130;

    // Cycle through Hue (0-360) based on frame
    // Frame 0 -> 0, Frame 300 -> 360 (full cycle every 10 seconds)
    const hue = interpolate(frame % 300, [0, 300], [0, 360]);
    const backgroundColor = isClicked ? '#ffffff' : `hsl(${hue}, 80%, 60%)`;
    const textColor = isClicked ? '#333333' : 'white';
    const border = isClicked ? '2px solid #333333' : 'none';

    const scale = interpolate(frame % 60, [0, 30, 60], [1, 1.05, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <button
            style={{
                backgroundColor,
                color: textColor,
                border: border,
                borderRadius: '50px',
                padding: '20px 60px',
                fontSize: '50px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: isClicked ? 'none' : `0 0 30px ${backgroundColor}`,
                transform: `scale(${scale})`,
                marginTop: '40px',
                transition: 'all 0.2s ease',
                minWidth: '400px', // Prevent width jump
            }}
        >
            {isClicked ? 'Takip Ediliyor' : 'Takip Et'}
        </button>
    );
};
