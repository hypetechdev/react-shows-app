import React from 'react'

const ActorListItem = ({ actor }) => (
    <li className="collection-item avatar valign-wrapper">
        <img src={actor.photo} alt="" className="circle responsive-img" />
        <h4>{actor.name}</h4>
    </li>
)

export default ActorListItem
