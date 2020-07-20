import React, { Component } from 'react'

export class Button_event extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 'Inital state'
        }

        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent() {
        this.setState({
            data: 'data updated'
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>Click</button>
        <h2>{this.state.data}</h2>
            </div>
        )
    }
}

export default Button_event
