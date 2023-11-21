import { PencilLine } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Capa de perfil do usuário" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/vrct07.png/" />
                
                <strong>Vitor Costa</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    );
}

