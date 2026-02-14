import React from 'react';
import { random, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

export const Confetti: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Trigger frame matches the click (around frame 130)
    const startFrame = 130;
    const duration = 60;

    if (frame < startFrame) return null;

    const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
        extrapolateRight: 'clamp',
    });

    // Generate particles
    const particles = new Array(50).fill(0).map((_, i) => {
        const seed = i;
        const angle = random(seed) * Math.PI * 2; // Random direction
        const velocity = 20 + random(seed + 1) * 30; // Random speed
        const size = 10 + random(seed + 2) * 10;
        const hue = random(seed + 3) * 360;

        // Explosion movement
        const x = Math.cos(angle) * velocity * (progress * 20); // Spread out
        const y = Math.sin(angle) * velocity * (progress * 20) + (progress * progress * 500); // Gravity effect

        const rotation = random(seed + 4) * 360 + progress * 720;

        const opacity = interpolate(progress, [0, 0.7, 1], [1, 1, 0]);

        return (
            <div
                key={i}
                style={{
                    position: 'absolute',
                    left: 540, // Center X
                    top: 1600, // Button center Y (approximated)
                    width: size,
                    height: size,
                    backgroundColor: `hsl(${hue}, 80%, 60%)`,
                    transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                    opacity,
                    borderRadius: i % 2 === 0 ? '50%' : '0%', // Mix of circles and squares
                }}
            />
        );
    });

    return <>{particles}</>;
};
