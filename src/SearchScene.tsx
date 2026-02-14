import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Img, staticFile } from 'remotion';
import { Cursor } from './Cursor';

const TypedText: React.FC<{ text: string; startFrame: number }> = ({ text, startFrame }) => {
    const frame = useCurrentFrame();
    const progress = interpolate(frame, [startFrame, startFrame + text.length * 3], [0, text.length], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp'
    });

    return <span>{text.substring(0, Math.floor(progress))}</span>;
};

export const SearchScene: React.FC = () => {
    const frame = useCurrentFrame();

    // Animation Timing
    const startTypingFrame = 30;
    const typingDuration = 50; // @furkank2078
    const resultsAppearFrame = startTypingFrame + typingDuration + 10;
    const cursorMoveStartFrame = resultsAppearFrame + 20;
    const cursorClickFrame = cursorMoveStartFrame + 40;

    const resultsOpacity = interpolate(frame, [resultsAppearFrame, resultsAppearFrame + 10], [0, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill style={{ backgroundColor: 'white' }}>
            {/* Header / Search Bar */}
            <div style={{
                width: '100%',
                padding: '40px',
                borderBottom: '2px solid #dbdbdb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                zIndex: 10,
            }}>
                <div style={{
                    width: '90%',
                    height: '80px',
                    backgroundColor: '#efefef',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 30px',
                    fontSize: '36px',
                    color: '#8e8e8e',
                    fontFamily: 'sans-serif',
                }}>
                    <span style={{ marginRight: '20px' }}>🔍</span>
                    <span style={{ color: '#262626' }}>
                        <TypedText text="@furkank2078" startFrame={startTypingFrame} />
                    </span>
                    {/* Blinking Cursor for Typing */}
                    <span style={{
                        opacity: (frame - startTypingFrame) < typingDuration && frame % 10 < 5 ? 1 : 0,
                        marginLeft: '2px',
                        borderRight: '2px solid black',
                        height: '40px'
                    }} />
                </div>
            </div>

            {/* Simulated Search Cursor */}
            {/* Note: This cursor is for the typing part if we wanted to animate it to the box, 
                 but for now we'll just have a cursor that clicks the result. */}
            <Cursor
                startX={900}
                startY={1800}
                endX={540}
                endY={350} // First result position
                startFrame={cursorMoveStartFrame}
                duration={40}
                clickFrameOffset={10}
                opacityDelay={50}
            />

            {/* Results List */}
            <div style={{
                marginTop: '40px',
                width: '100%',
                opacity: resultsOpacity,
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Result 1: User (The one clicked) */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '30px 40px',
                    backgroundColor: frame > cursorClickFrame ? '#f0f0f0' : 'white', // Highlight on click
                }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginRight: '30px',
                        border: '2px solid #dbdbdb'
                    }}>
                        <Img src={staticFile('avatar.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>furkank2078</span>
                        <span style={{ fontSize: '28px', color: '#8e8e8e', fontFamily: 'sans-serif' }}>Furkan K.</span>
                    </div>
                </div>

                {/* Result 2: Alper */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '30px 40px',
                }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        backgroundColor: '#e1306c', // Instagram color placeholder
                        marginRight: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif'
                    }}>A</div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>alperthecaglar</span>
                        <span style={{ fontSize: '28px', color: '#8e8e8e', fontFamily: 'sans-serif' }}>Alper Çağlar</span>
                    </div>
                </div>

                {/* Result 3: Sinan */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '30px 40px',
                }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        backgroundColor: '#5851db', // Instagram color placeholder
                        marginRight: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif'
                    }}>S</div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>sinancetinbilisim</span>
                        <span style={{ fontSize: '28px', color: '#8e8e8e', fontFamily: 'sans-serif' }}>Sinan Çetin</span>
                    </div>
                </div>
            </div>

        </AbsoluteFill>
    );
};
