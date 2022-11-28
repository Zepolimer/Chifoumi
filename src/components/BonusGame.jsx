import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import GameResult from './GameResult';

const BonusGameContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  max-width: 400px;
  height: auto;
  margin: 10px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100px 130px 100px;

  @media screen and (min-width: 500px) {
    grid-template-rows: 125px 160px 120px;
  }

  @media screen and (min-width: 768px) {
    max-width: 450px;

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
  margin-top: -1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  width: 80%;
  max-width: 300px;

  @media screen and (min-width: 500px) {
    margin-top: 0;
  }
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

  grid-row: 2;
  grid-column: 2;
  justify-self: flex-end;
  cursor: pointer;

  transition: width .3s ease-in-out, height .3s ease-in-out, background-size .5s ease-in-out;
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

  grid-row: 1;
  grid-column: 1/3;
  justify-self: center;
  z-index: 2;
  cursor: pointer;

  transition: width .3s ease-in-out, height .3s ease-in-out, background-size .5s ease-in-out;
  &:hover,
  &:focus {
    background-size: 50%;
    outline: none;
  }
`;

const RockItem = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  background-image: url(${process.env.PUBLIC_URL+"../images/icon-rock.svg"});
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  border: 10px solid hsl(349, 71%, 52%);
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;

  grid-row: 3;
  grid-column: 2;
  justify-self: center;
  z-index: 2;
  cursor: pointer;

  transition: width .3s ease-in-out, height .3s ease-in-out, background-size .5s ease-in-out;
  &:hover,
  &:focus {
    background-size: 50%;
    outline: none;
  }
`;

const LezardItem = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  background-image: url(${process.env.PUBLIC_URL+"../images/icon-lizard.svg"});
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  border: 10px solid hsl(261, 73%, 60%);
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;

  grid-row: 3;
  grid-column: 1;
  justify-self: center;
  z-index: 2;
  cursor: pointer;

  transition: width .3s ease-in-out, height .3s ease-in-out, background-size .5s ease-in-out;
  &:hover,
  &:focus {
    background-size: 50%;
    outline: none;
  }
`;

const SpockItem = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  background-image: url(${process.env.PUBLIC_URL+"../images/icon-spock.svg"});
  background-position: center;
  background-size: 40%;
  background-repeat: no-repeat;
  border: 10px solid hsl(189, 59%, 53%);
  border-radius: 50%;
  box-shadow: inset 0px 5px 6px grey;

  grid-row: 2;
  grid-column: 1;
  justify-self: flex-start;
  z-index: 2;
  cursor: pointer;

  transition: width .3s ease-in-out, height .3s ease-in-out, background-size .5s ease-in-out;
  &:hover,
  &:focus {
    background-size: 50%;
    outline: none;
  }
`

export default function BonusGame({ setUserChoice, robotPlay, handleResult, handleResultValue, userChoice, robotChoice, setScore, score, setRobotScore, robotScore, thisGameType }) {
  
  const startChoice = (e) => {
    setUserChoice(e.target.dataset.id);
    robotPlay();
    handleResult();
  };

  return (
    <main>
      {handleResultValue === false ? (
        <BonusGameContainer>
          <TriangleBg src={process.env.PUBLIC_URL + "../images/bg-pentagon.svg"} alt="triangle" />

          <ScissorsItem data-id="scissors" onClick={startChoice} />
          <PaperItem data-id="paper" onClick={startChoice} />
          <LezardItem data-id="lizard" onClick={startChoice} />
          <SpockItem data-id="spock" onClick={startChoice} />
          <RockItem data-id="rock" onClick={startChoice} />
        </BonusGameContainer>
      ) : (
        <GameResult 
          userChoice={userChoice} 
          robotChoice={robotChoice} 
          handleResult={handleResult}
          thisGameType={thisGameType}
          setScore={setScore}
          score={score}
          setRobotScore={setRobotScore}
          robotScore={robotScore}
        />
      )}    
    </main>
  )
}
