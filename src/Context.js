import React, {useState, createContext} from 'react';

export const HeaderButtonContext = createContext();

export const HeaderButtonContextProvider = (props) => {
  let hiddenLocationsSwitch = {location1:0, location2:0, location3:0, location4:0};

  const [hiddenLocationObject, setHiddenLocationSwitch] = useState(hiddenLocationsSwitch);

  return (
    <HeaderButtonContext.Provider value={[hiddenLocationObject, setHiddenLocationSwitch]}>
      {props.children}
    </HeaderButtonContext.Provider>
  );
};
