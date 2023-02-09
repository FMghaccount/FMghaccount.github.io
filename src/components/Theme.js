import { createMuiTheme } from '@mui/material/styles';

const Theme = createMuiTheme({
  typography: {
    "fontFamily": `iranyekan`,
  },
  components: {
    // Name of the component
    MuiCardHeader: {
      styleOverrides: {
        subheader: {
          padding: 10
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          textAlign: 'justify',
          direction: 'rtl',
          paddingRight: '13px'
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1900,
      xxxl: 2250
    },
  },
});

export default Theme