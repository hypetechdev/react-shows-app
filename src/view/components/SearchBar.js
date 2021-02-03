import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInput: ''
        }
    }

    static defaultProps = {
        onSearch: f => f
    }

    onInputHandler = ({ target }) => {
        const textInput = target.value
        const { onSearch } = this.props

        this.setState({ textInput })

        onSearch(textInput)
    }

    render() {
        const { onInputHandler } = this
        const { textInput } = this.state

        return (
            <form className="col s12">
                <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <input
                        onChange={onInputHandler}
                        value={textInput}
                        id="search"
                        type="search"
                        className="validate"
                        placeholder="Search shows"
                    />
                </div>
            </form>
        )
    }
}

export default SearchBar
