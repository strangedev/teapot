import { WithTheme } from '../../types/WithTheme';
import styled, { Keyframes, keyframes } from 'styled-components';

interface LetterProps {
  animationDelay: number;
}

const changeColor = ({ theme }: WithTheme): Keyframes => keyframes`
  from {
    color: ${theme.colors.primary};
  }
  to {
    color: ${theme.colors.secondary};
  }
`;

const Letter = styled.div<LetterProps & WithTheme>`
  font-family: Monaca, monospace;
  ${({ theme }: WithTheme): string => `
    color: ${theme.colors.primary};
  `}
  margin: 0 1em;

  animation: ${changeColor};

  ${({ theme, animationDelay }: LetterProps & WithTheme): string => `
  animation-delay: ${animationDelay}s;
  animation-duration: ${theme.animations.headline.durationSeconds}s;
  `}

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
`;

export {
  Letter
};
