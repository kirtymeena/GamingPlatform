import { MdMenu } from "react-icons/md";
import "../styles/header.scss"
import Footer from "./Footer";
import AddCoins from "./AddCoins";
import UserProfile from "./userProfile";

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-sm">
                <div className="navbar__left">
                    <div className="navbar__more">
                        <MdMenu size={24} />
                    </div>
                    <UserProfile />
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
                    <div className="navbar__right">
                        <AddCoins />
                    </div>
                    <UserProfile />
                </div>
            </div>
        </nav>
    )
}

export default Header