import styles from './Header.module.css';

import igniteLogo from '../assets/vrct-logo.svg'


export function Header() {
    return ( 
        <header className={styles.header}>
        <img src={igniteLogo} alt="Logo-ignite-feed" />
        </header>
     );
}