import NavbarStyle from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

import withUserContext from '../../hoc/withUserContext';

function Navbar({ user, setUser, navigate }) {
  console.log('navbar', user.isAuth);

  return (
    <>
      <div className={NavbarStyle.header}>
        {!user.isAuth ? (
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
            <div className={NavbarStyle.loggeduser}>
              {user.username}
              <div
                className={NavbarStyle.logout}
                onClick={() => {
                  localStorage.removeItem('user');
                  setUser({ ...user, isAuth: false });
                  navigate('/');
                }}
              >
                Log Out!
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default withUserContext(Navbar);
