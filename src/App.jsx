import { useState } from 'react'

import Card from './components/Card'
import Footer from './components/Footer'

import data from './utils/data'
import shuffle from './utils/shuffleArray.js'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [selectedCards, setSelectedCards] = useState([])

  const cardData = shuffle(data)

  function handleCardClick(id) {
    if (selectedCards.includes(id)) {
      reset()
      return;
    }

    setCurrentScore(currentScore => currentScore + 1)
    currentScore === bestScore ? setBestScore(bestScore => bestScore + 1) : null
    setSelectedCards(currentCards => [...currentCards, id])
  }

  function reset() {
    setCurrentScore(0)
    setSelectedCards([])
  }

  const cardArray = cardData.map(card => {
    return (
      <Card
        title={card.name}
        imgSrc={card.img}
        onClick={() => handleCardClick(card.id)}
        key={card.id}
      />
    );
  })

  return (
    <div className="container">
      <header><p>MINECR<span className="header-a">a</span>FT</p><p>MEMORY</p></header>
      <section className="score-div">
        <p>Score- {currentScore} -- Best- {bestScore}</p>
      </section>
      <section className="cards-container">
        <div className="cards-table">
          {cardArray}
        </div>
      </section>
      <Footer numOfHours={11} />
    </div>
  )
}

export default App