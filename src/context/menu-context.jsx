import React, { useState } from "react";
const MenuContext = React.createContext();

function MenuContextProvider(props) {
   const [open, setOpen] = useState(false);

   const toggleButton = () => {
      setOpen(!open);
   };

   return (
      <MenuContext.Provider value={{ open, toggleButton }}>{props.children}</MenuContext.Provider>
   );
}

export { MenuContextProvider, MenuContext };
