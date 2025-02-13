import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const images = ["kit.jpeg", "happy_kit.jpeg"];

  const phrases = [
    "No",
    "Are you sure?",
    "Really Sure",
    "Kitty says please",
    "Don't do this to me",
    "I am gonna cry",
    "You are breaking my heart ;(",
  ];
  const kitPhrase = [
    "pls No",
    "mama plwease",
    "mamaaaaaa!",
    "kitty will be mad",
    "don't say no",
    "Crying...",
    "mama say yes!"
  ];

  const [noCount, setNoCount] = useState(0);
  const [confettiActive, setConfettiActive] = useState(false);
  const [image, setImage] = useState(images[0]);
  const [noPosition, setNoPosition] = useState({ top: "50vh", left: "50vw" });
  const [phrase, setPhrase] = useState(phrases[0]);
  const [kitphrases, setKitPhrase] = useState(kitPhrase[0]);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [yesvis,setyesvis]=useState(true);

  useEffect(() => {
    if (confettiActive) {
      const timer = setTimeout(() => setConfettiActive(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [confettiActive]);

  const handleNoClick = () => {
    setNoCount((prev) => (prev + 1) % phrases.length);
    setPhrase(phrases[noCount]);
    setKitPhrase(kitPhrase[noCount]);
    setBubbleVisible(true);

    setNoPosition({
      top: Math.floor(Math.random() * 80) + "vh",
      left: Math.floor(Math.random() * 80) + "vw",
    });

    setImage(images[0]);
  };

  const handleYesClick = () => {
    setPhrase("Yayyyy!");
    setKitPhrase("mwah mwah , mama love you!");
    setConfettiActive(true);
    setBubbleVisible(true);
    const audio = new Audio("/audio/blue.mp3");
    audio.play();
    setyesvis(false);
  };

  return (
    <>
      {confettiActive && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="container">
        <div className="content">
          <div className="bubble bubble-bottom-left" style={{ visibility: bubbleVisible ? "visible" : "hidden" }}>
            {kitphrases}
          </div>
          <img src={image} alt="Reaction" className="image" />
          <h1 className="title">lorem</h1>
        </div>

        <div className="button-container">
          <button onClick={handleYesClick} className="yes-button" 
          style={{visibility: yesvis ? "visible" : "hidden"}}
          >yes</button>
          <button className="no-button" style={{ top: noPosition.top, left: noPosition.left }} onClick={handleNoClick}>
            {phrase}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

