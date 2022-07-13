import { useState, useRef, useEffect } from 'react'

import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'

export default function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  
  const ingredientInput = useRef(null)
  const history = useHistory()
  const {postData, data, error} = useFetch('http://localhost:3000/recipes','POST')
  
  const submitHandler = (e) => {
    e.preventDefault()
    postData({title, ingredients, method, cookingTime: cookingTime+' minutes'})
  }

  const addHandler = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data, history])
  
  return (
    <div className="create">
      <h2 className='page-title'>Add a New Recipe</h2>

      <form onSubmit={submitHandler}>
        <label>
          <span>Recipe title:</span>
          <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} required />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients:'>
            <input type='text' onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} ref={ingredientInput} />
            <button onClick={addHandler} className='btn'>add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>

        <label>
          <span>Recipe Method:</span>
          <input type='text' onChange={(e) => setMethod(e.target.value)} value={method} required />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input type='number' onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} required />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}
