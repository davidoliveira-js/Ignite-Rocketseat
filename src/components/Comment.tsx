import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4D03AQH156D23L4k2A/profile-displayphoto-shrink_800_800/0/1657633997260?e=1671667200&v=beta&t=CAjHa6vhiwygbq1rVDMM3kMkXOw6BRR9j4wnmJhq0Ek" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>David Oliveira</strong>
              <time title='17 de Outubro às 12:21h' dateTime='2022-10-17 11:20:00'>Publicado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>
          <p>{content}</p>

        </div>
        <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp/>
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
      </div>
    </div>
  )
}