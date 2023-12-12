import { useState, useEffect } from "react";
import Suggest from "./Components/Suggest";
import Circle from "./Components/Circle";
import isWinner from "./helper";

const NO_PLAYER = 0;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;

export default function App() {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [activePlayer, setActivePlayer] = useState(PLAYER_ONE);
  const [winner, setWinner] = useState(false);
  const [winnerPlayer, setWinnerPlayer] = useState(NO_PLAYER);

  const handleClickCircle = (circleId) => {
    if (isWinner(gameBoard, circleId, activePlayer)) {
      setWinner(true);
      setActivePlayer(activePlayer);
      setWinnerPlayer(activePlayer);
    }
    setGameBoard((prevGameBoard) =>
      prevGameBoard.map((circle, index) => {
        if (index === circleId) return activePlayer;
        return circle;
      })
    );
    setActivePlayer(activePlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE);
  };

  useEffect(() => {
    console.log(gameBoard);
  }, [gameBoard]);

  const textColor = winner ? winnerPlayer === 1 ? "text-green-700" : "text-red-700" : 
                              activePlayer === 1 ? "text-green-700" : "text-red-700";
  // const playerColor;
  // if(winner){
  //   if(winnerPlayer === 1){
  //     playerColor = "bg-green-500";
  //   }else{
  //     playerColor = "bg-red-500";
  //   }
  // }
  // if(!winner){
  //   if(activePlayer === 1){
  //     playerColor = "bg-green-500";
  //   }else{
  //     playerColor = "bg-red-500";
  //   }
  // }
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-2 relative ">
        <div className="bg-yellow-100 border-4 border-orange-300 p-4 py-2 w-[10em] text-center absolute -top-8 shadow-2xl shadow-black cursor-pointer">
        { winner ? <p>Player{" "} <span className={`font-bold ${textColor} [text-shadow:_0_1px_0_var(--tw-shadow-color)] text-xl`} >{winnerPlayer}</span>{" "} Won</p> : <p>Player{" "} <span className={`font-bold ${textColor} [text-shadow:_0_1px_0_var(--tw-shadow-color)] text-xl`} >{activePlayer}</span>{" "} Turn</p>}
        </div>
        <Circle
          circle={gameBoard}
          handleClickCircle={handleClickCircle}
          activePlayer={activePlayer}
        />
        <div className="bg-yellow-100 border-4 border-orange-300 px-7 py-2 w-[10em] shadow-2xl shadow-black flex justify-center items-center">
          <Suggest />
        </div>
      </div>
    </div>
  );
}