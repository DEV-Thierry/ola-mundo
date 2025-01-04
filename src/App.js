import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import  Sobremim  from "./pages/Sobremim";
import { Menu } from "./Component/Menu/Menu";
import Rodape from "Component/Rodape";
import PaginaPadrao from "Component/PaginaPadrao";

function App() {
  return (
    <BrowserRouter>
  <Menu/>

      <Routes>
        <Route path="" element={<PaginaPadrao/>} >
          <Route index element={<Inicio/>} />
          <Route path="/sobremim" element={<Sobremim/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
