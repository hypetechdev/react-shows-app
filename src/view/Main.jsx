import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const ShowsPage = lazy(() => import('./shows/ShowsPageNew'))
const ShowDetailsPage = lazy(() => import('./shows/details/ShowDetailsPage'))
const AboutPage = lazy(() => import('./about/AboutPage'))

const Main = () => (
    <main className="container">
        <Switch>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Route exact path="/" component={ShowsPage} />
                <Route path="/show/:id" component={ShowDetailsPage} />
                <Route path="/about" component={AboutPage} />
            </Suspense>
        </Switch>
    </main>
)

export default Main
