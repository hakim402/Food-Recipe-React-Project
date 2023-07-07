import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'


export default function Articles() {

    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const {data: article, isLoading, error} = useFetch (url)
    const navigate = useNavigate()

  useEffect(() => {
    if(error){
      setTimeout(() => navigate('/'), 2000)
    }
  }, [error])

  return (
    <div className='articles'>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error</div>}
        {article &&  (
            <div>
                <h2>{article.title}</h2>
                <h4>{article.author}</h4>
                <p>{article.desc}</p>
            </div>
            
        )}
    </div>
  )
}
