import { Route, Routes } from 'react-router-dom';
import Addtodo from '../pages/Addtodo/Addtodo';
import LoginPage from '../pages/Login/Login';
import Main from '../pages/Main/Main';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/alltodos" element={<Main />} />
      <Route path="/addtodo" element={<Addtodo />} />
    </Routes>
  );
}

export default MainRoutes;
