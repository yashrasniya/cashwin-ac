import React from "react";
import { useParams } from "react-router-dom";
import Card32Game from "./Card32Game/Card32Game";
import CoomingSoon from "./ComingSoon";
import DragonTigerGame from "./DragonTigerGame";
import Lucky7Game from "./Lucky7Game";
import Teenpati from "./Teenpati";

function GameComponent() {
  const param = useParams();
  const { gameName = "dragon" } = param;
  const availableGames = ["dragon", "lucky7", "teenpati", "card32"];
  if (!availableGames.includes(gameName)) {
    return <CoomingSoon />;
  }
  return (
    <>
      {gameName === "dragon" && <DragonTigerGame />}
      {gameName === "lucky7" && <Lucky7Game />}
      {gameName === "teenpati" && <Teenpati />}
      {gameName === "card32" && <Card32Game />}
    </>
  );
}

export default GameComponent;
