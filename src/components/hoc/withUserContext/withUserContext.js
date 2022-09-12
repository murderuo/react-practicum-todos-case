import { useContext } from 'react';
import UserContext from '../../Context/UserContext';

const WithUserContext = WrappedComponent => {
  const NewComponent = () => {
    const { userIsAuth, setUserIsAuth } = useContext(UserContext);

    return <WrappedComponent 
    userIsAuth={userIsAuth}
    setUserIsAuth={setUserIsAuth}
    ></WrappedComponent>;
  };

  return NewComponent;
};

export default WithUserContext;