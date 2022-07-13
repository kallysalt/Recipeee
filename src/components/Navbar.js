import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Searchbar from './Searchbar'
import './Navbar.css'

export default function Navbar() {
  const {color} = useTheme()
  return (
    <div className='navbar' style={{background: color}}>
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
