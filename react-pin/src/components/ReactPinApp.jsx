import React from 'react';
import { Pin } from '../components/Pin';
import styled from 'styled-components';
import DisplayCardNumber from './DisplayCardNumber';

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
      status: false,
      arr: []
    } 
  }

  handleSubmit = () => {
    this.setState({
      status: true,
      arr: [...this.state.arr, this.state.pin.match(new RegExp('.{1,' + this.props.input_length + '}', 'g'))]
    })
    console.log(this.state.pin)
    console.log(this.state.arr)
    // this.state.arr = this.state.arr.push(this.state.pin)
    
  }

  handleDelete = (i)=> {
    console.log(this.state.arr[i])
    let temp = this.state.arr.splice(i, 1)
    console.log(temp)
    this.setState({
      arr: [...this.state.arr]
    })
  }
  render() {
    const { pin, status, arr } = this.state
    const {box_length, input_length} = this.props
    const max_length = Number(box_length) * Number(input_length)
    // console.log(this.props)
    // console.log("max length", max_length)
    // if(pin.length == max_length){
      
    //     this.state.arr = [...this.state.arr, pin]

    // }
    console.log(this.state.arr)
    return (
      <>
      <div className="App">
        <Container>
        <Heading style={{color: pin.length == max_length ? "rgb(249 2 189)": '#9e9e9e'}}>Card Number*</Heading>
          <Pin 
              length = {Number(box_length)}
              input_length = {Number(input_length)}
              isTrue = { pin.length == max_length }
              onChange = { (val) => this.setState({ pin : val })}
          />
        </Container>    
      </div>
      <div>
        {
          (pin.length == max_length) ? <button onClick={this.handleSubmit}>ADD</button> : null
        }
      </div>
      <div>
        {
          status ? 
          <div>
              {
                arr.map((item, i)=>{
                  return (
                    <>
                      <div key={i}>
                        <span>{item}</span><button onClick={()=>this.handleDelete(i)}>Delete</button>
                      </div>
                    </>
                  )
                })
              }
          </div>
          :
          null
        }
      </div>
    </>
    )
  }
}
