import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const ShowsPage = lazy(() => import('./shows/ShowsPageNew'))
const ShowDetailsPage = lazy(() => import('./shows/details/ShowDetailsPage'))
const AboutPage = lazy(() => import('./about/AboutPage'))

const Main = () => (
    <main className="container">
        <Suspense fallback={<h1>Loading fallback...</h1>}>
            <Routes>
                <Route path="/" element={<ShowsPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="shows/:id" element={<ShowDetailsPage />} />
            </Routes>
        </Suspense>
    </main>
)

export default Main
