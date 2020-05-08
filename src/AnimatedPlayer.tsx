import React, {
  forwardRef,
  useEffect,
  useState,
  useMemo,
  useImperativeHandle,
} from 'react';
import { StyleProp } from 'react-native';
import FastImage, { Source as ImageSource, ImageStyle } from 'react-native-fast-image';

interface IAnimatedPlayer {
  thumbnailSource: ImageSource;
  animatedSource: ImageSource;
  duration?: number;
  delay?: number;
  autoplay?: boolean;
  loop?: boolean;
  style?: StyleProp<ImageStyle>;
}

const AnimatedPlayer: React.FC<IAnimatedPlayer> = forwardRef(
  ({ thumbnailSource, animatedSource, duration, style, delay = 0, autoplay = false, loop = false }, ref) => {
    const [isPlaying, setIsPlaying] = useState(autoplay);
    const [playIntervalID, setPlayIntervalID] = useState<number | undefined>(undefined);
    const [loopIntervalID, setLoopIntervalID] = useState<number | undefined>(undefined);

    const currentSource = useMemo(
      () => isPlaying ? animatedSource : thumbnailSource,
      [isPlaying],
    );

    const play = () => {
      setIsPlaying(true);
      if (duration && duration > 0) {
        setPlayIntervalID(setInterval(
          () => setIsPlaying(false),
          duration,
        ));
      }
    };

    const stop = () => {
      if (isPlaying) {
        clearInterval(playIntervalID);
      }
      setIsPlaying(false);
    };

    useEffect(
      () => {
        if (loop) {
          setLoopIntervalID(setInterval(
            play,
            delay,
          ));
          return clearInterval(loopIntervalID);
        }
      },
      [loop],
    );

    useImperativeHandle(ref, () => ({
      isPlaying,
      play,
      stop,
    }));

    return (
      <FastImage
        source={currentSource}
        style={style}
      />
    );
  },
);

export default AnimatedPlayer;
