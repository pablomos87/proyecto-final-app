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
import Construccion from "./Components/Construccion";
import ScrollToTop from "./ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <ScrollToTop />
      <Routes>
      
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/peliculas" element={<Peliculas />} />
                <Route path="/ranking" element={<Ranking />} />
              </Routes>
              <Footer />
            </>
          }
        />

        <Route
          path="/profile-user-02"
          element={
            <>
              <HeaderUsuario />
              <InicioUsuario />
              <Footer />
            </>
          }
        />
        
        <Route
          path="/profile-user-01"
          element={
            <>
              <HeaderLogin />
              <UsuarioLogin />
              <Footer />
            </>
          }
        />
        

        <Route path="/error-login" element={<Error />} />

        <Route path="/in-construction-site" element={<Construccion />} />
        
        
      </Routes>

  
    </>
  );
}


export default App;
