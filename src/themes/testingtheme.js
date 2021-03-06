import { createMuiTheme } from '@material-ui/core';
import HelveticaWorld from '../font/HelveticaWorld-Regular.ttf';


const theme = createMuiTheme ({
  palette: {
    primary: {
      light: '#717681',
      main: 'rgba(44, 45, 47, 0.9)',
      dark: 'rgba(1, 1, 1, 0.6)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#EDEEF3',
      dark: '#DBDDE6',
      contrastText: '#212121',
    },
    background: {
      paper: '#131313',
      default: '#212121',
    },
    action: {
      active: 'rgba(220, 63, 63, 1)',
      hover: 'rgba(255, 255, 255, 0.1)',
      hoverOpacity: 0.08,
      selected: 'rgba(178, 94, 99, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(113, 118, 129, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(178, 94, 99, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    }, 
    text: {
      primary: '#fff',
    },
  }, 
  typography: {
    fontFamily: 'HelveticaWorld',
    button: {
      fontFamily: 'HelveticaWorld',
      textTransform: 'none',
    }
  },
  overrides: {
    MuiLink: {
      underlineHover: {
        color: '#fff',
        textDecoration: 'none',
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [HelveticaWorld],
      },
    },
  },
});

export default theme;