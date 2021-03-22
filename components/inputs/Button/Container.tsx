import styled from 'styled-components';
import { WithTheme } from '../../../types/WithTheme';

interface ContainerProps {
  state: 'okay' | 'busy' | 'failed';
}

const getColor = function ({ theme, state }: ContainerProps & WithTheme): string {
  switch (state) {
    case 'okay': {
      return theme.colors.primary;
    }
    case 'busy': {
      return theme.colors.secondary;
    }
    case 'failed':
    default: {
      return theme.colors.error;
    }
  }
};

const Container = styled.div<ContainerProps & WithTheme>`
  display: inline-block;
  color: ${getColor};

  &:hover {
    text-decoration: underline;
  }
`;

export {
  Container
};
