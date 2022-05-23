import NavbarTop from "./Components/ENG/NavBar/NavbarTop";
import { Route, Routes } from "react-router-dom"
import HomeENG from "./Pages/HomeENG";
function App() {
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
