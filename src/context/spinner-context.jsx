import React, { useState } from "react";
const SpinnerContext = React.createContext();

function SpinnerContextProvider(props) {
   const [loading, setLoading] = useState(true);
   const [afterLoad, setAfterLoad] = useState(true);
   const [direction, setDirection] = useState("");

   const toggleLoading = (load, direct) => {
      setLoading(load);
      setDirection(direct);
   };

   const toggleAfterLoad = (afterLoad) => {
      setAfterLoad(afterLoad);
   };

   return (
      <SpinnerContext.Provider
         value={{ afterLoad, loading, toggleLoading, toggleAfterLoad, direction }}
      >
         {props.children}
      </SpinnerContext.Provider>
   );
}

export { SpinnerContextProvider, SpinnerContext };
