import React, { Component } from 'react'

 class cleanClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            width: window.innerWidth
        }
        this.componentDidMount()
        {
            window.addEventListener("resize", this.handleResize);
        }
    }
    componentWillMount() {
        window.removeEventListener("resize", this.handleResize)
    }
    handleResize = () => {
        this.setState({
            width: window.innerWidth
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.width}</h1>
            </div>
        )
    }
}

export default cleanClass


