import { useParams } from 'react-router-dom'

import './Recipe.css'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

export default function Recipe() {
  
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {error, isLoading, data} = useFetch(url)
  const {mode} = useTheme()
  
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {data && (
        <>
        <h2 className='page-title'>{data.title}</h2>
        <p>Takes {data.cookingTime} to cook.</p>
        <ul>
          {data.ingredients.map(i => <li key={i}>{i}</li>)}
        </ul>
        </>
      )}
    </div>
  )
}
