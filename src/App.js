import NavbarTop from "./Components/ENG/NavBar/NavbarTop";
import { Route, Routes } from "react-router-dom"
import HomeENG from "./Pages/HomeENG";
import Navig from "./Components/Navig/Navig";
function App() {
  return (
    <>
    <Navig />
      <NavbarTop />
      <Routes>
        <Route path='/' element={<HomeENG />} />
      </Routes>
    </>
  );
}

export default App;
