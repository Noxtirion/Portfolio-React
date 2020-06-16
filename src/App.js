import React from "react";

import Header from "./components/header/header.component.jsx";
import Home from "./pages/home/home.component.jsx";

import "./App.css";

function App() {
   return (
      <div className="App">
         <Header />
         <Home />
      </div>
   );
}

export default App;
