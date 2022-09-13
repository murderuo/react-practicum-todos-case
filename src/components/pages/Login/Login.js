import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import withUserContext from '../../hoc/withUserContext';
import LoginStyle from './Login.module.css';

function LoginPage({ user, setUser, navigate }) {
  useEffect(() => {
    const LoggedUser = JSON.parse(localStorage.getItem('user'));
    console.log(LoggedUser);
    if (LoggedUser) {
      LoggedUser?.isAuth &&
        LoggedUser.username !== '' &&
        LoggedUser.password !== '' &&
        setUser(LoggedUser);
      navigate('/alltodos');
    } else {
      navigate('/');
    }
  }, []);

  const handleLogin = () => {
    if (user.username !== '' && user.password !== '') {
      setUser({ ...user, isAuth: true });
      const locaStorageUser = JSON.stringify({ ...user, isAuth: true });
      localStorage.setItem('user', locaStorageUser);
      navigate('/alltodos');
    }
  };


  const handleChange = e => {
    // console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={LoginStyle.container}>
        <div className={LoginStyle.form}>
          <div className="username">
            <label>Username:</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div className="password">
            <label htmlFor="">Password:</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div className={LoginStyle.login}>
            <button onClick={handleLogin}>Login !</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withUserContext(LoginPage);
