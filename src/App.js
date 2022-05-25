import NavbarTop from "./Components/ENG/NavBar/NavbarTop";
import { Route, Routes } from "react-router-dom"
import HomeENG from "./Pages/HomeENG";
import Contact from "./Pages/Contact";
import Faqs from "./Pages/Faqs";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Footer from "./Components/ENG/Footer/Footer";
function App() {
  useEffect(()=> {Aos.init({duration:2000})},[])
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path='/' element={<HomeENG />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faqs' element={<Faqs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
