import Footer from "./components/Footer"
import Header from "./components/Header"
import "./styles/App.scss"
import { games } from "./services/api";
import { battleArenaList } from "./services/api";
import { useState, useMemo } from "react";
import GameSection from "./components/GameSection";

function App() {
  const [gameList] = useState(games)
  const [battleArena] = useState(battleArenaList)
  const mostWonGame = useMemo(() => gameList.reduce((maxGame, currentGame) => {
    return currentGame.weeklyWinning > maxGame.weeklyWinning ? currentGame : maxGame
  }, games[0]), [gameList])

  const otherGames = gameList.filter(game => mostWonGame.id !== game.id)

  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main>
        <GameSection mostWonGame={mostWonGame} otherGames={otherGames} battleArenaList={battleArena} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App


