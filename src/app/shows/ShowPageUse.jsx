import { use } from 'react'
import { showService } from 'services/ShowService'

import ShowsGrid from './ShowsGrid'

const ShowsPageUse = () => {
    const shows = use(showService.fetchPopularShows())
    console.log('shows', shows)
    return <ShowsGrid shows={shows} />
}

export default ShowsPageUse
