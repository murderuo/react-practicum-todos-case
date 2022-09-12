import { useState } from 'react';
import withUserContext from '../../hoc/withUserContext';
import LoginStyle from './Login.module.css';

function LoginPage({ userIsAuth, setUserIsAuth }) {


  const [user, setUser] = useState({ username: '', password: '' });


  const handleLogin = () => {
    if (user.username === 'admin' && user.password === 'admin') {
      const locaStorageUser = JSON.stringify({ ...user, isAuth: true });
      localStorage.setItem("user", locaStorageUser);
      setUserIsAuth(true);
    }
  };

  const handleChange = e => {
    console.log(user);
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
