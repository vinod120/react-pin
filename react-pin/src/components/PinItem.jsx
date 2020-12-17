import React from "react";

const style = {
    padding: 10,
    width: 14,
    fontSize: 14,
    margin: 5
}

class PinItem extends React.Component {
    constructor( props ) {
        super( props )
        this.focus = this.focus.bind( this )
        this.handleKeyUp = this.handleKeyUp.bind( this )
        this.setValue = this.setValue.bind( this )
        this.onChange = this.onChange.bind( this )
    }

    focus() {
        this.input.focus();
    }

    onChange(e) {
        this.props.onChange( e.target.value );
    }

    handleKeyUp( e ) {
        if( e.keyCode === 8 && !this.input.value) {
            // handle backspace
            this.props.onBackspace(e)
        } else {
            this.onChange( e )
        }
    }

    setValue( val ) {
        this.input.value = val;
    }

    render() {
        const { isTrue } = this.props;

        const trueStyle = isTrue 
        ?  {
                color: "green",
                outline: "2px solid green",
                border: 0
            }

        :   {};
            console.log( style )
        return(
            <input 
                onKeyUp = { this.handleKeyUp }
                style = { {...style, ...trueStyle} }
                ref = {(n) => (this.input = n )}
                maxLength = {1} />
        )
    }
}

export { PinItem }