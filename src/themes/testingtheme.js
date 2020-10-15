import { createMuiTheme } from '@material-ui/core';
import HelveticaWorld from '../font/HelveticaWorld-Regular.ttf';


const theme = createMuiTheme ({
  palette: {
    primary: {
      light: '#717681',
      main: '#242425',
      dark: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#EDEEF3',
      dark: '#DBDDE6',
      contrastText: '#212121',
    },
    background: {
      paper: '#242425',
      default: '#212121',
    }
  },
  typography: {
    fontFamily: 'HelveticaWorld',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [HelveticaWorld],
      },
    },
  },
});

export default theme;