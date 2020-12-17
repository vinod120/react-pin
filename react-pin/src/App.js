import React from 'react';

import { Pin } from './Pin'

export default class ReactPinApp extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      pin: ""
    } 
  }
  render() {
    const { pin } = this.state
    return (
     <div className="App">
        <h1>REACT INPUT</h1>
        <Pin 
            len = {5}
            isTrue = { pin === "12345" }
            onChange = { (val) => this.setState({ pin : val })}
        />

        <h3> PIN: { this.state.pin } </h3>
        
     </div>
      
    )
  }

}
