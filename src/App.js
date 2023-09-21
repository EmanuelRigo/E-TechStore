import './App.css';
import Navbarbookshop from './components/Navbarbookshop';
import Main from './components/Main';
import "./firebase"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>

  );
}

export default App;
