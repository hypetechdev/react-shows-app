import { Component } from 'react'
import _ from 'lodash'

import { showService } from 'services/ShowService'

import Loader from 'components/loader/Loader'

import ShowDetailsSection from './ShowDetailsSection'
import CastSection from './CastSection'

class ShowDetailsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: null,
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const show = await showService.fetchSingleShow(id)

        this.setState({ show })
    }

    render() {
        const { show } = this.state

        if (_.isEmpty(show)) {
            return <Loader isLoading />
        }

        const { casts } = show

        return (
            <div className="row">
                <ShowDetailsSection show={show} />
                <CastSection casts={casts} />
            </div>
        )
    }
}

export default ShowDetailsPage
