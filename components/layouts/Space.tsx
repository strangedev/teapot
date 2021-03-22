import { getSizePixels } from '../../ux/getSizePixels';
import { Size } from '../../types/Size';
import styled from 'styled-components';

interface SpaceProps {
  size: Size;
}

const Space = styled.div<SpaceProps>`
  display: block;  
  margin-top: ${getSizePixels}px;
`;

export {
  Space
};
