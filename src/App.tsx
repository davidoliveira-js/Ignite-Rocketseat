import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.gettyimages.com/photos/english-actor-doug-bradley-as-pinhead-leader-of-the-cenobites-in-a-picture-id129739317?k=20&m=129739317&s=612x612&w=0&h=It8K3XVXiyfurKFr_i0CO-hZUr7BAjO0jzFasqJVftY=',
      name: 'Pin Head',
      role: 'Lider dos Cenobitas'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date()
  },
  {
    id: 2,
    author: {
      avatarUrl: '',
      name: 'Pin Head 2',
      role: 'Lider 2 dos Cenobitas'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date()
  }
]


function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                author = { post.author }
                content = { post.content }
                publishedAt = { post.publishedAt }
              />
            )
          }) }
        </main>
      </div>
    </div>
    
  )
}

export default App
