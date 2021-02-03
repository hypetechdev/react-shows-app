import React, { Component } from 'react'
import _ from 'lodash'

import { showService } from '../../services/ShowService'

import ShowsGrid from './ShowsGrid'
import Loader from '../components/loader/Loader'
import SearchBar from '../components/SearchBar'

class ShowsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            filteredShows: []
        }
    }

    async componentDidMount() {
        try {
            const shows = await showService.fetchPopularShows()
            this.setState({ shows, filteredShows: shows })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    searchShows = (searchText, users) => {
        const allShows = users || this.state.shows

        const filteredShows = allShows.filter(show => {
            const { name } = show
            return _.toLower(name).includes(_.toLower(searchText))
        })

        this.setState({ filteredShows })
    }

    render() {
        const { filteredShows, shows } = this.state
        return (
            <Loader isLoading={_.isEmpty(shows)}>
                <SearchBar onSearch={this.searchShows} />
                <ShowsGrid shows={filteredShows} />
            </Loader>
        )
    }
}

export default ShowsPage
