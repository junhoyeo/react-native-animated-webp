# 💃🏻 react-native-animated-webp
[![repo status](https://img.shields.io/badge/repo%20status-Concept-010101?style=for-the-badge)](https://www.repostatus.org/)

> Display and control **Animated WebP** images in React Native the **hacky** way

## 📦 Installation

```bash
npm install react-native-animated-webp
# Or using yarn
yarn add react-native-animated-webp
```

## 🥁 Usage

```tsx
import React, { useRef } from 'react';
import { Button, View } from 'react-native';
import AnimatedPlayer from 'react-native-animated-webp';

import thumbnailImage from '../assets/thumbnail.png';
import animatedWebPImage from '../assets/animated.webp';

const App: React.FC = () => {
  const playerRef = useRef();

  const onPressButton = () => {
    if(!playerRef.current?.isPlaying) {
      playerRef.current?.play();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AnimatedPlayer
        ref={playerRef}
        thumbnailSource={thumbnailImage}
        animatedSource={animatedWebPImage}
        duration={500}
        autoplay={false}
      />
      <Button
        title="Click Me"
        onPress={onPressButton}
      />
    </View>
  );
};
```
