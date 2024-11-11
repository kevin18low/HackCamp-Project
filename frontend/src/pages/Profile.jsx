import NavBar from "../components/NavBar";
import profile from "../images/profile.svg";
import Logo from "../components/Logo";

function Profile() {
    return (
        <div id="profile">
            <div>
                <Logo />
                <h2>Your Profile</h2>
                <div>
                    <img id="pfp" src={profile} alt=""></img>
                    <h6>shutterUser123</h6>
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export default Profile;