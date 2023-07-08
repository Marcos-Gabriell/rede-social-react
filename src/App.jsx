import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';

import { SideBar } from './components/SideBar';
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <SideBar />
        <main>
            <Post 
           author= "Marcos" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, necessitatibus harum fugiat provident quas accusamus odit voluptas laboriosam nulla sunt nam aliquam, cum corrupti iusto debitis perferendis velit inventore. A?"
           />
        </main>
      </div>
    </div>
  )
}

