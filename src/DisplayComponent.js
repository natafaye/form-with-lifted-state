import React, { Component } from 'react'

export default class DisplayComponent extends Component {
    render() {
        return (
            <div>
                Data is: { this.props.somePropName }
            </div>
        )
    }
}
