import { useState, useEffect } from 'react'
import useSound from 'use-sound';

import Card from './components/Card'
import Footer from './components/Footer'

import data from './utils/data'
import shuffle from './utils/shuffleArray.js'

import MinecraftTheme from './assets/audio/C418-Minecraft-MinecraftVolumeAlpha.mp3'
import ChestOpen from './assets/audio/chest-open.mp3'
import DoorClose from './assets/audio/door-close.mp3'
import VillagerHein from './assets/audio/villager-hein.mp3'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])

  const [validClick] = useSound(ChestOpen);
  const [invalidClick] = useSound(DoorClose);
  const [secretClick] = useSound(VillagerHein);
  const [loopBackgroundMusic] = useSound(MinecraftTheme, { loop: true });

  const cardData = shuffle(data)

  useEffect(() => {
    loopBackgroundMusic();
  }, [loopBackgroundMusic])

  function handleCardClick(id) {
    if (selectedCards.includes(id)) {
      reset()
      return;
    }

    validClick();
    setCurrentScore(currentScore => currentScore + 1)
    currentScore === bestScore ? setBestScore(bestScore => bestScore + 1) : null
    setSelectedCards(currentCards => [...currentCards, id])
  }

  function reset() {
    invalidClick();
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
      <header onClick={secretClick}><p>MINECR<span className="header-a">a</span>FT</p><p>MEMORY</p></header>
      <section className="instructions">
        <ul>
          <li>Memorize every card you click, clicking a card again will reset the score.</li>
          <li>Maximum score achievable is 12 but the soothing music is infinite and uhm, <span>AD-FREE!</span></li>
        </ul>
      </section>
      <section className="score-div" aria-label='score card'>
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