import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component.jsx";
import Home from "./pages/home/home.component.jsx";
import About from "./pages/about/about.component.jsx";
import Projects from "./pages/projects/projects.component.jsx";
import Technologies from "./pages/technologies/technologies.component.jsx";

import "./App.css";

function App() {
   return (
      <div className="App">
         <Header />
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/about">
               <About />
            </Route>
            <Route exact path="/projects">
               <Projects />
            </Route>
            <Route exact path="/technologies">
               <Technologies />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
