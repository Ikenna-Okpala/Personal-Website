import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import React, { Fragment, useRef } from "react";
import Home from "./components/home/home.component";
import { ThemeProvider } from "./context/themeContext";

function App() {
  // no index out of bound in javascript
  // forwarding refs ... refs cannot be passed directly to child

  return (
    <ThemeProvider>
      <Fragment>
        <Navigation></Navigation>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
