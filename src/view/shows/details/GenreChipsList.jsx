import React from 'react'

const GenreChipsList = ({ genres = [] }) => {
    return genres.map((genre, index) => (
        <div className="card chip" key={index}>
            {genre}
        </div>
    ))
}

export default GenreChipsList
