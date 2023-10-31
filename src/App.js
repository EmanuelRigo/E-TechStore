import "./App.css";
import Navbarbookshop from "./components/Navbarbookshop";
import CustomProvider from "./components/CustomProvider";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./firebase";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>

        <Navbarbookshop></Navbarbookshop>
        <Main />
        <Footer></Footer>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
