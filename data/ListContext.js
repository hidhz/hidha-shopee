import { createContext, useContext, useReducer } from "react";
import listreducer from "./ListReducer";
const ListContext = createContext({});

function useListContext() {
  return useContext(ListContext);
}

export default function ListContextProvider({ children }) {
  const initialvalue = {
    data: "hallo",
  };
  const [state, dispatch] = useReducer(listreducer, initialvalue);
  return (
    <ListContext.Provider value={[state, dispatch]}>
      {children}
    </ListContext.Provider>
  );
}
