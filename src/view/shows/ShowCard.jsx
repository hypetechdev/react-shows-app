import React from 'react'

const ShowCard = ({ show }) => (
    <div className="col s12 m4">
        <div className="card hoverable">
            <div className="card-image">
                <img src={show.image.medium} alt="" />
                <span className="btn-floating btn-large halfway-fab blue ">{show.rating}</span>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4 truncate">{show.name}</span>
            </div>
        </div>
    </div>
)

export default ShowCard
