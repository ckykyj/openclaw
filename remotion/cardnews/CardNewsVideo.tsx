import {AbsoluteFill, Img, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {slides} from './slides';

const slideDuration = 90;

function SlideImage({src, index}: {src: string; index: number}) {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const enter = spring({
    fps,
    frame,
    config: {
      damping: 18,
      stiffness: 110,
    },
    durationInFrames: 24,
  });

  const opacity = interpolate(frame, [0, 10, slideDuration - 12, slideDuration - 1], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 각 슬라이드마다 확대 방향을 바꿔 단조롭지 않게 처리합니다.
  const zoomBase = index % 2 === 0 ? 1.04 : 1.0;
  const zoom = zoomBase + enter * 0.03;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#eef2ff',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <Img
        src={staticFile(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${zoom})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 40,
          right: 40,
          bottom: 36,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#1e3a8a',
          fontFamily: 'Pretendard, Apple SD Gothic Neo, Noto Sans KR, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            background: 'rgba(255,255,255,0.88)',
            borderRadius: 999,
            padding: '8px 14px',
          }}
        >
          {index + 1}/{slides.length}
        </div>
      </div>
    </AbsoluteFill>
  );
}

export function CardNewsVideo() {
  return (
    <AbsoluteFill>
      {slides.map((slide, index) => (
        <Sequence key={slide.image} from={index * slideDuration} durationInFrames={slideDuration}>
          <SlideImage src={slide.image} index={index} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
}

export const totalDurationInFrames = slides.length * slideDuration;
