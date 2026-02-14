import React from 'react';
import { Img, spring, useCurrentFrame, useVideoConfig, staticFile } from 'remotion';

export const Avatar: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: {
            damping: 200,
        },
    });

    return (
        <div
            style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                overflow: 'hidden',
                padding: '10px', // Space for the border
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', // Instagram gradient
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                transform: `scale(${scale})`,
                zIndex: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid white', // Inner white border
            }}>
                <Img
                    src={staticFile('avatar.png')}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </div>
    );
};
