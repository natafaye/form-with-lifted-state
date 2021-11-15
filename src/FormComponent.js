import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            someDataValue: ""
        }
    }

    handleInputChange = (e) => {
        this.setState({ someDataValue: e.target.value });
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.someDataValue);
    }
    
    render() {
        return (
            <div>
                <input type="text" value={ this.state.someDataValue } onChange={ this.handleInputChange } />
                <button onClick={ this.handleSubmit }>Submit</button>
            </div>
        )
    }
}
