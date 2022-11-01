import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const [tours, setTours] = useState([])
    const [readmore, setReadmore] = useState(true)
    const [fetchErr, setFetchErr] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const url = 'https://course-api.com/react-tours-project'

    const fetchTours = async () => {
        setIsLoading(true)
        setFetchErr(null)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setTours(data)
            setTimeout(() => {
                setIsLoading(false)
            }, 1200)
        } catch {
            setFetchErr("Please, reload the page.")
        }
    }

    useEffect(() => {
        (async () => await fetchTours())()
    }, [])

    const notInterested = (id) => {
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }

    return (
        <Context.Provider value={{
            tours, isLoading, fetchErr,
            readmore, setReadmore,
            notInterested, fetchTours
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context