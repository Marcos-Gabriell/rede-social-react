import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';


export function App() {
  return (
    <div>
      <Header />
      <Post 
        author= "Marcos" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, necessitatibus harum fugiat provident quas accusamus odit voluptas laboriosam nulla sunt nam aliquam, cum corrupti iusto debitis perferendis velit inventore. A?"
      />
    </div>
  )
}

