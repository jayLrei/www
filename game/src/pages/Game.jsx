import React, { useState } from "react";
import Description from "./components/Description.jsx";
import Board from "./components/Board.jsx";

function Game() {
  const [showBoard, setShowBoard] = useState(false);

  const handleClick = () => {
    setShowBoard(true);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative"
      onClick={handleClick}
    >
      {!showBoard ? <Description /> : <Board />}
    </div>
  );
}

export default Game;
