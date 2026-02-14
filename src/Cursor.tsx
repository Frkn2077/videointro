import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface CursorProps {
    startX?: number;
    startY?: number;
    endX?: number;
    endY?: number;
    startFrame?: number;
    duration?: number;
    clickFrameOffset?: number; // How many frames after movement to click
    opacityDelay?: number; // How many frames after startFrame to fade out
    showConfetti?: boolean; // Whether to trigger click animation
}

export const Cursor: React.FC<CursorProps> = ({
    startX = 800,
    startY = 1800,
    endX = 540,
    endY = 1650,
    startFrame = 60,
    duration = 60,
    clickFrameOffset = 70,
    opacityDelay = 150,
}) => {
    const frame = useCurrentFrame();

    const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    const x = interpolate(progress, [0, 1], [startX, endX]);
    const y = interpolate(progress, [0, 1], [startY, endY]);

    // Click animation (scale down)
    const clickFrame = startFrame + clickFrameOffset;
    const scale = interpolate(frame, [clickFrame, clickFrame + 5, clickFrame + 10], [1, 0.8, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    // Only fade out if opacityDelay is set (and reasonable)
    const opacity = interpolate(
        frame,
        [startFrame + opacityDelay, startFrame + opacityDelay + 30],
        [1, 0],
        {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp'
        }
    );

    return (
        <div
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
                opacity: opacity,
                zIndex: 1000, // Ensure high z-index
                pointerEvents: 'none',
            }}
        >
            <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }}
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
