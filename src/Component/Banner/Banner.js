import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}> Ola mundo</h1>
                <p className={styles.paragrafo}>Bem vindo ao meu site</p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                />

                <img
                    className={styles.minhaFoto}
                    src="https://github.com/DEV-Thierry.png"
                />
            </div>
        </div>
    );
};
