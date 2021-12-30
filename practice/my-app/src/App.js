import { ThemeProvider } from "styled-components";
import "./App.css";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>App file</ThemeProvider>
    </>
  );
}

export default App;
