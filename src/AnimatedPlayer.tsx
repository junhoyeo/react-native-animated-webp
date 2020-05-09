import React, {
  forwardRef,
  useEffect,
  useState,
  useMemo,
  useImperativeHandle,
} from 'react';
import FastImage from 'react-native-fast-image';

import {
  IAnimatedPlayer,
  IAnimatedPlayerReference,
} from './types';

const AnimatedPlayer = forwardRef<IAnimatedPlayerReference, IAnimatedPlayer>(
  ({ thumbnailSource, animatedSource, duration = 0, style, delay = 0, autoplay = false, loop = false }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playIntervalID, setPlayIntervalID] = useState<number | undefined>(undefined);
    const [loopIntervalID, setLoopIntervalID] = useState<number | undefined>(undefined);

    const currentSource = useMemo(
      () => isPlaying ? animatedSource : thumbnailSource,
      [isPlaying],
    );

    const play = (timeoutCallback?: () => void) => {
      setIsPlaying(true);
      if (duration && duration > 0) {
        setPlayIntervalID(setTimeout(
          () => {
            setIsPlaying(false);
            if (timeoutCallback) {
              timeoutCallback();
            }
          },
          duration,
        ));
      }
    };

    const stop = () => {
      if (isPlaying) {
        clearTimeout(playIntervalID);
      }
      setIsPlaying(false);
    };

    useEffect(
      () => {
        if (autoplay) {
          play();
        }
        if (loop) {
          setLoopIntervalID(setInterval(
            play,
            delay + duration,
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
