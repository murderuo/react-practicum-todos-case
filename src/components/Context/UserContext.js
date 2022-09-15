import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // const [userIsAuth, setUserIsAuth] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
    isAuth: false,
  });

  const values = { user, setUser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContextProvider };
export default UserContext;
