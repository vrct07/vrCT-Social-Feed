import { Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

export function Comment() {
    return ( 
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/vrct07.png"  />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vitor Costa</strong>
                            <time title="20 de novembro ás 08:13" dateTime="2023-11-20 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
     );
}

