import "../styles/battleArena.scss"
import PropTypes from 'prop-types';
import coin from "../assets/coin.png"
import sword from "../assets/sword.png"
import remote from "../assets/remote.png";
import Button from '@mui/material/Button';

function BattleArena({ image, stakes, upcomingMatches, totalMatchesPlayed }) {
    return (
        <article className='arena'>
            <div className='arena__media'>
                <img src={image} />
            </div>
            <div className="arena__body">
                <div className="arena__details">
                    <div className="arena__values">
                        <img src={coin} className="arena__img" alt="coin stakes" />
                        <p >{stakes.toLocaleString('en-US')}</p>
                    </div>
                    <p className="arena__text">Worth of Stakes this Month</p>
                </div>
                <div className="arena__details">
                    <div className="arena__values">
                        <img src={sword} className="arena__img" alt="upcoming matches" />
                        <p >{upcomingMatches.toLocaleString('en-US')}</p>
                    </div>
                    <p className="arena__text">Upcoming Matches</p>
                </div>
                <div className="arena__details">
                    <div className="arena__values">
                        <img src={remote} className="arena__img" alt="total matches" />
                        <p >{totalMatchesPlayed.toLocaleString('en-US')}</p>
                    </div>
                    <p className="arena__text">Total Matches Played</p>
                </div>
            </div>
            <div className="play__btn">
                <Button color="#cd7811" fullWidth variant="contained" className="contained__btn">View Matches</Button>
            </div>
        </article>
    )
}

BattleArena.propTypes = {
    image: PropTypes.string,
    stakes: PropTypes.number,
    upcomingMatches: PropTypes.number,
    totalMatchesPlayed: PropTypes.number,
}
BattleArena.defaultProps = {
    image: '',
    stakes: 0,
    upcomingMatches: 0,
    totalMatchesPlayed: 0
}
export default BattleArena