import React from 'react';
import styled from "styled-components";

const ParamsContainer = styled.aside`
  width: 75%;
  max-width: 350px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ showParams }) => (showParams ? "translate(-50%, -50%)" : "translate(-50%,151%)")};
  background: #FFFFFF;
  color: #1F3756;
  padding: 10px;
  border-radius: 6px;
  transition: transform .6s ease-in-out;
  z-index: 11;
`;

const ParamsSubtitle = styled.p`
  padding: 10px 0;
  text-transform: uppercase;
  font-weight: 800;
`;

const LabelParams = styled.label`
  width: 100%;
  display: inline-block;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #1F3756;
  cursor: pointer;

  &:hover div::before {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }
`;

const InputParams = styled.input`
  position: absolute;
  visibility: hidden;

  &:checked + div {
    background: #1F3756;
  }
  &:checked + div::before {
    left: 28px;
  }
`

const DivParams = styled.div`
  display: inline-block;
  background: #E0E5E6;
  border-radius: 16px;
  width: 48px;
  height: 24px;
  position: relative;
  vertical-align: middle;
  transition: background 0.25s;

  &::before,
  &::after {
    content: "";
  }

  &::before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #eee 100%);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: left 0.25s;
  }
`;

const LeftText = styled.span`
  text-transform: uppercase;
  margin-right: 10px;
  font-size: 15px;
  color: #C8CBCC;
`;

const RightText = styled.span`
  text-transform: uppercase;
  margin-left: 10px;
  font-size: 15px;
  color: #C8CBCC;
`;

const StatTextContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const StatText = styled.p`
  text-transform: uppercase;
  font-size: 15px;
  color: #C8CBCC;
`;


export default function GameParams({ handleDifficulty, handleThemeColor, handleScorePreference, showParams }) {

  const localVictories = localStorage.getItem("victories");
  const localDefeats = localStorage.getItem("defeats");

  return (
    <ParamsContainer showParams={showParams}>
      <ParamsSubtitle>Mode du robot</ParamsSubtitle>
      <LabelParams>
        <LeftText>Aléatoire</LeftText>
        <InputParams type="checkbox" id="inputDifficulty" onClick={handleDifficulty}/>
        <DivParams />
        <RightText>Humain</RightText>
      </LabelParams>

      <ParamsSubtitle>Theme</ParamsSubtitle>
      <LabelParams>
        <LeftText>Dark</LeftText>
        <InputParams type="checkbox" id="inputTheme" onClick={handleThemeColor}/>
        <DivParams />
        <RightText>Ligth</RightText>
      </LabelParams>

      <ParamsSubtitle>Score</ParamsSubtitle>
      <LabelParams>
        <LeftText>3</LeftText>
        <InputParams type="checkbox" id="inputScore" onClick={handleScorePreference}/>
        <DivParams />
        <RightText>5</RightText>
      </LabelParams>

      <ParamsSubtitle>Statistiques</ParamsSubtitle>
      <StatTextContainer>
        <StatText>Victoires : {localVictories}</StatText>
        <StatText>Defaites : {localDefeats}</StatText>
      </StatTextContainer>
    </ParamsContainer>
  )
}
