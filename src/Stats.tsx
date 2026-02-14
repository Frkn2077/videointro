import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export const Stats: React.FC = () => {
    const frame = useCurrentFrame();

    // Fade in animation matching Labels
    const opacity = interpolate(frame, [10, 40], [0, 1], {
        extrapolateRight: 'clamp',
    });

    const translateY = interpolate(frame, [10, 40], [20, 0], {
        extrapolateRight: 'clamp',
    });

    const statStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 20px',
    };

    const numberStyle: React.CSSProperties = {
        fontFamily: 'sans-serif',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#333333',
    };

    const labelStyle: React.CSSProperties = {
        fontFamily: 'sans-serif',
        fontSize: '24px',
        color: '#555555',
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: 'fit-content', // Only take necessary space
                minWidth: '600px', // Minimum width for balance
                opacity,
                transform: `translateY(${translateY}px)`,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                padding: '15px 40px',
                borderRadius: '20px',
                backdropFilter: 'blur(4px)',
                marginTop: '10px',
                marginBottom: '10px',
            }}
        >
            <div style={statStyle}>
                <span style={numberStyle}>15</span>
                <span style={labelStyle}>Gönderi</span>
            </div>
            <div style={statStyle}>
                <span style={numberStyle}>100 Mn</span>
                <span style={labelStyle}>Takipçi</span>
            </div>
            <div style={statStyle}>
                <span style={numberStyle}>500</span>
                <span style={labelStyle}>Takip</span>
            </div>
        </div>
    );
};
