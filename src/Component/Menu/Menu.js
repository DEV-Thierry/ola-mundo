import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <header>
            <nav className={style.navegacao}>
                <NavLink to ="/" className = {({isActive}) => 
                    `
                        ${style.link}
                        ${isActive ? style.linkDestacado : ""}
                    `
                }>
                    Inicio
                </NavLink>

                <NavLink to ="/sobremim" className = {({isActive, isPending}) => 
                    `
                        ${style.link}
                        ${isActive ? style.linkDestacado : ""}
                    `
                }>
                    Sobre Mim 
                </NavLink>
            </nav>
        </header>
    );
};
