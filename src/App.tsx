import { useState } from 'react'
import './App.css'

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "100% Sure?",
  "Think again!",
  "Surely not?",
  "Please don't say no😞",
  "I'll be very sad if you say no🥺",
  "Nooooooo, don't do this to me😖",
  "You're gonna make me cry😢",
  "I'm crying..🤧",
  "You're breaking my heart😭😭😭",
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;


  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div className='text'>Yayyyy!!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text'>Will you please be my Valentine?</div>
          <div className='both-Button'>
            <button className='yesButton'
              style={{ fontSize: yesButtonSize, backgroundColor: 'rgb(4,170,109)' }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              className='NoButton'
              style={{ backgroundColor: 'rgb(244,67,54)' }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
