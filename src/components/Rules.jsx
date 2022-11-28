import React from 'react';
import styled from "styled-components";

const RulesContainer = styled.aside`
  width: 75%;
  max-width: 350px;
  height: 350px;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ showRules }) => (showRules ? "translate(-50%, -50%)" : "translate(-50%,151%)")};
  background-color: white;
  transition: transform .6s ease-in-out;
  z-index: 10;
`;

const RulesSection = styled.section`
  width: 90%;
  height: 90%;
  margin: 5% auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RulesImage = styled.img`
  width: 90%;
  height: auto;
`;

export default function Rules({ thisGameType, showRules }) {
  return (
    <RulesContainer showRules={showRules}>
      {thisGameType === "Normal" ? (
        <RulesSection>
          <RulesImage src={process.env.PUBLIC_URL + "images/rules_3.png"} />
        </RulesSection>
      ) : (
        <RulesSection>
          <RulesImage src={process.env.PUBLIC_URL + "images/rules_5.png"} />
        </RulesSection>
      )}
    </RulesContainer>
  )
}
