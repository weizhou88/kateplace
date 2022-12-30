import React, { Dispatch, SetStateAction } from "react";

interface AppContextValue {
  state: {
    ageSelected: string,
  }
  setAgeSelected: Dispatch<SetStateAction<string>>
}

const AppContext = React.createContext<AppContextValue | undefined>(undefined);

export default AppContext;