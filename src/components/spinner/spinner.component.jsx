import React, { useEffect, useContext } from "react";
import { SpinnerContext } from "../../context/spinner-context.jsx";

import "./spinner.styles.scss";

function Spinner() {
   const { loading, direction, toggleAfterLoad } = useContext(SpinnerContext);
   const column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   useEffect(() => {
      const load = setTimeout(() => {
         toggleAfterLoad(false);
      }, 1100);
      return () => clearTimeout(load);
   }, [toggleAfterLoad, loading]);

   const columnElements = column.map((item) => <div className="loading-page__column" key={item} />);

   return <div className={`loading-page ${direction} `}>{columnElements}</div>;
}

export default Spinner;
