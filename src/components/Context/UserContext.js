import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userIsAuth, setUserIsAuth] = useState(false);

  const values = { userIsAuth, setUserIsAuth };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContextProvider };
export default UserContext;
