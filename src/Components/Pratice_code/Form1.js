import React, { Component } from 'react'

export class Form1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 'Inital state'
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        this.setState({
            data: e.target.value
        })

    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.data} onChange={this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}

export default Form1
