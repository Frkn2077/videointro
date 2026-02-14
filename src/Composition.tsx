
import { Composition, Series } from 'remotion';
import { Intro, introSchema } from './Intro';
import { SearchScene } from './SearchScene';

export const RemotionVideo: React.FC = () => {
    return (
        <>
            <Composition
                id="Intro"
                component={() => (
                    <Series>
                        <Series.Sequence durationInFrames={200}>
                            <SearchScene />
                        </Series.Sequence>
                        <Series.Sequence durationInFrames={300}>
                            <Intro username="@furkank2078" label="Yenilikler için takip etmeyi unutmayın" />
                        </Series.Sequence>
                    </Series>
                )}
                durationInFrames={500} // Total duration (200 + 300)
                fps={30}
                width={1080}
                height={1920}
            // schema={introSchema} // Schema not easily compatible with component function wrapping, hardcoding props for now or need to lift state
            />
        </>
    );
};


