import {useState, useEffect} from 'react';

export const useFetch = (url, method = 'GET') => {
    const [data,setData] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const postData = (postData) => {
        setOptions({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData) // turn js object into a json string for posting
        })
    }
    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async(fetchOptions) => {
            setisLoading(true)
            try {
                const res = await fetch(url, {...fetchOptions, signal: controller.signal})
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()
                setisLoading(false)
                setData(data)
                setError(null)
            }
            catch (e) {
                if (e.name === 'AbortError') {
                    console.log('the fetch was aborted')
                }
                else {
                    setisLoading(false)
                    setError('failed to fetch the data')
                }
            }
        }
        if (method === 'GET') {
            fetchData()
        }
        if (method === 'POST' && options) {
            fetchData(options)
        }
        return () => {controller.abort()}
    }, [url, method, options])
    
    return {data, isLoading, error, postData}
}
