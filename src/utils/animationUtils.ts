import { css, keyframes } from 'styled-components';

export const ANIMATION_DURATION = '300ms';
const TRANSITION_TYPE = 'ease-in-out';

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const animateOpacity = () =>
  css`
    animation: ${opacityAnimation} ${ANIMATION_DURATION} ${TRANSITION_TYPE};
  `;
