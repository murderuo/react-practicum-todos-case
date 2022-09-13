import { Route, Routes } from 'react-router-dom';
import withUserContext from '../hoc/withUserContext';
import Addtodo from '../pages/Addtodo/Addtodo';
import LoginPage from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import React, { useEffect } from 'react';

function MainRoutes({ user, setUser, navigate }) {
  return (
    <Routes>
      <Route path="/" element={!user.isAuth ? <LoginPage /> : <Main />} />
      <Route path="/alltodos" element={<Main />} />
      <Route
        path="/addtodo"
        element={!user.isAuth ? <LoginPage /> : <Addtodo />}
      />
      <Route path="/login" element={!user.isAuth ? <LoginPage /> : <Main />} />
    </Routes>
  );
}

export default withUserContext(MainRoutes);
