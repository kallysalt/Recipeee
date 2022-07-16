import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import { useTheme } from '../../hooks/useTheme'
import './Search.css'

export default function Search() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  const url = 'https://new-recipe-server.herokuapp.com/recipes?q=' + query
  const{error, isLoading, data} = useFetch(url)
  const {mode} = useTheme()

  return (
    <div className={`search-result ${mode}`}>
      <h3>Recipes including "{query}"</h3>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
