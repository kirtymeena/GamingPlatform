
import "../styles/footer.scss"
import { useState } from "react";
import { MdOutlineHome, MdAddTask } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

function Footer() {
    const footerItems = [
        {
            id: 1,
            name: "home",
            icon: <MdOutlineHome size={26} />
        },
        {
            id: 2,
            name: "add",
            icon: <MdAddTask size={24} />
        },
        {
            id: 3,
            name: "wallet",
            icon: <BsWallet2 size={24} />
        },
        {
            id: 4,
            name: "profile",
            icon: <FaRegUser size={24} />
        },
    ]
    const defaultSelectedOption = footerItems[0].name
    const [selectedOption, setSelectedOption] = useState(defaultSelectedOption)

    const handleSelectedItem = (option) => {
        setSelectedOption(option)
    }


    return (
        <div className='footer__items'>
            {
                footerItems.map(item =>
                    <button key={item.id} className={`btn ${selectedOption === item.name && "selected"}`} onClick={() => handleSelectedItem(item.name)}>
                        {item.icon}
                    </button>
                )
            }

        </div>
    )
}

export default Footer