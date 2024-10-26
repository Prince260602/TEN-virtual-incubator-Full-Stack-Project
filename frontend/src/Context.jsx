import { createContext, useState } from "react";

export const mainContext = createContext({});

export const ContextProvider = (props) => {
    const [id ,setID] = useState(null)
    const [name,setname]= useState(null)
  return <mainContext.Provider value={{id,setID,name,setname}}>{props.children}</mainContext.Provider>;
};

