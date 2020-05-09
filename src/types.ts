import { MutableRefObject } from 'react';
import { StyleProp } from 'react-native';
import { Source as ImageSource, ImageStyle } from 'react-native-fast-image';

export interface IAnimatedPlayerReference {
  isPlaying: boolean;
  play: (timeoutCallback?: () => void) => void;
  stop: () => void;
}

export interface IAnimatedPlayer {
  thumbnailSource: ImageSource;
  animatedSource: ImageSource;
  duration?: number;
  delay?: number;
  autoplay?: boolean;
  loop?: boolean;
  style?: StyleProp<ImageStyle>;
  ref?: MutableRefObject<IAnimatedPlayerReference | undefined>;
}
