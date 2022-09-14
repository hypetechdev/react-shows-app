import { useCallback, useState } from 'react'
import { useMount } from 'react-use'
import _ from 'lodash'

import { showService } from 'services/ShowService'

import Loader from 'components/loader/Loader'
import SearchBar from 'components/SearchBar'

import ShowsGrid from './ShowsGrid'

const ShowsPageNew = () => {
    const [shows, setShows] = useState([])
    const [filteredShows, setFilteredShows] = useState([])

    useMount(async () => {
        try {
            const shows = await showService.fetchPopularShows()

            setFilteredShows(shows)
            setShows(shows)
        } catch (error) {
            throw new Error(error.message)
        }
    })

    const handleSearchShows = (searchText, users) => {
        const allShows = users || shows
        const filteredShows = allShows.filter((show) => {
            const { name } = show
            return _.toLower(name).includes(_.toLower(searchText))
        })
        setFilteredShows(filteredShows)
    }

    const searchShowsFn = useCallback(handleSearchShows, [shows])

    return (
        <Loader isLoading={_.isEmpty(shows)}>
            <SearchBar onSearch={searchShowsFn} />
            <ShowsGrid shows={filteredShows} />
        </Loader>
    )
}

export default ShowsPageNew
