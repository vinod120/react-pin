import React from "react";
import styles from './PinItem.module.css';

const style = {
    textAlign: 'center',
    outline: 'none',
    width: 75,
    height: 40,
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
    border: '1px solid #d3d3d3',
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
        console.log(e.target.value)
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
        console.log(val)
    }

    render() {
        const { isTrue, max_length } = this.props;

        const trueStyle = isTrue 
        ?  {
            border: "1px solid rgb(249 2 189)",
            color: "rgb(249 2 189)",
            background: 'rgb(224 104 216 / 16%)',
            opacity: 0.5,
            }

        :   {};
            // console.log( style )
        return(
            <input 
                onKeyUp = { this.handleKeyUp }
                style = { {...style, ...trueStyle} }
                ref = {(n) => (this.input = n )}
                maxLength = {max_length} 
                className={styles.input}/>
        )
    }
}

export { PinItem }