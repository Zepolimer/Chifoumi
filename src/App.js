import { useEffect, useState } from "react";
import styled from "styled-components";
import BonusGame from "./components/BonusGame";
import GameParams from "./components/GameParams";

import HeaderScore from './components/HeaderScore';
import NormalGame from "./components/NormalGame";
import Rules from "./components/Rules";

import { COLORS } from "./theme/Colors";


const AppContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 15px;
  background: ${({ themeColor }) => (themeColor === "dark" ? `radial-gradient(circle, ${COLORS.darkOne}, ${COLORS.darkTwo})` : `radial-gradient(circle, ${COLORS.whiteOne}, ${COLORS.whiteTwo})`)};

  h1 {
    color: ${({ themeColor }) => (themeColor === "dark" ? `${COLORS.whiteOne}` : `${COLORS.darkOne}`)};
  }
  #replayContent span {
    color: ${({ themeColor }) => (themeColor === "dark" ? `${COLORS.whiteOne}` : `${COLORS.darkOne}`)};
  }
`;

const ButtonsContainer = styled.footer`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  position: absolute; 
  bottom: 15px;
  left: 1rem;
  right: 1rem;
  display: flex;
  align-items: center; 
  justify-content: space-between;
`;

const ButtonToggle = styled.button`
  padding: 7.5px 10px;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 6px;
  color: hsl(217, 16%, 45%);
  background: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all .4s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${COLORS.white};
    color: ${COLORS.white};
    outline: none;
  }

  &:hover:nth-child(1),
  &:focus:nth-child(1),
  &:active:nth-child(1) {
    background: hsl(230, 89%, 62%);
  }
  &:hover:nth-child(2),
  &:focus:nth-child(2),
  &:active:nth-child(2) {
    background: hsl(189, 59%, 53%);
  }
  &:hover:nth-child(3),
  &:focus:nth-child(3),
  &:active:nth-child(3) {
    background: hsl(261, 73%, 60%);
  }
`;


function App() {

  const [victories, setVictories] = useState(0);
  const [defeats, setDefeats] = useState(0);

  const [score, setScore] = useState(0);
  const [robotScore, setRobotScore] = useState(0);

  const [gameType, setGameType] = useState(false);
  const [thisGameType, setThisGameType] = useState("Normal");

  const [userChoice, setUserChoice] = useState("");
  const [previousUserChoice, setPreviousUserChoice] = useState("");
  const [robotChoice, setRobotChoice] = useState("");

  const [showResult, setShowResult] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showParams, setShowParams] = useState(false);

  const [difficulty, setDifficulty] = useState("Random");
  const [themeColor, setThemeColor] = useState("dark");
  const [scorePreference, setScorePreference] = useState(3);

  const localVictories = localStorage.getItem("victories");
  const localDefeats = localStorage.getItem("defeats");
  const localGameType = localStorage.getItem("gameType")
  const localTheme = localStorage.getItem("theme");
  const localDifficulty = localStorage.getItem("difficulty");
  const localScorePreference = localStorage.getItem("scorePreference");


  // ONCLICK - NORMAL : lorsque l'utilisateur choisit une option, le robot choisit aussi une option aléatoire ou utilise son IA
  const robotPlayClassic = () => {
    if(difficulty === "Ia") setPreviousUserChoice(userChoice);
    else setPreviousUserChoice("")

    if(previousUserChoice === "rock") {
      const rockChoice = ["rock", "paper"];
      setRobotChoice(rockChoice[Math.floor(Math.random() * 2)])
    } else if(previousUserChoice === "paper") {
      const paperChoice = ["paper", "scissors"];
      setRobotChoice(paperChoice[Math.floor(Math.random() * 2)])
    } else if(previousUserChoice === "scissors") {
      const scissorsChoice = ["scissors", "rock"];
      setRobotChoice(scissorsChoice[Math.floor(Math.random() * 2)])
    } else {
      const choiceNormal = ["rock", "paper", "scissors"];
      setRobotChoice(choiceNormal[Math.floor(Math.random() * 3)])
    }
  }


  // ONCLICK - BONUS : lorsque l'utilisateur choisit une option, le robot choisit aussi une option aléatoire ou utilise son IA
  const robotPlayBonus = () => {
    if(difficulty === "Ia") setPreviousUserChoice(userChoice);
    else setPreviousUserChoice("")

    if(previousUserChoice === "rock") {
      const rockChoice = ["rock", "paper", "spock"];
      setRobotChoice(rockChoice[Math.floor(Math.random() * 3)])
    } else if(previousUserChoice === "paper") {
      const paperChoice = ["paper", "lizard", "scissors"];
      setRobotChoice(paperChoice[Math.floor(Math.random() * 3)])
    } else if(previousUserChoice === "scissors") {
      const scissorsChoice = ["scissors", "rock", "spock"];
      setRobotChoice(scissorsChoice[Math.floor(Math.random() * 3)])
    } else if(previousUserChoice === "lizard") {
      const lizardChoice = ["lizard", "rock", "scissors"];
      setRobotChoice(lizardChoice[Math.floor(Math.random() * 3)])
    } else if(previousUserChoice === "spock") {
      const spockChoice = ["spock", "lizard", "paper"];
      setRobotChoice(spockChoice[Math.floor(Math.random() * 3)])
    } else {
      const choiceBonus = ["rock", "paper", "scissors", "lizard", "spock"];
      setRobotChoice(choiceBonus[Math.floor(Math.random() * 5)])
    }
  }
  

  // ONCLICK - TOGGLE GAMETYPE : false (normal) ou true (bonus)
  const handleTextType = () => {
    setGameType(!gameType);
    setShowResult(false);

    if(thisGameType === "Normal") {
      setThisGameType("Bonus");
      localStorage.setItem('gameType', "Bonus");
    } else {
      setThisGameType("Normal");
      localStorage.setItem('gameType', "Normal");
    }
  }


  // ONCLICK - TOGGLE DIFFICULTÉ : random ou IA
  const handleDifficulty = () => {
    if(difficulty === "Random") {
      setDifficulty("Ia")
      localStorage.setItem('difficulty', "humain");
    } else {
      setDifficulty("Random")
      localStorage.setItem('difficulty', "aleatoire");
    }
  }


  // ONCLICK - TOGGLE THÈME : dark ou light
  const handleThemeColor = () => {
    if(themeColor === "dark") {
      setThemeColor("light");
      localStorage.setItem('theme', "light");
    } else if(themeColor === "light") {
      setThemeColor("dark");
      localStorage.setItem('theme', "dark");
    }
  }

  // ONCLICK - TOGGLE SCORE : 3 ou 5
  const handleScorePreference = () => {
    if(scorePreference === 3) {
      setScorePreference(5);
      localStorage.setItem('scorePreference', "5");
    } else if(scorePreference === 5) {
      setScorePreference(3);
      localStorage.setItem('scorePreference', "3");
    }
  }


  // AFFICHER LES RÉSULTATS
  const handleResult = () => { setShowResult(!showResult); }
  
  // AFFICHER LES RÈGLES
  const handleRules = () => { setShowRules(!showRules); }

  // AFFICHER LES PARAMÈTRES
  const handleParams = () => { setShowParams(!showParams); }


  // STOCKER LE NOMBRE DE VICTOIRES DANS LOCALSTORAGE
  const storageVictories = () => {
    setVictories(victories + 1);
    document.getElementById("rejouer").style.display = "none";
    if(localVictories) {
      localStorage.setItem("victories", `${parseInt(localVictories) + 1}`);
    }
  }

  // STOCKER LE NOMBRE DE DEFAITES DANS LOCALSTORAGE
  const storageDefeats = () => {
    setDefeats(defeats + 1);
    document.getElementById("rejouer").style.display = "none";
    if(localDefeats) {
      localStorage.setItem("defeats", `${parseInt(localDefeats) + 1}`);
    }
  }


  useEffect(() => {
    // INITIALISATION DES STATISTIQUES À ZERO SI PREMIÈRE PARTIE
    if(!localVictories) {
      localStorage.setItem("victories", "0");
    }
    if(!localDefeats) {
      localStorage.setItem("defeats", "0");
    }

    // VICTOIRE OU DEFAITES 
    if(score === scorePreference) {
      storageVictories()
      const timerResult = setInterval(() => {
        setScore(0);
        setRobotScore(0);
        setShowResult(false);
      }, 1500)
      return () => clearTimeout(timerResult);
    } else if(robotScore === scorePreference) {
      storageDefeats()
      const timerResult = setInterval(() => {
        setScore(0);
        setRobotScore(0);
        setShowResult(false);
      }, 1500)
      return () => clearTimeout(timerResult);
    }

    if(localGameType !== "") {
      if(localGameType === "Bonus") {
        setGameType(true);
        setThisGameType("Bonus");
      } else {
        setGameType(false);
        setThisGameType("Normal");
      }
    }

    if(localTheme !== "" ) {
      if(localTheme === "dark") {
        setThemeColor("dark");
      } else {
        setThemeColor("light");
        document.getElementById("inputTheme").checked = true;
      }
    }

    if(localScorePreference !== "" ) {
      if(localScorePreference === "3") {
        setScorePreference(3);
      } else {
        setScorePreference(5);
        document.getElementById("inputScore").checked = true;
      }
    }

    if(localDifficulty !== "") {
      if(localDifficulty === "humain") {
        setDifficulty("Ia")
      } else {
        setDifficulty("Random")
        document.getElementById("inputDifficulty").checked = true;
      }
    }
  }, [score, robotScore])


  return (
    <AppContainer className="App" themeColor={themeColor}>
      <HeaderScore thisGameType={thisGameType} score={score} robotScore={robotScore} />

      {gameType === false ? (
        <NormalGame 
          setUserChoice={setUserChoice} 
          robotPlay={robotPlayClassic}
          handleResultValue={showResult}
          userChoice={userChoice}
          robotChoice={robotChoice}
          handleResult={handleResult}
          setScore={setScore}
          score={score}
          setRobotScore={setRobotScore}
          robotScore={robotScore}
          thisGameType={thisGameType}
        />
      ) : (
        <BonusGame 
          setUserChoice={setUserChoice} 
          robotPlay={robotPlayBonus}         
          handleResultValue={showResult}
          userChoice={userChoice}
          robotChoice={robotChoice}
          handleResult={handleResult}
          setScore={setScore}
          score={score}
          setRobotScore={setRobotScore}
          robotScore={robotScore}
          thisGameType={thisGameType}
        />
      )}

      <ButtonsContainer>
        <ButtonToggle onClick={handleParams}><span>Parametres</span></ButtonToggle>
        <ButtonToggle onClick={handleTextType}>{thisGameType}</ButtonToggle>
        <ButtonToggle onClick={handleRules} style={{ zIndex: "20" }}><span>Règles</span></ButtonToggle>
      </ButtonsContainer>

      <GameParams 
        handleDifficulty={handleDifficulty} 
        handleThemeColor={handleThemeColor}
        handleScorePreference={handleScorePreference}
        showParams={showParams}
      />
      <Rules 
        thisGameType={thisGameType}
        showRules={showRules}
      />
    </AppContainer>
  );
}

export default App;
