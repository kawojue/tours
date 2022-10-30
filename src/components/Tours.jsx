const Tours = ({ tours, notInterested }) => {
    return (
        <section className="cards">
            {tours.map(tour => (
                <article key={tour.id} className="card">
                    <img src={tour.image} alt={tour.name}
                        className="w-full h-[300px] object-cover" />
                    <div>
                        <h3>{tour.name}</h3>
                        <h4>{tour.price}</h4>
                    </div>
                    <p>{tour.info}</p>
                    <button onClick={() => notInterested(tour.id)}
                        className="px-5 capitalize py-1 border-2 border-pry-clr-5 text-pry-clr-5 w-fit rounded-md text-sm font-medium tracking-wider">
                        not interested
                    </button>
                </article>
            ))}
        </section>
    )
}

export default Tours