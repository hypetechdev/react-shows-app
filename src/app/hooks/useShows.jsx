import { useMemo, useState } from 'react'
import { useEffectOnce, useMount } from 'react-use'
import { showService } from 'services/ShowService'

export const useShows = () => {
    const [shows, setShows] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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

    return useMemo(
        () => ({
            shows,
            loading,
            error,
        }),
        [shows]
    )
}
