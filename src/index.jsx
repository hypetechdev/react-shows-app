import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import 'materialize-css/dist/css/materialize.css'

import App from './app/app/App'
import { StrictMode } from 'react'

const container = document.getElementById('root')
const root = createRoot(container)

const appNode = (
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)

root.render(appNode)
