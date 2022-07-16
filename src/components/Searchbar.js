import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar() {
    const [input, setInput] = useState('')
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        history.push(`/search?q=${input}`) // query
    }
    return (
        <div className='searchbar'>
            <form onSubmit={submitHandler}>
                <label htmlFor='search'>Search:</label>
                <input required type='text' id='search' onChange={(e) => setInput(e.target.value)} />
            </form>
        </div>
    )
}
