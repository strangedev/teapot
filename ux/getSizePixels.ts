import { Size } from '../types/Size';
import { WithTheme } from '../types/WithTheme';

const getSizePixels = function ({ theme, size }: { size: Size } & WithTheme): number {
  switch (size) {
    case 'small': {
      return theme.size.unitPixels * 4;
    }
    case 'medium': {
      return theme.size.unitPixels * 8;
    }
    case 'large':
    default: {
      return theme.size.unitPixels * 12;
    }
  }
};

export {
  getSizePixels
};
