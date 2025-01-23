import GameCard from "./GameCard";
import { MdArrowForwardIos } from "react-icons/md";
import Button from '@mui/material/Button';
import BattleArena from "./BattleArena";
import battle_arena from "../assets/battle-arena.jpeg"
import PropTypes from 'prop-types'

function GameSection({ mostWonGame, otherGames, battleArenaList }) {
  return (
    <>
      <section className="section__gameCard">
        <GameCard variant="lg" game={mostWonGame} />
        <div className="game__container">
          {
            otherGames.map(game =>
              <GameCard key={game.id} variant="sm" game={game} />
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
    </>
  )
}

GameSection.propTypes = {
  mostWonGame: PropTypes.object.isRequired,
  otherGames: PropTypes.array.isRequired,
  battleArenaList: PropTypes.array.isRequired,
}

export default GameSection

