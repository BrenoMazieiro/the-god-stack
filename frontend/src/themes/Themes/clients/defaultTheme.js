const genericDesign = {
  fonts: {
    primary: 'Roboto, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
  },
  sizes: {
    pagesBreakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xlg: '1200px',

    },
    maxWidth: '1100px',
    headerWidth: '1400px',
    text: {
      lg: '24px',
      md: '22px',
      sm: '19px',
    },
    button: {
      lg: {
        width: '440px',
        height: '40px',
      },
      md: {
        width: '220px',
        height: '20px',
      },
      sm: {
        width: '110px',
        height: '10px',
      },
    },
    img: {
      lg: {
        width: '256px',
        height: '256px',
      },
      md: {
        width: '128px',
        height: '128px',
      },
      sm: {
        width: '64px',
        height: '64px',
      },
    },
  },
}

const darkLight = {
  dark: {
    colors: {
      primary: ['#677C87'],
      secundary: [],
      background: ['#575E98'],
      text: ['#F1F2F2'],
      actions: {
        neutral: '#1890FF',
        success: '#52C41A',
        warning: '#FADB14',
        error: '#FF8484',
      },
    },
  },
  light: {
    colors: {
      primary: ['#677C87'],
      secundary: [],
      background: ['#F1F2F2'],
      text: ['#6E68B1'],
      actions: {
        neutral: '#1890FF',
        success: '#52C41A',
        warning: '#FADB14',
        error: '#FF8484',
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
