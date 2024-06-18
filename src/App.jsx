import { useState } from 'react'

import Card from './components/Card'
import Footer from './components/Footer'

import data from './utils/data'
import shuffle from './utils/shuffleArray.js'

import logoImg1 from './assets/images/icons/mm-logo-1.png'
import logoImg2 from './assets/images/icons/mm-logo-2.png'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [selectedCards, setSelectedCards] = useState([])

  const cardData = shuffle(data)

  function handleCardClick(id) {
    console.log(id)
    console.log(data.filter(d => d.id === id))
    if (selectedCards.includes(id)) {
      reset()
      return;
    }

    setCurrentScore(currentScore => currentScore + 1)
    currentScore === bestScore ? setBestScore(bestScore => bestScore + 1) : null
    setSelectedCards(currentCards => [...currentCards, id])
    console.log(selectedCards)
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
      <header><img src={logoImg1}></img><img src={logoImg2}></img></header>
      <section className="score-div">
        <p>Score: {currentScore} | Best: {bestScore}</p>
      </section>
      <section className="cards-tray">
        {cardArray}
      </section>
      <Footer numOfHours={4} />
    </div>
  )
}

export default App