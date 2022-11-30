import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Image as DefaultImage } from 'react-native';
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from 'react-native-fast-image';
import { isNotEmpty, isNonEmptyArray } from '../../shared/utils';

const DEFAULT_IMAGE_SIZE = 24;
const DEFAULT_RADIUS_DIVIDER = 2;

export interface TringImageProps extends Omit<ImageStyle, 'source'> {
  style?: ImageStyle;
  name?: number | Source | string | undefined;
  url?: string;
  size?: number;
  backgroundColor?: ImageStyle['backgroundColor'];
  type?: 'round' | 'standard';
  fallback?: boolean;
  fallbackSource?: any;
  resizeMode?: ResizeMode;
  defaultImageStyle?: ImageStyle;
}

export const TringImage: FunctionComponent<TringImageProps> = ({
  name,
  size = DEFAULT_IMAGE_SIZE,
  style,
  backgroundColor = 'transparent',
  type = 'standard',
  resizeMode = 'contain',
  url,
  fallback = false,
  fallbackSource,
  defaultImageStyle,
  ...props
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [isLoadEnd, setIsLoadEnd] = useState(false);

  const isRounded = type === 'round';

  const imageStyle: ImageStyle | any = {
    height: size,
    width: size,
  };

  const borderStyle: ImageStyle = {
    borderRadius: isRounded ? size / DEFAULT_RADIUS_DIVIDER : 0,
    backgroundColor,
  };

  let isValidImageUrl = true;
  const imageUrlPathArray: any = isNotEmpty(url) && url?.split('/');
  if (
    !imageUrlPathArray ||
    !isNonEmptyArray(imageUrlPathArray) ||
    imageUrlPathArray.length < 3 ||
    !isNotEmpty(imageUrlPathArray[3])
  ) {
    isValidImageUrl = false;
  }

  if (!isNotEmpty(name) && !isValidImageUrl) {
    name = fallback && fallbackSource ? fallbackSource : null;
  }

  const onLoadEnd = () => setIsLoadEnd(true);

  return (
    <>
      {!isLoadEnd && fallback && fallbackSource && (
        <DefaultImage
          source={fallbackSource}
          style={[
            imageStyle,
            borderStyle,
            styles.defaultImage,
            defaultImageStyle,
          ]}
        />
      )}
      <FastImage
        style={StyleSheet.flatten([imageStyle, borderStyle, style])}
        source={name ? name : showPlaceholder ? fallbackSource : { uri: url }}
        onError={() => !name && setShowPlaceholder(true)}
        resizeMode={resizeMode}
        onLoadEnd={onLoadEnd}
        {...props}
      />
    </>
  );
};

const styles = StyleSheet.create({
  defaultImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
});
