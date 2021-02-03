export default class Show {
    constructor({ id, name, image, rating, summary, genres }) {
        this.id = id
        this.name = name
        this.genres = genres
        this.image = image
        this.rating = rating.average
        this.description = summary
        this.casts = []
        this.seasons = []
    }

    get displayName() {
        return this.name.toUpperCase()
    }

    get htmlDescription() {
        return { __html: this.description }
    }
}
