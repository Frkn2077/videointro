import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const Cursor: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Animate cursor movement
    // Start off-screen (bottom-right), move to button center, click, then move away

    const duration = 150; // duration of cursor sequence in frames
    const startFrame = 60; // start after 2 seconds

    const progress = interpolate(frame, [startFrame, startFrame + 60], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    // Approximate button position (center bottom)
    // Screen is 1080x1920. Button is roughly at y=1500

    const startX = 800;
    const startY = 1800;
    const endX = 540; // Center X (ish)
    const endY = 1650; // Center Y of button (Lowered further)

    const x = interpolate(progress, [0, 1], [startX, endX]);
    const y = interpolate(progress, [0, 1], [startY, endY]);

    // Click animation (scale down)
    const clickFrame = startFrame + 70;
    const scale = interpolate(frame, [clickFrame, clickFrame + 5, clickFrame + 10], [1, 0.8, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const opacity = interpolate(frame, [startFrame + 120, startFrame + 150], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    return (
        <div
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
                opacity: opacity,
                zIndex: 100,
                pointerEvents: 'none',
            }}
        >
            <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};
