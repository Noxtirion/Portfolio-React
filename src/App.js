import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component.jsx";
import Home from "./pages/home/home.component.jsx";
import About from "./pages/about/about.component.jsx";
import Projects from "./pages/projects/projects.component.jsx";
import Technologies from "./pages/technologies/technologies.component.jsx";
import ButtonUp from "./components/button-up/button-up.component.jsx";
import { useInView } from "react-intersection-observer";

import "./App.css";

function App() {
   const [ref, inView] = useInView({
      threshold: 0,
      rootMargin: "100px"
   });

   const checkView = !inView;

   return (
      <div className="App">
         <div className="top" ref={ref}></div>
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
         <ButtonUp appear={checkView ? "appear" : ""} />
      </div>
   );
}

export default App;
