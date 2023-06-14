// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  onIncrement = () => {
    console.log('clicked')
  }

  render() {
    return (
      <div className="background-color">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="avatar"
        />
        <h1 className="heading-1">Speed is 80mph</h1>
        <p className="paragraph">Min Limit is 0mph,Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-button button"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button className="brake-button button" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
