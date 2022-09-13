import withUserContext from '../../hoc/withUserContext';
import AddtodoStyle from './AddtodoStyle.module.css';
import React, { useState, useEffect } from 'react';

function Addtodo({ user, navigate }) {
  

  useEffect(() => {
    if (user.username === '' && user.password === '' && !user.isAuth) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <div className={AddtodoStyle.container}>Add todo</div>
    </>
  );
}

export default withUserContext(Addtodo);
