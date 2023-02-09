// import React, { useEffect, Fragment } from 'react';
// import { withRouter } from 'react-router-dom';

// function ScrollToTop({ history, children }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, []);

//   return <Fragment>{children}</Fragment>;
// }

// export default withRouter(ScrollToTop);

import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
function ScrollToTop({ children }) {
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location, navType]);
  return <>{children}</>;
}
export default ScrollToTop;