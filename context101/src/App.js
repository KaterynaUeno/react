import React, { useContext } from "react";
import "./App.css";
import ThemeContext from "./contexts/themeContexts";

function App() {
  // const value = useContext(ThemeContext);
  return <ThemeContext.Provider value={"State of app"}></ThemeContext.Provider>;
}

export default App;
