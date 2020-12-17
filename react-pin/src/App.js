import React from 'react'
import './App.css';
import styles from './components/App.module.css'
import ReactPinApp from './components/ReactPinApp';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box_length: '',
      input_length: '',
      status: false
    }
  }

  handleClick = () => {
    this.setState({
      status: true
    })
  }

  handleBoxesLength = (e) => {
    this.setState({
      box_length: e.target.value
    })
  }

  handleInputLength = (e) => {
    this.setState({
      input_length: e.target.value
    })
  }

  render(){
    const {box_length, input_length, status} = this.state
    return (
      <div className="App" style={{marginTop: 50}}>
        <input type="number" onChange={this.handleBoxesLength} placeholder="Total Boxes" value={box_length} className={styles.input}/>
        <input type="number" onChange={this.handleInputLength} placeholder="Each Input box length" value={input_length} className={styles.input}/>
        <button onClick={this.handleClick} className={styles.button}>GET</button>
        {
          status ? 
          <ReactPinApp box_length={box_length} input_length={input_length}/>
          :
          null
        }
      </div>
    );
  }
}
