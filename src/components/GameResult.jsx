import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const ResultContainer = styled.main`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ResultChoiceContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    max-width: 450px;
    margin-bottom: 50px;

    article {
      width: 120px;
      height: 120px;
    }
  }
`;
const ResultUserChoice = styled.article`
  width: 95px;
  height: 95px;
  background-color: white;
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;
  z-index: 2;
`;

const ResultRobotChoice = styled.article`
  width: 95px;
  height: 95px;
  background-color: white;
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;
  z-index: 2;
`;

const ResultWaintingContainer = styled.div`
  width: 95px;
  height: 95px;
  background: #FFFFFF;
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;
const ResultWaitingRounded = styled.div`
  width: 95px;
  height: 95px;
  font-size: 13px;
  position: relative;
  -webkit-animation: spin 10s linear infinite;
     -moz-animation: spin 10s linear infinite;
          animation: spin 10s linear infinite;

  span:nth-of-type(1) { transform: rotate(0deg); }
  span:nth-of-type(2) { transform: rotate(-20deg); }
  span:nth-of-type(3) { transform: rotate(-30deg); }
  span:nth-of-type(4) { transform: rotate(-50deg); }
  span:nth-of-type(5) { transform: rotate(-70deg); }
  span:nth-of-type(6) { transform: rotate(-90deg); }
  span:nth-of-type(7) { transform: rotate(-110deg); }
  span:nth-of-type(8) { transform: rotate(-130deg); }
  span:nth-of-type(9) { transform: rotate(-140deg); }
  span:nth-of-type(10) { transform: rotate(-160deg); }
  span:nth-of-type(11) { transform: rotate(-180deg); }
  span:nth-of-type(12) { transform: rotate(-200deg); }
  span:nth-of-type(13) { transform: rotate(-220deg); }
  span:nth-of-type(14) { transform: rotate(-240deg); }
  span:nth-of-type(15) { transform: rotate(-260deg); }
  span:nth-of-type(16) { transform: rotate(-280deg); }
  span:nth-of-type(17) { transform: rotate(-300deg); }
  span:nth-of-type(18) { transform: rotate(-320deg); }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;
const ResultWaitingLetter = styled.span`
  color: black;
  width: 95px;
  height: 95px;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  margin-right: -25px;
  line-height: 70px;
  text-align: center;
  transform-origin: top center;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;


const NextContainer = styled.section`
  grid-row: 2;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  margin: 10% 0 0 0;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0 6%;
  }
`;
const SpanResult = styled.span`
  color: white;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 3.4rem;
  }
  @media (max-height: 668px) {
    margin-top: 20px;
    font-size: 2rem;
  }
`;
const PlayAgain = styled.button`
  width: 220px;
  background-color: transparent;
  padding: 7.5px 10px;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: hsl(217, 16%, 45%);
  letter-spacing: 0.5px;
  transition: all .4s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #FFFFFF;
    background: hsl(39, 89%, 49%);
    color: #FFFFFF;
    outline: none;
  }

  @media (min-width: 768px) {
    background-color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 0.8rem;
    width: 15.277777777777779vw;
  }
  @media (max-height: 668px) {
    width: 160px;
    padding: 8px 15px;
  }
`


export default function GameResult({ userChoice, robotChoice, handleResult, thisGameType, setScore, score, setRobotScore, robotScore }) {

  const [resultText, setResultText] = useState("");
  const [showRobotChoice, setShowRobotChoice] = useState(false);
  const localTheme = localStorage.getItem("theme");

  useEffect(() => {
    if(thisGameType === "Bonus") {
      const timer =  setTimeout(() => {
        resultBonus();
        setShowRobotChoice(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        resultNormal();
        setShowRobotChoice(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [userChoice, robotChoice])


  // COMPTER LES POINTS LORS D'UNE PARTIE NORMALE P-F-S
  const resultNormal = () => {
    if((userChoice === "rock" && robotChoice === "scissors") 
    || (userChoice === "paper" && robotChoice === "rock") 
    || (userChoice === "scissors" && robotChoice === "paper")) {
      setScore(score + 1);
      setResultText("Gagné !")
    } else if((userChoice === "rock" && robotChoice === "paper")
    || (userChoice === "paper" && robotChoice === "scissors")
    || (userChoice === "scissors" && robotChoice === "rock")) {
      setRobotScore(robotScore + 1);
      setResultText("Perdu..")
    } else {
      setResultText("Egalité")
    }
  }


  // COMPTER LES POINTS LORS D'UNE PARTIE BONUS P-F-S-L-S
  const resultBonus = () => {
    if((userChoice === "rock" && robotChoice === "scissors")
    || (userChoice === "rock" && robotChoice === "lizard")
    || (userChoice === "paper" && robotChoice === "rock")
    || (userChoice === "paper" && robotChoice === "spock")
    || (userChoice === "scissors" && robotChoice === "paper")
    || (userChoice === "scissors" && robotChoice === "lizard")
    || (userChoice === "lizard" && robotChoice === "spock")
    || (userChoice === "lizard" && robotChoice === "paper")
    || (userChoice === "spock" && robotChoice === "scissors")
    || (userChoice === "spock" && robotChoice === "rock")) {
      setScore(score + 1);
      setResultText("Gagné !")
    } else if((userChoice === "rock" && robotChoice === "paper")
    || (userChoice === "rock" && robotChoice === "spock")
    || (userChoice === "paper" && robotChoice === "scissors")
    || (userChoice === "paper" && robotChoice === "lizard")
    || (userChoice === "scissors" && robotChoice === "rock")
    || (userChoice === "scissors" && robotChoice === "spock")
    || (userChoice === "lizard" && robotChoice === "rock")
    || (userChoice === "lizard" && robotChoice === "scissors")
    || (userChoice === "spock" && robotChoice === "paper")
    || (userChoice === "spock" && robotChoice === "lizard")) {
      setRobotScore(robotScore + 1);
      setResultText("Perdu..")
    } else {
      setResultText("Egalité")
    }
  }


  return (
    <ResultContainer>
      <ResultChoiceContainer>
        <ResultUserChoice className={userChoice} id={`${resultText === "Gagné !" ? localTheme === "dark" ? "win" : "winLight" : "" }`} />
        {showRobotChoice ? (
          <ResultRobotChoice id="robotChoiceResult" className={robotChoice} id={`${resultText === "Perdu.." ? localTheme === "dark" ? "win" : "winLight" : "" }`} />
        ) : (
          <ResultWaintingContainer>
            <ResultWaitingRounded>
              <ResultWaitingLetter>L</ResultWaitingLetter>
              <ResultWaitingLetter>E</ResultWaitingLetter>
              <ResultWaitingLetter> </ResultWaitingLetter>
              <ResultWaitingLetter>R</ResultWaitingLetter>
              <ResultWaitingLetter>O</ResultWaitingLetter>
              <ResultWaitingLetter>B</ResultWaitingLetter>
              <ResultWaitingLetter>O</ResultWaitingLetter>
              <ResultWaitingLetter>T</ResultWaitingLetter>
              <ResultWaitingLetter> </ResultWaitingLetter>
              <ResultWaitingLetter>R</ResultWaitingLetter>
              <ResultWaitingLetter>E</ResultWaitingLetter>
              <ResultWaitingLetter>F</ResultWaitingLetter>
              <ResultWaitingLetter>L</ResultWaitingLetter>
              <ResultWaitingLetter>E</ResultWaitingLetter>
              <ResultWaitingLetter>C</ResultWaitingLetter>
              <ResultWaitingLetter>H</ResultWaitingLetter>
              <ResultWaitingLetter>I</ResultWaitingLetter>
              <ResultWaitingLetter>T</ResultWaitingLetter>
            </ResultWaitingRounded>
          </ResultWaintingContainer>
        )}
      </ResultChoiceContainer>

      <NextContainer id="replayContent">
        <SpanResult>{resultText}</SpanResult>
        <PlayAgain onClick={handleResult} id="rejouer">Rejouer</PlayAgain>
      </NextContainer>
    </ResultContainer>
  )
}
