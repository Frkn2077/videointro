
import { Composition } from 'remotion';
import { Intro, introSchema } from './Intro';

export const RemotionVideo: React.FC = () => {
    return (
        <>
            <Composition
                id="Intro"
                component={Intro}
                durationInFrames={300} // 10 seconds at 30fps
                fps={30}
                width={1080}
                height={1920}
                schema={introSchema}
                defaultProps={{
                    username: '@furkank2078',
                    label: 'Yenilikler için takip etmeyi unutmayın',
                }}
            />
        </>
    );
};

