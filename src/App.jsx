import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role:"" }
// publisjedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/vrct07.png',
      name: 'Vitor Costa',
      role: 'Web Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-23'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://mir-s3-cdn-cf.behance.net/user/115/37666e53697405.632087332f321.png',
      name: 'Thalita Costa',
      role: 'UX/UI Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-20'),
  }
];

 export function App() {
  return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
              )
            })}
          </main>
        </div>
      </div>  
      )
}

