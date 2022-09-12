import NavbarStyle from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

import withUserContext from '../../hoc/withUserContext';
import { useEffect } from 'react';

function Navbar({ userIsAuth, setUserIsAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    const LoggedUser = JSON.parse(localStorage.getItem('user'));
    LoggedUser?.isAuth ? setUserIsAuth(true) : setUserIsAuth(false);
    LoggedUser?.isAuth && navigate('/alltodos');
  }, []);

  return (
    <>
      <div className={NavbarStyle.header}>
        {!userIsAuth ? (
          <div className={NavbarStyle.mainmenu}>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className={NavbarStyle.loggedmenu}>
              <ul>
                <li>
                  <Link to="/alltodos">All Todos</Link>
                </li>
                <li>
                  <Link to="/addtodo">Add New Todo</Link>
                </li>
              </ul>
            </div>
            <div className={NavbarStyle.loggeduser}>test</div>
          </>
        )}
      </div>
    </>
  );
}

export default withUserContext(Navbar);
