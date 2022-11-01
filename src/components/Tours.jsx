import { useContext } from 'react'
import Context from '../Context/DataContext'

const Tours = () => {
    const { tours, notInterested } = useContext(Context)

    return (
        <section className="cards">
            {tours.map(tour => (
                <article key={tour.id} className="card">
                    <img src={tour.image} alt={tour.name}
                        className="w-full h-[300px] object-cover" />
                    <div className="py-3 px-5 flex flex-col items-center gap-3 w-full">
                        <div className="flex justify-between w-full">
                            <h3 className="text-lg text-pry-clr-1">
                                {tour.name}
                            </h3>
                            <h4 className="tracking-widest bg-pry-clr-3 text-pry-clr-2 px-2 py-0.5">
                                ${tour.price}
                            </h4>
                        </div>
                        <p>{tour.info}</p>
                        <button onClick={() => notInterested(tour.id)}
                            className="px-5 capitalize py-1 border-2 border-pry-clr-5 text-pry-clr-5 w-fit rounded-md text-sm font-medium tracking-wider">
                            not interested
                        </button>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Tours