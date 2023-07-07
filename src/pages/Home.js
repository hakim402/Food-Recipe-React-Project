import { NavLink } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import  './Home.css';

export default function Home() {
  const {data: articles, isLoading, error} = useFetch ('http://localhost:3000/articles')
  
  return (
    <div className='home'>
      {isLoading && <div>Loading...</div> }
      {error && <div>Error Oucred</div> }
      {articles && articles.map(article => (
        <div key={article.id} className='card'>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <NavLink to={`/articles/${article.id}`}>RedMore</NavLink>
        </div>
      ))}
    </div>
  )
}
