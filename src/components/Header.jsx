import { MdMenu } from "react-icons/md";
import Avatar from "../assets/Avatar.png"
import "../styles/header.scss"
import Footer from "./Footer";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MdAdd } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import coins_won from "../assets/coins-won.svg"

function Header() {
    const startIcon = <div className="split-btn">
        <FaWallet />
        <img src={coins_won} alt="coin" className="coin" />
    </div>

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
                    <ButtonGroup
                        variant="contained"
                        sx={{
                            borderRadius: "12px",
                            backgroundColor: "#019E5D",
                            "& .MuiButtonGroup-grouped": {
                                color: "white",
                                "&:hover": {
                                    borderRadius: "12px",
                                    backgroundColor: "#019E5D",
                                },
                            },
                        }}
                    >
                        <Button color="#019E5D" variant="contained" startIcon={startIcon}>10</Button>
                        <Button
                            color="#019E5D"
                            size="small"
                        >
                            <MdAdd size={24} />
                        </Button>
                    </ButtonGroup>
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

                </div>
            </div>
        </nav>
    )
}

export default Header