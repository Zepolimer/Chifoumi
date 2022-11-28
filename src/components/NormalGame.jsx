import React from 'react';
import styled from "styled-components";
import GameResult from './GameResult';

const NormalGameContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 120px 100px;

  @media screen and (min-width: 500px) {
    grid-template-rows: 130px 120px;
  }

  @media screen and (min-width: 768px) {
    max-width: 450px;
    grid-template-rows: 160px 120px;

    img {
      max-width: 350px;
    }

    button {
      width: 120px;
      height: 120px;
    }
  }
`;

const TriangleBg = styled.img`
  margin-top: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  width: 75%;
  max-width: 300px;
`;

const PaperItem = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  background-image: url(${process.env.PUBLIC_URL+"../images/icon-paper.svg"});
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  border: 10px solid hsl(230, 89%, 62%);
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;
  z-index: 2;
  cursor: pointer;

  transition: background-size .5s ease-in-out;
  &:hover,
  &:focus {
    background-size: 50%;
    outline: none;
  }
`;

const ScissorsItem = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  background-image: url(${process.env.PUBLIC_URL+"../images/icon-scissors.svg"});
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  border: 10px solid hsl(39, 89%, 49%);
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;

  justify-self: flex-end;
  z-index: 2;
  cursor: pointer;

  transition: background-size .5s ease-in-out;
  &:hover,
  &:focus {
    background-size: 50%;
    outline: none;
  }
`;

const RockItem = styled.button`
  width: 100px;
  height: 100px;
  margin-top: 60px;
  background-color: white;
  background-image: url(${process.env.PUBLIC_URL+"../images/icon-rock.svg"});
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  border: 10px solid hsl(349, 71%, 52%);
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;

  grid-column: 1/3;
  justify-self: center;
  z-index: 2;
  cursor: pointer;

  transition: background-size .5s ease-in-out;
  &:hover,
  &:focus {
    background-size: 50%;
    outline: none;
  }
`;


export default function NormalGame({ setUserChoice, robotPlay, handleResult, handleResultValue, userChoice, robotChoice, setScore, score, setRobotScore, robotScore, thisGameType }) {

  const startChoice = (e) => {
    setUserChoice(e.target.dataset.id);
    robotPlay();
    handleResult();
  };

  return (
    <main>
      {handleResultValue === false ? (
        <NormalGameContainer>
          <TriangleBg src={process.env.PUBLIC_URL + "../images/bg-triangle.svg"} alt="triangle" />

          <PaperItem data-id="paper" onClick={startChoice} />
          <ScissorsItem data-id="scissors" onClick={startChoice} />
          <RockItem data-id="rock" onClick={startChoice} />
        </NormalGameContainer>
      ) : (
        <GameResult 
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
    </main>
  )
}
