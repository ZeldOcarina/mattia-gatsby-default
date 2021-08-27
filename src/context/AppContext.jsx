import React, { useState } from "react";

const AppContext = React.createContext({});

function ContextProvider(props) {
  const [currentState, setCurrentState] = useState({});

  return <AppContext.Provider value={{ currentState, setCurrentState }}>{props.children}</AppContext.Provider>;
}

export default AppContext;
export { ContextProvider };
