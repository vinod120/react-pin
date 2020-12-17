import React from 'react'
import PropTypes from 'prop-types'
import { PinItem } from "./PinItem"

class Pin extends React.Component {
    constructor( props ){
        super( props );
        this.value = new Array( props.length ).fill("");
        this.element = [];
        this.handleChange = this.handleChange.bind( this )
        this.handleBackspace = this.handleBackspace.bind( this )
        this.handlePaste = this.handlePaste.bind( this )

    }
    handleChange( val, i ) {
        const { input_length , length} = this.props;
        this.value[i] = val;
        if( val.length == input_length && i+1 < length ) {
            this.element[i + 1].focus();
        }
        this.props.onChange && this.props.onChange( this.value.join("") )
    }

    handleBackspace( i, val ) {
        
        if( i > 0 ) {
            this.element[i - 1].focus();
        }
        this.value[i] = val;
        this.props.onChange && this.props.onChange( this.value.join("") )

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
            this.value[i] = itemVal;
            this.element[i].focus();
            this.element[i].setValue(itemVal)
        })
        this.props.onChange && this.props.onChange( this.value.join("") )

    }
    render() {

    console.log(this.props.length)
        // console.log( this.element );
        const { isTrue, length , input_length} = this.props;
        return(
            <div onPaste = { this.handlePaste }>
                {
                    this.value.map((item, i ) => (
                        <PinItem 
                            isTrue = { isTrue }
                            key = { i }
                            ref = { (n) => ( this.element[i] = n )}
                            onBackspace = { (e) => this.handleBackspace( i, e.target.value )}
                            onChange = { (val) => this.handleChange( val, i ) } 
                            max_length = {input_length}/>
                    ))
                }
            </div>
        )
    }
}

Pin.propTypes = {
    length: PropTypes.number.isRequired
}


export { Pin }