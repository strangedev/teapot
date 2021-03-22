import styled from 'styled-components';
import { Urgency } from '../../types/Urgency';
import { WithTheme } from '../../types/WithTheme';

interface HeadlineProps {
  urgency: Urgency;
}

const color = function ({ theme, urgency }: HeadlineProps & WithTheme): string {
  switch (urgency) {
    case 'urgent': {
      return theme.colors.error;
    }
    default: {
      return theme.colors.primary;
    }
  }
};
const Headline = styled.div`
  border-bottom: 1px solid ${color};
`;

export {
  Headline
};
