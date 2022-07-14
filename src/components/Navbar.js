import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='title'>
          <h1>Recipeee</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  )
}
