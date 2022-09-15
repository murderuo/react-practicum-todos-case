import './App.css';
import Main from './components/pages/Main/Main';
import Navbar from './components/pages/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/Routes/MainRoutes';
import UserContext, {
  UserContextProvider,
} from './components/Context/UserContext';
import { useContext } from 'react';

function App() {


  return (
    <>
      <UserContextProvider>
          <BrowserRouter>
            <Navbar />
            <MainRoutes />
          </BrowserRouter>

      </UserContextProvider>
    </>
  );
}

export default App;
