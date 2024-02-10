import './App.css';
import { createTheme, alpha, getContrastRatio } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import Navbar from './components/Navbar';

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
  typography: {
    fontFamyly: 'Comic Neue',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
