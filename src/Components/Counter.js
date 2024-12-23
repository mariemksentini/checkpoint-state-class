import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeInterval: 0,
        }
        this.timer = null
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => ({
                timeInterval: prevState.timeInterval + 1,
            }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return <p>Time since last mounted: {this.state.timeInterval} seconds</p>
    }
}

export default Counter
