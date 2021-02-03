import React from 'react'

import Divider from '../../components/Divider'

import GenreChipsList from './GenreChipsList'

const ShowDetailsSection = ({ show: { image, displayName, genres, htmlDescription } }) => (
    <>
        <Divider />
        <div className="col s5">
            <div className="card">
                <div className="card-image">
                    <img src={image.medium} alt="" />
                </div>
            </div>
        </div>
        <div className="col s6 offset-s1">
            <h3>{displayName}</h3>
            <GenreChipsList genres={genres} />
            <p className="flow-text" dangerouslySetInnerHTML={htmlDescription} />
        </div>
    </>
)

export default ShowDetailsSection
