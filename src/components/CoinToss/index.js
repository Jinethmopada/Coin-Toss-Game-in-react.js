import {Component} from 'react'

import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imageUrl: headsImage, countHeads: 0, countTails: 0}

  onClickChangeImage = () => {
    const {countHeads, countTails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    let newHeadsResult = countHeads
    let newTailsResult = countTails
    let tossImage = ''
    if (tossResult === 0) {
      newHeadsResult += 1
      tossImage = headsImage
    } else {
      newTailsResult += 1
      tossImage = tailsImage
    }
    this.setState({
      imageUrl: tossImage,
      countHeads: newHeadsResult,
      countTails: newTailsResult,
    })
  }

  render() {
    const {imageUrl, countHeads, countTails} = this.state
    const totalValue = countHeads + countTails

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickChangeImage}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{totalValue}</p>
            <p className="count">Heads:{countHeads}</p>
            <p className="count">Tails:{countTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
