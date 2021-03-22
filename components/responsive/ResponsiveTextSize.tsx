import styled from 'styled-components';

const ResponsiveTextSize = styled.div`
  @media all and (max-width: 500px) {
    font-size: 6px;
  }
  @media all and (min-width: 500px) and (max-width: 800px) {
    font-size: 8px;
  }
  @media all and (min-width: 800px) and (max-width: 1000px) {
    font-size: medium;
  }
  @media all and (min-width: 1000px) and (max-width: 1500px) {
    font-size: large;
  }
  @media all and (min-width: 1500px){
    font-size: xx-large;
  }
`;

export {
  ResponsiveTextSize
};
