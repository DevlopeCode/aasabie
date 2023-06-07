const color: Color = {
  //themes
  light: {
    primary: '#003E52',

    //theme secondary color
    secondary: '#18988B',
    secondaryLight: '#EDFAF8',

    //theme tertiary color
    tertiary: '#6BCEAF',
    //font colors
    fontPrimary: '#272727',
    fontSecondary: '#25395B',
    fontTertiary: '#3C4043',

    // generic colors with combinations
    black: '#000000',
    black1: '#333333',
    black2: '#666666',

    white: '#FFFFFF',
    green: '#7FBB17',
    red: '#F26178',

    //informative/action colors
    danger: '#FC4E4E',
    success: '#92FC5B',
    info: '#5890FF',

    //used gray code
    gray1: '#C1C1C1',
    gray2: '#5A5858',
    gray3: '#808080',
    gray4: '#D9D9D9',
    gray5: '#F0F0F0',
    gray6: '#9A9A9A',
    gray7: '#5A5A5A',
    gray8: '#404040',
    gray9: '#CCCCCC',
  },
  dark: {
    primary: '#003E52',
    //theme secondary color
    secondary: '#18988B',
    secondaryLight: '#EDFAF8',
    //theme tertiary color
    tertiary: '#6BCEAF',
    //font colors
    fontPrimary: '#272727',
    fontSecondary: '#25395B',
    fontTertiary: '#3C4043',

    // generic colors with combinations
    black: '#000000',
    black1: '#333333',
    black2: '#666666',

    white: '#FFFFFF',
    green: '#7FBB17',
    red: '#F26178',

    //informative/action colors
    danger: '#FC4E4E',
    success: '#92FC5B',
    info: '#5890FF',

    //used gray code
    gray1: '#C1C1C1',
    gray2: '#5A5858',
    gray3: '#808080',
    gray4: '#D9D9D9',
    gray5: '#F0F0F0',
    gray6: '#9A9A9A',
    gray7: '#5A5A5A',
    gray8: '#404040',
    gray9: '#CCCCCC',
  },
};
export interface Color {
  //theme
  light: {
    //theme color
    primary: string;
    secondary: string;
    secondaryLight: string;
    tertiary: string;

    //fonts color
    fontPrimary: string;
    fontSecondary: string;
    fontTertiary: string;

    // generic colors with combinations
    black: string;
    black1: string;
    black2: string;

    white: string;

    green: string;
    red: string;
    // informative/action colors
    danger: string;
    success: string;
    info: string;

    //gray color code
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    gray8: string;
    gray9: string;
  };
  dark: {
    //theme color
    primary: string;
    secondary: string;
    secondaryLight: string;
    tertiary: string;

    //fonts color
    fontPrimary: string;
    fontSecondary: string;
    fontTertiary: string;

    // generic colors with combinations
    black: string;
    black1: string;
    black2: string;

    white: string;

    green: string;
    red: string;
    // informative/action colors
    danger: string;
    success: string;
    info: string;

    //gray color code
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    gray8: string;
    gray9: string;
  };
}

export default color;
