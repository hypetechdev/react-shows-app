import { useState } from 'react'
import { useMount, useRendersCount } from 'react-use'
import { showService } from 'services/ShowService'

export const useShows = () => {
    const [shows, setShows] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useRendersCount()

    useMount(async () => {
        try {
            const shows = await showService.fetchPopularShows()
            setShows(shows)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    })

    return {
        shows,
        loading,
        error,
    }
}
