import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 90%;
  max-width: 700px;
  margin: 0 auto 60px auto;
  padding: 10px;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.h1`
  width: fit-content;
  font-weight: 800;
  line-height: 17px;
  font-size: 19px;
  text-transform: uppercase;
  transition: color .3s ease-in-out;
`;


const ScoreContainer = styled.section`
  padding: 0.5rem 1rem;
  background: #FFFFFF;
  color: #1F3756;
  border-radius: 6px;
  display: flex;
`;
const ScoreComponents = styled.article`
  width: 100%;
`;
const ScorePlayer = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;
const ScoreResult = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

const ScoreSeparator = styled.div`
  hight: 100%;
  width: 3px;
  background: #1F3756;
  margin: 0 10px;
`;


export default function HeaderScore({ thisGameType, score, robotScore }) {
  return (
    <HeaderContainer>
      {thisGameType === "Normal" ? (
        <TitleSection>
          <Title>Pierre</Title>
          <Title>Feuille</Title>
          <Title>Ciseaux</Title>
        </TitleSection>
      ) : (
        <TitleSection>
          <Title>Pierre</Title>
          <Title>Feuille</Title>
          <Title>Ciseaux</Title>
          <Title>Lezard</Title>
          <Title>Spock</Title>
        </TitleSection>
      )}

      <ScoreContainer>
        <ScoreComponents>
          <ScorePlayer>Vous</ScorePlayer>
          <ScoreResult>{score}</ScoreResult>
        </ScoreComponents>

        <ScoreSeparator />

        <ScoreComponents>
          <ScorePlayer>Robot</ScorePlayer>
          <ScoreResult>{robotScore}</ScoreResult>
        </ScoreComponents>
      </ScoreContainer>
    </HeaderContainer>
  )
}
