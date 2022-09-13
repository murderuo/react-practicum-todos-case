import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Context/UserContext';

const WithUserContext = WrappedComponent => {
  const NewComponent = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    return (
      <WrappedComponent
        user={user}
        setUser={setUser}
        navigate={navigate}
      ></WrappedComponent>
    );
  };

  return NewComponent;
};

export default WithUserContext;
