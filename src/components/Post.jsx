/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';


export function Post(props) {
    const [comments, setComments] = useState (['Post muito bacana, hein?'])

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        
        setComments([...comments, newCommentText]);
        setNewCommentText('')

    }

    function handleNewCommentChange() {
       setNewCommentText(event.target.value)
    }

    return ( 
        <div className={styles.post}>
           <article>
                <header>
                    <div className={styles.author}>
                        <Avatar src={props.author.avatarUrl} />
                    
                        <div className={styles.authorInfo}>
                            <strong>{props.author.name}</strong>
                            <span>{props.author.role}</span>
                        </div>
                    </div>
                    <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString}>{publishedDateRelativeToNow}</time>
                </header>

                <div className={styles.content}>
                    {props.content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                        name="comment"
                        placeholder="Deixe um comentário"
                        value={newCommentText} 
                        onChange={handleNewCommentChange}
                    />
                    <footer>
                        <button type="submit">Publicar</button>
                        </footer>
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return <Comment key={comment} content={comment}/>
                    })}
                </div>
           </article>
        </div>
     );
}
