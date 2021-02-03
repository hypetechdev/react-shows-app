import { API } from '../shared/API'

import Show from '../models/Show'
import Actor from '../models/Actor'

class ShowService {
    fetchPopularShows() {
        const requestPath = `/shows`

        const adaptShows = shows => {
            return shows
                .filter(show => show.rating.average > 8)
                .map(show => new Show(show))
                .splice(0, 50)
        }

        return API.get(requestPath).then(adaptShows)
    }

    fetchSingleShow(id) {
        const requestPath = `/shows/${id}?embed[]=seasons&embed[]=cast`

        return API.get(requestPath).then(showData => {
            const actorsList = showData._embedded.cast.map(({ person, character }) => {
                return new Actor(person, character)
            })

            const show = new Show(showData)
            show.casts = actorsList
            return show
        })
    }
}

export const showService = new ShowService()
