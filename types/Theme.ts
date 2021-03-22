interface Theme {
  size: {
    unitPixels: number;
  };
  colors: {
    background: string;
    primary: string;
    secondary: string;
    error: string;
  };
  font: {
    family: string;
  };
  animations: {
    headline: {
      durationSeconds: number;
    };
    button: {
      durationMilliSeconds: number;
    };
  };
  transition: {
    durationSeconds: number;
  };
}

export type {
  Theme
};
