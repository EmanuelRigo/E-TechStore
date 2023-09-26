import './App.css';
import Navbarbookshop from './components/Navbarbookshop';
import CustomProvider from './components/CustomProvider';
import Main from './components/Main';
import "./firebase"
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </CustomProvider>

  );
}

export default App;
