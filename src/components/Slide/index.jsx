import React from 'react';
import { PropTypes } from 'prop-types';

import {
  StyledSlide,
  ImageContainer,
  Image,
  Information,
  Divider,
  A,
  Title,
  Description,
  Span,
  Svg,
} from './style';

export default function Slide({ img, title, description, focused }) {
  return (
    <StyledSlide>
      <ImageContainer focused={focused}>
        <a href="/">
          <Image src={img} alt="banner" />
        </a>
      </ImageContainer>
      <Information focused={focused}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Divider />
        <A href="/">
          <Span>
            바로가기
            <Svg viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
            </Svg>
          </Span>
        </A>
      </Information>
    </StyledSlide>
  );
}

Slide.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};
