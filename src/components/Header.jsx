import { MdMenu } from "react-icons/md";
import Avatar from "../assets/Avatar.png"
import "../styles/header.scss"
import Footer from "./Footer";
import AddCoins from "./AddCoins";

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-sm">
                <div className="navbar__left">
                    <div className="navbar__more">
                        <MdMenu size={24} />
                    </div>
                    <div className="navbar__avatar">
                        <img src={Avatar} alt="avatar" className="avatar" />
                    </div>
                    <div className="navbar__username">
                        <p>MOB99100N</p>
                    </div>
                </div>
                <div className="navbar__right">
                    <AddCoins />
                </div>
            </div>
            {/* medium to larger screens */}
            <div className="navbar-lg">
                <div className="navbar__left">
                    <div>
                        <Footer />
                    </div>
                </div>
                <div className="navbar__right">
                    <div className="navbar__avatar" title="MOB99100N">
                        <img src={Avatar} alt="avatar" className="avatar" />
                    </div>
                    <div className="navbar__right">
                        <AddCoins />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header