import React from 'react';
import { AbsoluteFill, Html5Audio, staticFile, Img } from 'remotion';
import { z } from 'zod';
import { Background } from './Background';
import { Avatar } from './Avatar';
import { Labels } from './Labels';
import { FollowButton } from './FollowButton';
import { Stats } from './Stats';

export const introSchema = z.object({
    username: z.string(),
    label: z.string(),
});

type IntroProps = z.infer<typeof introSchema>;

import { Cursor } from './Cursor';
import { Confetti } from './Confetti';

// ... (imports)

export const Intro: React.FC<IntroProps> = ({ username, label }) => {
    return (
        <AbsoluteFill>
            <Background />
            <Confetti />
            <Cursor />
            <AbsoluteFill
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingTop: '100px',
                    gap: '40px',
                }}
            >
                {/* Top Image (One Piece) */}
                <Img
                    src={staticFile('top_image.png')}
                    style={{
                        width: '80%',
                        maxWidth: '800px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        marginBottom: '40px'
                    }}
                />

                <Avatar />
                <Labels username={username} label={label} />
                <Stats />
                <FollowButton />
            </AbsoluteFill>
            <Html5Audio
                src={staticFile('overtaken.mp3')}
                volume={0.5} // Adjust volume as needed
            />
        </AbsoluteFill>
    );
};
