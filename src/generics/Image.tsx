import { FC } from 'react';
import styled from 'styled-components';
import { ImageProps } from '@/types/types';

const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.fit};
`;

const Image: FC<ImageProps> = ({ src, alt, width, height, fit }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} fit={fit} />;
};

const defaultProps: Partial<ImageProps> = {
  width: '100%',
  height: '100%',
  fit: 'cover',
};

Image.defaultProps = defaultProps;

export default Image;
