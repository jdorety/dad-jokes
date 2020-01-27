import React, { useEffect } from "react";

export default function JokeCard(props) {
  return (
    <div className="joke-card">
      <span>{props.joke}</span>
    </div>
  );
}
