import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import  Sobremim  from "./pages/Sobremim";
import { Menu } from "./Component/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
  <Menu/>

      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobremim" element={<Sobremim/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;