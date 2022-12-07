import { StrictMode, useCallback, useState } from 'react'
import { useRendersCount, useUnmount, useUpdateEffect } from 'react-use'
import _ from 'lodash'

import { useShows } from 'app/hooks/useShows'
import Loader from 'components/loader/Loader'
import SearchBar from 'components/SearchBar'

import ShowsGrid from './ShowsGrid'

const ShowsPageNew = () => {
    const { shows, error } = useShows()

    const [filteredShows, setFilteredShows] = useState([])

    // useMount(async () => {})

    // useEffectOnce(() => {})
    useRendersCount()

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
            {filteredShows && <ShowsGrid shows={filteredShows} />}
        </Loader>
    )
}

export default ShowsPageNew
