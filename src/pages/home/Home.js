import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import './Home.css'

export default function Home() {
  const {data, isLoading, error} = useFetch("https://master.d31x3c27bxn7jr.amplifyapp.com/recipes")
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
