import NavbarTop from "./Components/ENG/NavBar/NavbarTop";
import { Route, Routes } from "react-router-dom"
import HomeENG from "./Pages/HomeENG";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
function App() {
  useEffect(()=> {Aos.init({duration:2000})},[])
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path='/' element={<HomeENG />} />
      </Routes>
    </>
  );
}

export default App;
