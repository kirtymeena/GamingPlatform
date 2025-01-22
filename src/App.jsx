import Footer from "./components/Footer"
import Header from "./components/Header"
import "./styles/App.scss"
import Gamecard from "./components/Gamecard";
import { games } from "./services/api";
import Button from '@mui/material/Button';
import { MdArrowForwardIos } from "react-icons/md";
import BattleArena from "./components/BattleArena";
import battle_arena from "./assets/battle-arena.jpeg"
import { battleArenaList } from "./services/api";
import { useState, useMemo } from "react";

function App() {

  const [gameList] = useState(games)

  const mostWonGame = useMemo(() => gameList.reduce((maxGame, currentGame) => {
    return currentGame.coins > maxGame.coins ? currentGame : maxGame
  }, games[0]), [gameList])

  const otherGames = gameList.filter(game => mostWonGame.id !== game.id)


  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main>
        <section className="section__gameCard">
          <Gamecard variant="lg" game={mostWonGame} />
          <div className="game__container">
            {
              otherGames.map(game =>
                <Gamecard key={game.id} variant="sm" game={game} />
              )
            }
          </div>
        </section>
        <section className="section__arena">
          <div className="arena__header">
            <h2>Battle Arena</h2>
            <Button endIcon={<MdArrowForwardIos size={15} />} variant="text" color="white">View All</Button>
          </div>
          {
            battleArenaList.map(({ stakes, upcomingMatches, totalMatchesPlayed, id }) =>
              <BattleArena key={id} image={battle_arena} stakes={stakes} upcomingMatches={upcomingMatches} totalMatchesPlayed={totalMatchesPlayed} />
            )
          }
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App


