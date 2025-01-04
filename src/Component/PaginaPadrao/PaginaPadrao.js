import Banner from "Component/Banner";
import "./PaginaPadrao.css";
import { Outlet } from "react-router-dom";
import Rodape from "Component/Rodape";

export const PaginaPadrao = () => {
    return (
        <main>
            <Banner/>

            <Outlet/>

            <Rodape/>
        </main>
    );
};
