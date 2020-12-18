import React from 'react'
import PropTypes from 'prop-types'
import { PinItem } from "./PinItem"

class Pin extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            value: new Array( props.length ).fill(""),
            element: [],
            status: false
        }
    }
    handleChange( val, i ) {
        const { input_length , length} = this.props;
        this.state.value[i] = val;
        console.log(val)
        if( val.length == input_length && i+1 < length ) {
            this.state.element[i + 1].focus();
        }
        this.props.onChange && this.props.onChange( this.state.value.join("") )
    }

    handleBackspace( i, val ) {
        
        if( i > 0 ) {
            this.state.element[i - 1].focus();
        }
        this.state.value[i] = val;
        this.props.onChange && this.props.onChange( this.state.value.join("") )

    }

    handlePaste(e) {
        e.preventDefault();
        const n = this.props.input_length
        let val = e.clipboardData
            .getData("Text")
            .match(new RegExp('.{1,' + n + '}', 'g'))
            .filter((_, i) => i < this.props.input_length)
        console.log(val)
        console.log(this.props.length)
        val.forEach((itemVal, i) => {
            this.state.value[i] = itemVal;
            this.state.element[i].focus();
            this.state.element[i].setValue(itemVal)
        })
        this.props.onChange && this.props.onChange( this.state.value.join("") )

    }

    hanldleSubmit = (e) => {
        this.setState({
            status: true
        })
        console.log(this.state.status)
    }

    render() {

    // console.log(this.props.length)
        // console.log( this.element );
        const { isTrue, length , input_length} = this.props;
        const { value , element, status} = this.state
        console.log(value)
        return(
            <>
            <div onPaste = { this.handlePaste }>
                {
                    value && value.map((item, i ) => (
                        <PinItem 
                            isTrue = { isTrue }
                            key = { i }
                            ref = { (n) => ( element[i] = n )}
                            onBackspace = { (e) => this.handleBackspace( i, e.target.value )}
                            onChange = { (val) => this.handleChange( val, i ) }
                            max_length = {input_length}
                        />
                    ))
                }
            </div>
        </>
        )
    }
}

Pin.propTypes = {
    length: PropTypes.number.isRequired
}


export { Pin }