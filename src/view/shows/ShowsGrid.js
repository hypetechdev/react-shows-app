import React from 'react'
import { Link } from 'react-router-dom'

import ShowCard from './ShowCard'

const ShowsGrid = ({ shows }) => {
    const createCard = (show, index) => (
        <Link to={`/show/${show.id}`} key={index}>
            <ShowCard show={show} />
        </Link>
    )

    const gridCards = shows.map(createCard)

    return <div className="row">{gridCards}</div>
}

export default ShowsGrid
