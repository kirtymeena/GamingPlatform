import coins_won from "../assets/coins-won.svg"
import "../styles/GameCard.scss"
import Chip from '@mui/material/Chip';
import user_live_icon from "../assets/user_live_icon.svg"
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { MdPlayArrow } from "react-icons/md";

function Gamecard({ variant = "sm", game }) {

    const liveUser = <div className="live__user">
        <p>{game.liveUsers.toLocaleString('en-US')}</p>
        {
            variant === "lg" &&
            <p className="live__user-text">Live Users</p>
        }
    </div>

    return (
        <article className={`card ${variant}`} tabIndex={0}>
            <div className="card__media">
                <img src={game.image} alt="card background image" />
            </div>
            <div className={`card__body ${variant}`}>
                <div className="card__coins">
                    <img src={coins_won} alt="coins-image" className={`coin__image-${variant}`} />
                    <p className={`coins ${variant}`}>{game.coins.toLocaleString('en-US')}</p>
                    {
                        variant === "lg" &&
                        <p className="coins__text">Won this week</p>
                    }
                </div>
                <div className="card__options">
                    <Chip icon={<img src={user_live_icon} className={`user__live ${variant}`} />} label={liveUser} />
                    {
                        variant === "lg" &&
                        <Button variant="contained" startIcon={<MdPlayArrow size={23} />} className="contained__btn">Play Now</Button>

                    }
                </div>
            </div>
        </article >
    )
}
Gamecard.propTypes = {
    variant: PropTypes.string,
    game: PropTypes.object,
};
Gamecard.defaultProps = {
    variant: "sm",
};
export default Gamecard
