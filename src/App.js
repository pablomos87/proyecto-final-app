import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Peliculas from "./Components/Peliculas";
import Ranking from "./Components/Ranking";
import InicioUsuario from "./Components/InicioUsuario.jsx";
import Header from "./Components/Nav";
import HeaderUsuario from "./Components/HeaderUsuario";
import UsuarioLogin from "./Components/UsuarioLogin";
import Error from "./Components/Error";
import HeaderLogin from "./Components/HeaderLoginUser";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Peliculas" element={<Peliculas />} />
                <Route path="/Ranking" element={<Ranking />} />
              </Routes>
              <Footer />
            </>
          }
        />

        <Route
          path="/InicioUsuario"
          element={
            <>
              <HeaderUsuario />
              <InicioUsuario />
              <Footer />
            </>
          }
        />
        
        <Route
          path="/UsuarioLogin"
          element={
            <>
              <HeaderLogin />
              <UsuarioLogin />
              <Footer />
            </>
          }
        />
        

        <Route path="/Error" element={<Error />} />

      </Routes>

  
    </>
  );
}


export default App;
