import React, { useContext } from 'react'
import './Profile.css'
import Post from '../../Components/Post/Post'
import { Theme } from '../../Contexts/Mode'
const Profile = () => {
    const { mode, usr } = useContext(Theme)
    const profile_data = [
        {
            user_id: 1,
            user_name: "Neha Shetty",
            b_img: "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            p_img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            user_id: 2,
            user_name: "Ravi Kumar",
            b_img: "https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            p_img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            user_id: 3,
            user_name: "Rhea Chaudry",
            b_img: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
            p_img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
    ]
    return (
        <div className={`profile ${mode}`}>
            <div className="profile_con">
                <div className="profile_banner" style={{ backgroundImage: `url(${profile_data[usr - 1].b_img})` }}>
                </div>
                <div className="profile_view">
                    <img src={profile_data[usr - 1].p_img} alt="" className="profile_img img" />
                    <span>{profile_data[usr - 1].user_name}</span>
                    <div className="profile_icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-meta"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-pinterest"></i>
                    </div>
                </div>
            </div>
            <Post />
        </div>
    )
}

export default Profile