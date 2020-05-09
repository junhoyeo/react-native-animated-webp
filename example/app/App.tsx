import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/native';
import AnimatedPlayer, { IAnimatedPlayerReference } from 'react-native-animated-webp';

import thumbnailImage from './assets/thumbnail.png';
import animatedImage from './assets/animated.webp';

const App = () => {
  const playerRef = useRef<IAnimatedPlayerReference>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const onPressButton = () => {
    if (!playerRef.current?.isPlaying) {
      playerRef.current?.play(() => setIsPlaying(false));
      setIsPlaying(true);
    } else {
      playerRef.current?.stop();
      setIsPlaying(false);
    }
  };

  useEffect(
    () => setIsPlaying(playerRef.current?.isPlaying || false),
    [],
  );

  return (
    <Container>
      <Image
        ref={playerRef}
        thumbnailSource={thumbnailImage}
        animatedSource={animatedImage}
        duration={2590}
        autoplay
      />
      <Button
        onPress={onPressButton}
      >
        <ButtonText>
          {isPlaying ? 'Stop' : 'Play'}
        </ButtonText>
      </Button>
    </Container>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3E38F2;
`;

const Image = styled(AnimatedPlayer)`
  width: 200px;
  height: 200px;
  border-radius: 36px;
`;

const Button = styled.TouchableOpacity`
  padding: 15px 25px;
  background-color: #575FF2;
  border-radius: 32px;
  margin-top: 18px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
