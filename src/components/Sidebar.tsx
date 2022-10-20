

import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}  
        src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
        />
      <div className={styles.profile}>
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH156D23L4k2A/profile-displayphoto-shrink_800_800/0/1657633997260?e=1671667200&v=beta&t=CAjHa6vhiwygbq1rVDMM3kMkXOw6BRR9j4wnmJhq0Ek"/>
        <strong>David Oliveira</strong>
        <span>Programador Node.js</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}