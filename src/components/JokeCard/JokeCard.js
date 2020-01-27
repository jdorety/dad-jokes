import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";

const Fade = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

export default function JokeCard(props) {
  return (
    <Fade>
      <div className="joke-card">
        <span>{props.joke}</span>
      </div>
    </Fade>
  );
}
