import Alltodos from '../Alltodos';
import React, { useEffect } from 'react';
import withUserContext from '../../hoc/withUserContext/';
import { useNavigate } from 'react-router-dom';

function Main({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username === '' && user.password === '' && !user.isAuth) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Alltodos />
    </>
  );
}

export default withUserContext(Main);
