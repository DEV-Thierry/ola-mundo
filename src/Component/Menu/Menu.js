import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <header>
            <nav className={style.navegacao}>
                <NavLink to ="/" className = {({isActive}) => 
                     isActive ? `${style.linkDestacado} ${style.link}` : style.link
                }>
                    Inicio
                </NavLink>

                <NavLink to ="/sobremim" className = {({isActive, isPending}) => 
                   isActive ? `${style.linkDestacado} ${style.link}` : style.link
                }>
                    Sobre Mim 
                </NavLink>
            </nav>
        </header>
    );
};
