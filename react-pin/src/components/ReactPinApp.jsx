import React from 'react';
import { Pin } from '../components/Pin';
import styled from 'styled-components';

const Heading = styled.span`
  color:#9e9e9e;
  font-size: 25px;
  float: left;
  text-align: center;
  // border: 1px solid red;
  margin-top: 17px;
  margin-right: 10px;
`
const Container = styled.div`
  // border: 1px solid red;
  width: 60%;
  margin: auto;
  margin-top: 10%;
  
`

export default class ReactPinApp extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      pin: "",
      status: false
    } 
  }

  handleSubmit = () => {
    this.setState({
      status: true
    })
  }

  handleDelete = (i) => {
    const arr = this.state.pin.match(new RegExp('.{1,' + Number(this.props.input_length) + '}', 'g'))
    console.log(arr[i])
    // console.log(arr.slice(i).join(''))
    this.setState({
      pin: arr.slice(i).join('')
    })
  }

  render() {
    const { pin } = this.state
    const {box_length, input_length} = this.props
    const max_length = Number(box_length) * Number(input_length)
    console.log(this.props)
    console.log("max length", max_length)
    const arr = pin.match(new RegExp('.{1,' + Number(input_length) + '}', 'g'))
    return (
     <div className="App">
       <Container>
        <Heading style={{color: pin.length == max_length ? "rgb(249 2 189)": '#9e9e9e'}}>Card Number*</Heading>
          <Pin 
              length = {Number(box_length)}
              input_length = {Number(input_length)}
              isTrue = { pin.length == max_length }
              onChange = { (val) => this.setState({ pin : val })}
          />
          <div style={{marginTop:10}}>
            {
              pin.length == max_length ? <button onClick={this.handleSubmit}>SUBMIT</button> : null
            }
          </div>
          <div>
            {
              // list = pin.match(new RegExp('.{1,' + Number(input_length) + '}', 'g')),
              // console.log(pin.match(new RegExp('.{1,' + Number(input_length) + '}', 'g'))),
              console.log(arr),
              this.state.status ? 
              <div>
                {arr && arr.map((item, i)=>{
                  return (
                    <div style={{marginTop:10}}>
                      <span style={{marginRight: 10}}>{item}</span> <button onClick={()=>this.handleDelete(i)}>Delelte</button>
                    </div>
                  )
                })}
              </div>
              :
              null
            }
          </div>
       </Container>     
     </div>
      
    )
  }
}
