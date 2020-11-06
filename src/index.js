import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./fonts/Montserrat/Montserrat-Regular.ttf";
import "./index.css";
import App from "./App";
import { SpinnerContextProvider } from "../src/context/spinner-context.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <SpinnerContextProvider>
            <App />
         </SpinnerContextProvider>
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
);

serviceWorker.unregister();
