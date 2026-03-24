import {Composition} from 'remotion';
import {CardNewsVideo, totalDurationInFrames} from './CardNewsVideo';

export function RemotionRoot() {
  return (
    <Composition
      id="DentalCardNews"
      component={CardNewsVideo}
      durationInFrames={totalDurationInFrames}
      fps={30}
      width={1080}
      height={1350}
    />
  );
}
