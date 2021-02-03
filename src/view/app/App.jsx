import { Component, Fragment } from 'react'

import './App.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../Main'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header title="BIT Shows" />
                <Main />
                <Footer />
            </Fragment>
        )
    }
}

export default App
