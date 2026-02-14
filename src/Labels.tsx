import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface LabelsProps {
    username: string;
    label: string;
}

export const Labels: React.FC<LabelsProps> = ({ username, label }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = interpolate(frame, [0, 30], [0, 1], {
        extrapolateRight: 'clamp',
    });

    const translateY = interpolate(frame, [0, 30], [20, 0], {
        extrapolateRight: 'clamp',
    });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                opacity,
                transform: `translateY(${translateY}px)`,
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
                padding: '20px 40px',
                borderRadius: '30px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', // Glassmorphism shadow
                backdropFilter: 'blur(4px)', // Glassmorphism blur
                border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
        >
            <h1
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: '80px',
                    fontWeight: 'bold',
                    color: '#333333',
                    marginBottom: '10px',
                    textShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}
            >
                {username}
            </h1>
            <h2
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: '40px',
                    fontWeight: 'normal',
                    color: '#555555',
                    textAlign: 'center',
                    maxWidth: '100%',
                }}
            >
                {label}
            </h2>
        </div>
    );
};
