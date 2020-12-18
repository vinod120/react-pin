import React, { Component } from 'react'

export default class DisplayCardNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount = () => {
        this.setState({
            data: this.state.data.push(this.props.arr)
        })
    }
    render() {
        console.log(this.props)
        const {arr} = this.props
        console.log(this.state.data)
        
        return (
            <div>
                {/* {
                    arr && arr.ma
                } */}
            </div>
        )
    }
}
