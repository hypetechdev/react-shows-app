import { API } from '../shared/API'

import Show from '../models/Show'
import Actor from '../models/Actor'
class ShowService {
    #endpoint = {
        shows: `/shows`,
        singleShow: (id) => `/shows/${id}`,
    }

    fetchPopularShows() {
        const adaptShows = (shows) => {
            return shows
                .filter((show) => show.rating.average > 8)
                .filter((show) => show.image)
                .map((show) => new Show(show))
                .splice(0, 50)
        }

        return API.get(this.#endpoint.shows).then(adaptShows)
    }

    fetchSingleShow(id) {
        const requestPath = `/shows/${id}?embed[]=seasons&embed[]=cast`

        return API.get(requestPath).then((showData) => {
            const actorsList = showData._embedded.cast
                .filter(({ person }) => person.image)
                .map(({ person, character }) => {
                    return new Actor(person, character)
                })

            const show = new Show(showData)
            show.casts = actorsList
            return show
        })
    }
}

export const showService = new ShowService()
