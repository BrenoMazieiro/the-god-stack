const genericDesign = {
  fonts: {
    primary: 'Nunito Sans, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
    size: {
      sm: '12px',
      md: '14px',
      lg: '16px',
    },
  },
  colors: {
    white: ['#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA', '#FAFAFA'],
    black: ['#111122', '#111122', '#111122', '#111122', '#111122', '#111122', '#111122', '#111122', '#111122', '#111122', '#111122', '#111122'],
    gray: ['#0F0D15', '#1D1929', '#34303E', '#4A4754', '#615E69', '#77757F', '#8E8C94', '#A5A3A9', '#BBBABF', '#D2D1D4', '#E8E8EA', '#F9F9F9'],
    blue: ['#0030CC', '#0036E6', '#003CFF', '#1A50FF', '#3363FF', '#4D77FF', '#668AFF', '#809EFF', '#99B1FF', '#B3C5FF', '#CCD8FF', '#e6ecff'],
    pink: ['#C80068', '#E10075', '#FA0082', '#FB1A8F', '#FB339B', '#FC4DA8', '#FC66B4', '#FD80C1', '#FD99CD', '#FEB3DA', '#FECCE6', '#FFE6F3'],
    green: ['#18BA92', '#1BD2A4', '#1EE9B6', '#35EBBD', '#4BEDC5', '#62F0CC', '#78F2D3', '#8FF4DB', '#A5F6E2', '#BCF8E9', '#D2FBF0', '#E9FDF8'],
    yellow: ['#CCB243', '#E6C84C', '#FFDE54', '#FFE165', '#FFE576', '#FFE887', '#FFEB98', '#FFEFAA', '#FFF2BB', '#FFF5CC', '#FFF8DD', '#FFFCEE'],
    orange: ['#CC5801', '#E66301', '#FF6E01', '#FF7D1A', '#FF8B34', '#FF9A4D', '#FFA867', '#FFB780', '#FFC599', '#FFD4B3', '#FFE2CC', '#FFF1E6'],
    red: ['#C32021', '#DC2425', '#F42829', '#F53E3E', '#F65354', '#F76969', '#F87E7F', '#F87E7F', '#FBA9A9', '#FCBFBF', '#FDD4D4', '#FEEAEA'],
    purple: ['#AE59C6', '#C364DF', '#D96FF8', '#DD7DF9', '#E18CF9', '#E49AFA', '#E8A9FB', '#ECB7FC', '#F0C5FC', '#F4D4FD', '#F7E2FE', '#FBF1FE'],
  },
  sizes: {
    pagesBreakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xlg: '1200px',

    },
    maxWidth: '1100px',
    title: {
      size: ['', '60px', '48px', '34px', '24px', '18px'],
      lineHeight: ['', '72px', '56px', '40px', '32px', '32px'],
      weight: ['', 'bold', 'bold', '800', '800', 'bold'],
    },
    button: {
      sm: {
        padding: '8px 16px 8px 16px',
        justIconPadding: '8px',
        size: '12px',
        radius: '12px',
        width: '67px',
        height: '32px',
        lineHeight: '16px',
        letterSpacing: '0.04em',
      },
      md: {
        padding: '16px',
        justIconPadding: '14px',
        size: '14px',
        radius: '16px',
        width: '86px',
        height: '48px',
        lineHeight: '16px',
        letterSpacing: '0.02em',
      },
      lg: {
        padding: '16px 24px 16px 24px',
        justIconPadding: '18px 26px 18px 26px',
        size: '16px',
        radius: '16px',
        width: '93px',
        height: '56px',
        lineHeight: '24px',
        letterSpacing: '0.03em',
      },
    },
    icon: {
      xlg: '3em',
      lg: '2.5em',
      md: '2em',
      sm: '1.5em',
      xsm: '1em',
    },
    spacing: [
      '0px',
      '8px',
      '16px',
      '24px',
      '32px',
      '40px',
      '48px',
      '56px',
      '64px',
      '72px',
      '80px',
    ],
  },
}

const darkLight = {
  dark: {
    primary: [3, 6, 9],
    borders: [3],
    text: [11, 6, 10],
    defaulTextColor: 'white',
    background: {
      primary: { color: 'black', intensity: 0 },
      secondary: { color: 'gray', intensity: 2 },
    },
    input:
    {
      background: { color: 'gray', intensity: 2 },
      textcolor: {
        color: 'gray',
        intensity: 11,
      },
      bordercolors:
      {
        primary: {
          color: 'gray',
          intensity: 3,
        },
        hover: {
          color: 'blue',
          intensity: 4,
        },
        focus: {
          color: 'blue',
          intensity: 4,
        },
        error: {
          color: 'red',
          intensity: 3,
        },
        success: {
          color: 'green',
          intensity: 1,
        },
        disabled: {
          color: 'gray',
          intensity: 3,
        },
      },
    },
  },
  light: {
    primary: [5, 7, 9],
    borders: [9],
    text: [2, 8, 10],
    defaulTextColor: 'black',
    background: {
      primary: { color: 'gray', intensity: 12 },
      secondary: { color: 'white', intensity: 1 },
    },
    input:
    {
      background: { color: 'white', intensity: 2 },
      textcolor: {
        color: 'gray',
        intensity: 2,
      },
      bordercolors:
      {
        primary: {
          color: 'gray',
          intensity: 8,
        },
        hover: {
          color: 'blue',
          intensity: 4,
        },
        focus: {
          color: 'blue',
          intensity: 4,
        },
        error: {
          color: 'red',
          intensity: 3,
        },
        success: {
          color: 'green',
          intensity: 1,
        },
        disabled: {
          color: 'gray',
          intensity: 3,
        },
      },
    },
  },
}

export default (
  {
    dark: {
      ...darkLight.dark,
      ...genericDesign,
    },
    light: {
      ...darkLight.light,
      ...genericDesign,
    },
  }
)
