import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        history.push(`/search?q=${term}`) // query
    }
    return (
        <div className='searchbar'>
            <form onSubmit={submitHandler}>
                <label htmlFor='search'>Search:</label>
                <input required type='text' id='search' onChange={(e) => setTerm(e.target.value)} />
            </form>
        </div>
    )
}