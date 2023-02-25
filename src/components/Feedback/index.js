// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  onUpdate = () => {
    console.log('hi')
  }

  render() {
    const {resources} = this.props

    return (
      <div className="container">
        <div className="heading-container">
          <h1>How satisfied are you with our costumer support perfomance</h1>
          <ul className="bg-container">
            {resources.emojis.map(eachResours => (
              <li key={eachResours.id}>
                <img
                  src={eachResours.imageUrl}
                  alt={eachResours.name}
                  className="yellow"
                  onClick={this.onUpdate}
                />
                <p>{eachResours.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
