import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ title }) => (
    <header>
        <nav className="blue darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo card-title">
                        {title}
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
