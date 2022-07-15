import { useParams } from 'react-router-dom'

import './Recipe.css'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

export default function Recipe() {

  const {id} = useParams()
  const url = 'https://master.d31x3c27bxn7jr.amplifyapp.com/recipes/' + id
  const {error, isLoading, data} = useFetch(url)
  const {mode} = useTheme()
  
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {data && (
        <>
        <h2>{data.title}</h2>
        <p className='prep'>Takes {data.cookingTime} to cook.</p>
        <ul className='prep'>
          {data.ingredients.map(i => <li key={i}>{i}</li>)}
        </ul>
        <p className="method">{data.method}</p>
        </>
      )}
    </div>
  )
}
