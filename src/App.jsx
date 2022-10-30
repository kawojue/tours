import { useState, useEffect } from 'react'
import Tours from './components/Tours'

function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchErr, setFetchErr] = useState(null)
  const [readmore, setReadmore] = useState(true)

  const url = 'https://course-api.com/react-tours-project'

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      setTours(data)
    } catch {
      setFetchErr("Please, reload the page.")
    }

  }

  useEffect(() => {
    (async () => await fetchTours())()
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const notInterested = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if (isLoading) {
    return (
      <h1 className="info">
        Loading...
      </h1>
    )
  }

  if (fetchErr) {
    return (
      <h1 className="info">
        {fetchErr}
      </h1>
    )
  }

  return (
    <main>
      <div className="flex flex-col gap-2 mb-10 items-center justify-center">
        <h1 className="capitalize text-pry-clr-1 font-semibold text-5xl">
          our tours
        </h1>
        <div className="w-28 h-2 bg-pry-clr-2 rounded-md"></div>
      </div>
      <Tours tours={tours} notInterested={notInterested} />
    </main>
  )
}

export default App
