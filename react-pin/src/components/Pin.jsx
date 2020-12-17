import React from 'react'
import PropTypes from 'prop-types'
import { PinItem } from "./PinItem"

class Pin extends React.Component {
    constructor( props ){
        super( props );
        this.value = new Array( props.len ).fill("");
        this.element = [];
        this.handleChange = this.handleChange.bind( this )
        this.handleBackspace = this.handleBackspace.bind( this )
        this.handlePaste = this.handlePaste.bind( this )

    }
    handleChange( val, i ) {
        const { len } = this.props;
        this.value[i] = val;
        if( val.length > 0 && i < len - 1 ) {
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
        let val = e.clipboardData
            .getData("Text")
            .split("")
            .filter((_, i) => i < this.props.len )

        val.forEach((itemVal, i) => {
            this.value[i] = itemVal;
            this.element[i].focus();
            this.element[i].setValue(itemVal)
        })
        this.props.onChange && this.props.onChange( this.value.join("") )

    }
    render() {
        console.log( this.element );
        const { isTrue } = this.props;
        return(
            <div onPaste = { this.handlePaste }>
                <div>PIN</div>
                {
                    this.value.map((item, i ) => (
                        <PinItem 
                            isTrue = { isTrue }
                            key = { i }
                            ref = { (n) => ( this.element[i] = n )}
                            onBackspace = { (e) => this.handleBackspace( i, e.target.value )}
                            onChange = { (val) => this.handleChange( val, i ) } />
                    ))
                }
            </div>
        )
    }
}

Pin.propTypes = {
    len: PropTypes.number.isRequired
}


export { Pin }