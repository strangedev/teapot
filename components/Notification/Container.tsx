import styled from 'styled-components';
import { Urgency } from '../../types/Urgency';
import { WithTheme } from '../../types/WithTheme';

interface ContainerProps {
  urgency: Urgency;
}

const color = function ({ theme, urgency }: ContainerProps & WithTheme): string {
  switch (urgency) {
    case 'urgent': {
      return theme.colors.error;
    }
    default: {
      return theme.colors.primary;
    }
  }
};

const Container = styled.div<ContainerProps>`
  color: ${color};
  max-width: 55%;
  margin: 20px 0;
`;

export {
  Container
};
