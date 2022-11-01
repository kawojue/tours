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

  if (isLoading) {
    return (
      <h1>
        Loading...
      </h1>
    )
  }

  if (fetchErr) {
    return (
      <h1>
        {fetchErr}
      </h1>
    )
  }

  return (
    <main>
      <div className="flex flex-col gap-2 mb-10 items-center justify-center">
        <h1>
          our tours
        </h1>
        <div className="w-32 h-1.5 bg-pry-clr-2 rounded-md"></div>
      </div>
      {tours.length === 0 ?
        <div className="w-full flex justify-center">
          <button onClick={() => fetchTours()}
            className="text-white tracking-wider text-xl bg-pry-clr-2 px-3 py-0.5 rounded-md">
            Refresh
          </button>
        </div>
        : <Tours tours={tours} notInterested={notInterested} />}
    </main>
  )
}

export default App
