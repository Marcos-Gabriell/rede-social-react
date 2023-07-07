import style from './Header.module.css'
import iginitLogo from  '../assets/ignite-logo.svg';

console.log(style);
export function Header() {
    return (
        <header className={style.header}>
        <img src={iginitLogo} alt="Logotipo" />
        </header>
    );
}