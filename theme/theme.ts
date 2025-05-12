export type TThemeColors = {
  text: {
    primary: string
    secondary: string
    disabled: string
  };
  title: {
    primary: string
    secondary: string
  };
  background: {
    primary: string
    secondary: string
  };
  button: {
    primary: string
    primaryButtonContents: string
    secondary: string
    secondaryButtonContents: string
    disabled: string
    disabledButtonContents: string
  };
  system: {
    success: string
    primary: string
    secondary: string
  };
};

export type TThemeObject = {
  light: TThemeColors;
  dark: TThemeColors;
};

export const themes: TThemeObject = {
  light: {
    text: {
      primary: '#131313',
      secondary: '#6C727F',
      disabled: '#8F94A3',
    },
    title: {
      primary: '#2C14DD',
      secondary: '#131313',
    },
    background: {
      primary: '#F5F7FF',
      secondary: '#FFFFFF',
    },
    button: {
      primary: '#2C14DD',
      primaryButtonContents: '#FFFFFF',
      secondary: '#FFFFFF',
      secondaryButtonContents: '#131313',
      disabled: '#F5F7FF',
      disabledButtonContents: '#131313',
    },
    system: {
      success: '#009218',
      primary: '#2C14DD',
      secondary: '#BBBBBB',
    },
  },
  dark: {
    text: {
      primary: '#FFFFFF',
      secondary: '#BFB4D5',
      disabled: '#ABA2BE',
    },
    title: {
      primary: '#F5F7FF',
      secondary: '#FFFFFF',
    },
    background: {
      primary: '#240F51',
      secondary: '#3A2762',
    },
    button: {
      primary: '#E5B4FF',
      primaryButtonContents: '#240F51',
      secondary: '#503F74',
      secondaryButtonContents: '#FFFFFF',
      disabled: '#4E3D74',
      disabledButtonContents: '#F5F7FF',
    },
    system: {
      success: '#60C771',
      primary: '#FFFFFF',
      secondary: '#503F74',
    },
  },
};
