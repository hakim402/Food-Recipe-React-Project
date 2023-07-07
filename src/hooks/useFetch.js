import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true)
            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json()
                
                setIsLoading(false)
                setError(null)
                setData(json)
                
            } catch (error) {
                setIsLoading(false)
                setError(error.message)
            }

        }
        fetchData()
    }, [url])

    return { data, isLoading, error }

}
