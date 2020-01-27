import React, { useEffect } from "react";

export default function JokeCard(props) {
  return (
    <div className="joke-card">
      <h2>{props.joke}</h2>
    </div>
  );
}
