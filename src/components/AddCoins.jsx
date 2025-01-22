import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MdAdd } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import coins_won from "../assets/coins-won.svg"
import { useState } from 'react';

function AddCoins() {
    const [coins, setCoins] = useState(10)

    const addCoins = () => {
        setCoins(coins + 10)
    }

    const startIcon = <div className="split-btn">
        <FaWallet />
        <img src={coins_won} alt="coin" className="coin" />
    </div>
    return (
        <ButtonGroup
            onClick={addCoins}
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
            <Button color="#019E5D" variant="contained" startIcon={startIcon} >{coins}</Button>
            <Button
                color="#019E5D"
                size="small"
            >
                <MdAdd size={24} />
            </Button>
        </ButtonGroup>
    )
}

export default AddCoins