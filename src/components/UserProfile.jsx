import Avatar from "../assets/Avatar.png"

function UserProfile() {
    return (
        <>
            <div className="navbar__avatar">
                <img src={Avatar} alt="avatar" className="avatar" />
            </div>
            <div className="navbar__username">
                <p>MOB99100N</p>
            </div>
        </>
    )
}

export default UserProfile