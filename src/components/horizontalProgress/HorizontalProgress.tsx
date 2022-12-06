import React, { useState, useEffect, FC } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { colors } from '../../shared/colors';

export interface HorizontalProgressProps {
  color?: string;
  initialProgress?: number;
  progress?: number;
  duration?: number;
}

export const HorizontalProgress: FC<HorizontalProgressProps> = ({
  color = 'blue',
  initialProgress = 0,
  progress = 0,
  duration = 2000,
}) => {
  const [progressState, setProgressState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      animateProgress();
    }, 300);
  }, [initialProgress]);

  const progAnimation = new Animated.Value(initialProgress);
  const animateProgress = () => {
    progAnimation.addListener(({ value }) => {
      setProgressState(value);
    });
    Animated.timing(progAnimation, {
      toValue: progress,
      duration,
      easing: Easing.quad,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View testID={'progress'} style={styles.container}>
      <Animated.View
        style={[
          styles.progressBarStyle,
          { backgroundColor: color, width: `${progressState}%` },
        ]}
      />
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.greyLight,
  },
  progressBarStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    borderRadius: 6,
  },
});
