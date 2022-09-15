import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // const [userIsAuth, setUserIsAuth] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
    isAuth: false,
  });
  const [theme, setTheme] = useState('light');

  const values = { user, setUser, theme, setTheme};

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContextProvider };
export default UserContext;
