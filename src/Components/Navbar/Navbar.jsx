import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Theme } from '../../Contexts/Mode';
const Navbar = () => {
    const { mode, Setmode } = useContext(Theme)
    return (
        <div className={`navbar ${mode}`}>
            <div className="navbar_container">
                <div className="navbar_left">
                    <span style={{ letterSpacing: "1.5px" }}>gammasocial</span>
                    <Link to="/" style={{ textDecoration: "none", color: "var(--color)", paddingTop: "5px" }}><HomeOutlinedIcon /></Link>
                    {mode !== "light_mode" ? <i className="fa-solid fa-sun" style={{ color: "white" }} onClick={() => { Setmode("light_mode") }}></i> : <i className="fa-solid fa-moon" onClick={() => { Setmode("dark_mode") }}></i>}
                    <GridViewIcon />
                    <div className="navbar_search">
                        <SearchIcon />
                        <input type="text" placeholder='Search....' />
                    </div>
                </div>
                <div className="navbar_right">
                    <PermIdentityOutlinedIcon />
                    <EmailOutlinedIcon />
                    <NotificationsNoneOutlinedIcon />
                    <div className="navbar_user">
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Profile Image" />
                        <span>Hemanth</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar