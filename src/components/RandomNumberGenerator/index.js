// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomValue: 0}

  generateRandomNumber = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomValue: getRandomNumber})
  }

  render() {
    const {randomValue} = this.state

    return (
      <div className="random-number-generator-main-bg-container">
        <div className="random-number-generator-inner-bg-container">
          <h3 className="random-number-generator-main-heading">
            Random Number
          </h3>
          <p className="random-number-generator-note">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="random-number-generator-generate-button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number-generator-value"> {randomValue} </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
