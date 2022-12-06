import { StrictMode, useCallback, useState } from 'react'

import _ from 'lodash'

import Loader from 'components/loader/Loader'
import SearchBar from 'components/SearchBar'

import ShowsGrid from './ShowsGrid'
import { useShows } from 'app/hooks/useShows'
import { useEffectOnce, useMount, usePromise, useUnmount, useUpdateEffect } from 'react-use'

const ShowsPageNew = () => {
    const { shows, loading, error } = useShows()

    // const [shows, setShows] = useState([])
    const [filteredShows, setFilteredShows] = useState([])

    useMount(async () => {})

    useEffectOnce(() => {})

    useUpdateEffect(() => {
        setFilteredShows(shows)
    }, [shows])

    useUnmount(() => {})

    const handleSearchShows = (searchText, users) => {
        const allShows = users || shows
        const filteredShows = allShows.filter((show) => {
            const { name } = show
            return _.toLower(name).includes(_.toLower(searchText))
        })
        setFilteredShows(filteredShows)
    }

    const searchShowsFn = useCallback(handleSearchShows, [shows])

    if (error) {
        return <h1>Error</h1>
    }

    return (
        <Loader isLoading={_.isEmpty(shows)}>
            <StrictMode>
                <SearchBar onSearch={searchShowsFn} />
            </StrictMode>
            <ShowsGrid shows={filteredShows} />
        </Loader>
    )
}

export default ShowsPageNew
