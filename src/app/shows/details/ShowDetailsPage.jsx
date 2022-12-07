import { useState } from 'react'
import _ from 'lodash'

import { showService } from 'services/ShowService'

import Loader from 'components/loader/Loader'

import ShowDetailsSection from './ShowDetailsSection'
import CastSection from './CastSection'
import { useMount } from 'react-use'
import { useParams } from 'react-router-dom'

const ShowDetailsPage = () => {
    const { id } = useParams()
    const [show, setShow] = useState(null)

    useMount(async () => {
        const show = await showService.fetchSingleShow(id)

        setShow(show)
    })

    if (_.isEmpty(show)) {
        return <Loader isLoading />
    }

    return (
        <div className="row">
            <ShowDetailsSection show={show} />
            <CastSection casts={show.casts} />
        </div>
    )
}

export default ShowDetailsPage
