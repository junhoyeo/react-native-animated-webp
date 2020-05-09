<h1 align="center">
  💃🏻 react-native-animated-webp
</h1>
<p align="center">
  <img alt="example animated player" src="./docs/images/example.gif" width="312px">
  <br />
  <a href="https://www.npmjs.org/package/react-native-animated-webp">
    <img alt="npm version" src="https://img.shields.io/npm/v/react-native-animated-webp.svg?style=flat-square" />
  </a>
  <a href="https://www.npmjs.org/package/react-native-animated-webp">
    <img alt="weekly downloads" src="https://img.shields.io/npm/dw/react-native-animated-webp.svg?style=flat-square" />
  </a>
  <a href="https://www.npmjs.org/package/react-native-animated-webp">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/react-native-animated-webp.svg?style=flat-square" />
  </a>
  <a href="./LICENSE">
    <img alit="license" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
  </a>
  <br />
  <a href="https://nodei.co/npm/react-native-animated-webp/">
    <img alt="NPM" src="https://nodei.co/npm/react-native-animated-webp.png" />
  </a>
</p>

> Display and control **Animated WebP** images in React Native the **hacky** way

## 📦 Installation

### 👋 PeerDependencies first
This module uses [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) for rendering images, so you should install it first besides with `react` and `react-native`.

```bash
npm install react-native-fast-image
# Or using yarn
yarn add react-native-fast-image
```

### 🙌 The package

```bash
npm install react-native-animated-webp
# Or using yarn
yarn add react-native-animated-webp
```

###  For iOS
Add the following three lines inside your project's [./ios/{YourAppName}/AppDelegate.m](./example/ios/example/AppDelegate.m) file for [Animated WebP support](https://github.com/DylanVann/react-native-fast-image/issues/522).

```diff
+ #import "SDImageCodersManager.h"
+ #import <SDWebImageWebPCoder/SDImageWebPCoder.h>

﹣ (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // . . .

+    [SDImageCodersManager.sharedManager addCoder:SDImageWebPCoder.sharedCoder];

    // . . .
}
```

## 🥁 Usage

```tsx
import React, { useRef } from 'react';
import { Button, View } from 'react-native';
import AnimatedPlayer, { IAnimatedPlayerReference } from 'react-native-animated-webp';

import thumbnailImage from '../assets/thumbnail.png';
import animatedWebPImage from '../assets/animated.webp';

const App: React.FC = () => {
  const playerRef = useRef<IAnimatedPlayerReference>();

  const onPressButton = () => {
    if(!playerRef.current?.isPlaying) {
      playerRef.current?.play(() => console.log('callback after play ended'));
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
        loop={false}
      />
      <Button
        title="Click Me"
        onPress={onPressButton}
      />
    </View>
  );
};
```
