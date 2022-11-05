import { useContext } from 'react'
import Tours from './components/Tours'
import Context from './context/DataContext'

function App() {
  const { tours, isLoading, fetchErr,
    fetchTours } = useContext(Context)

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
        : <section className="cards">
          {tours.map(tour => (
            <Tours key={tour.id} {...tour} />
          ))}
        </section>}
    </main>
  )
}

export default App
