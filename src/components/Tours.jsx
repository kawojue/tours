import { useContext, useState } from 'react'
import Context from '../context/DataContext'

const Tours = ({ id, name, price, image, info }) => {
    const { notInterested } = useContext(Context)
    const [readmore, setReadmore] = useState(false)

    return (
        <article className="card">
            <img src={image} alt={name}
                className="w-full h-[300px] object-cover" />
            <div className="py-3 px-5 flex flex-col items-center gap-3 w-full">
                <div className="flex justify-between w-full">
                    <h3 className="text-lg text-pry-clr-1">
                        {name}
                    </h3>
                    <h4 className="tracking-widest bg-pry-clr-3 text-pry-clr-2 px-2 py-0.5">
                        ${price}
                    </h4>
                </div>
                <p>
                    {`${!readmore ? info.slice(0, 189) + '...' : info}`}
                    <span onClick={() => setReadmore(!readmore)}
                        className="text-sm text-pry-clr-2 cursor-pointer capitalize">
                        {` ${!readmore ? 'read more.' : 'show less.'}`}
                    </span>
                </p>
                <button onClick={() => notInterested(id)}
                    className="px-5 capitalize py-1 border-2 border-pry-clr-5 text-pry-clr-5 w-fit rounded-md text-sm font-medium tracking-wider">
                    not interested
                </button>
            </div>
        </article>
    )
}

export default Tours