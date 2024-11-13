import React, { useState } from "react";
import { customColors } from "./customColors";
import { rules } from "./rules";
import { customOrder } from "./customOrders";
import { pieces } from "./pieces";
import Popup from "./Popup"

export default function Board() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [diceRoll, setDiceRoll] = useState(null);
  const [currentPositionInfo, setCurrentPositionInfo] = useState(0);
  const [piecePositions, setPiecePositions] = useState(
    pieces.reduce((acc, piece) => {
      acc[piece.number] = 0;
      return acc;
    }, {})
  );
  const rollDice = () => {
    const randomRoll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(randomRoll);
    if (selectedPiece !== null) {
      movePiece(selectedPiece, randomRoll);
    }
  };
  const selectPiece = (pieceNumber) => {
    if (selectedPiece === pieceNumber) {
      setSelectedPiece(null);
    } else {
      setSelectedPiece(pieceNumber);
    }
  };
  const movePiece = (pieceNumber, diceValue) => {
    const targetPosition = piecePositions[pieceNumber] + diceValue;
    const newPositions = { ...piecePositions };

    const animateMovement = () => {
      setPiecePositions((prevPositions) => {
        const currentPos = prevPositions[pieceNumber];

        if (currentPos < targetPosition) {
          newPositions[pieceNumber] = currentPos + 1;
        } else if (currentPos > targetPosition) {
          newPositions[pieceNumber] = currentPos - 1;
        }

        if (newPositions[pieceNumber] === targetPosition) {
          clearInterval(intervalId);
          const reachedIndex = newPositions[pieceNumber];
          const customColor = customColors[reachedIndex];
          const rule = rules[reachedIndex];
          setCurrentPositionInfo({ customColor, rule });
        }

        return { ...prevPositions, ...newPositions };
      });
    };

    const intervalId = setInterval(animateMovement, 500);
  };

  const moveBackwards = () => {
    if (selectedPiece !== null) {
      setPiecePositions((prevPositions) => {
        const newPositions = { ...prevPositions };
        let newPosition = prevPositions[selectedPiece] - 3;

        if (newPosition < 0) {
          newPosition = 0;
        }

        newPositions[selectedPiece] = newPosition;
        const reachedIndex = newPosition;
        const customColor = customColors[reachedIndex];
        const rule = rules[reachedIndex];

        setCurrentPositionInfo({ customColor, rule });

        return newPositions;
      });
    }
  };
  return (
    <div className="w-full h-[90vh] grid grid-cols-9 grid-rows-7 gap-1 relative">
      {Array.from({ length: 63 }).map((_, index) => {
        const customIndex = customOrder[index];
        return (
          <div
            key={customIndex}
            className={`flex items-center p-5 justify-center w-100 h-100 relative ${
              customColors[customIndex]
            } ${
              ![
                28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
                44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                60, 61, 62,
              ].includes(customIndex)
                ? "border border-black"
                : "bg-white"
            }`}
          >
            <span className="text-lg text-center font-semibold">
              {rules[customIndex]}
            </span>

            {customIndex === 59 && (
              <div className="flex items-center justify-center font-bold text-6xl border-black border-8 rounded-full p-2 w-24 h-24">
                {diceRoll !== null ? diceRoll : ""}
              </div>
            )}
            {customIndex === 62 && (
              <div
                className={` text-white p-4 text-xl rounded-lg cursor-pointer  ${
                  selectedPiece ? "bg-black" : "bg-white"
                }`}
                onClick={moveBackwards}
                disabled={!selectedPiece}
              >
                뒤로 3칸 보내기...
              </div>
            )}
            {pieces.map((piece) => {
              if (piecePositions[piece.number] === customIndex) {
                return (
                  <div
                    key={piece.number}
                    className={`absolute w-10 h-10 text-white font-bold rounded-full cursor-pointer flex items-center justify-center ${
                      piece.position
                    } ${
                      selectedPiece === piece.number
                        ? "border-4 border-white"
                        : ""
                    }`}
                    onClick={() => selectPiece(piece.number)}
                  >
                    {piece.number}
                  </div>
                );
              }
              return null;
            })}
          </div>
        );
      })}

      {currentPositionInfo && (
          <Popup currentPositionInfo = {currentPositionInfo}/>
      )}

      <div
        className="absolute bottom-80 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 text-4xl text-black py-4 px-8 rounded-lg cursor-pointer"
        onClick={rollDice}
      >
        행운의 주사위 굴리기
      </div>
    </div>
  );
}
