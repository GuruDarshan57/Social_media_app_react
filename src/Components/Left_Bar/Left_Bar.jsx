import React, { useContext } from 'react'
import './Leftbar.css'
import img1 from './Assets/1.png'
import img2 from './Assets/2.png'
import img3 from './Assets/3.png'
import img4 from './Assets/4.png'
import img5 from './Assets/5.png'
import img6 from './Assets/6.png'
import img7 from './Assets/7.png'
import img8 from './Assets/8.png'
import img9 from './Assets/9.png'
import img10 from './Assets/10.png'
import img11 from './Assets/11.png'
import img12 from './Assets/12.png'
import img13 from './Assets/13.png'
import { Theme } from '../../Contexts/Mode'
const Left_Bar = () => {
    const { mode } = useContext(Theme)
    return (
        <div className={`leftbar ${mode}`}>
            <div className="leftbar_container">
                <div className="leftbar_menu">
                    <div className="leftbar_item">
                        <img style={{ borderRadius: "100%" }} src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Hemanth</span>
                    </div>
                    <div className="leftbar_item">
                        <img src={img1} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="leftbar_item">
                        <img src={img2} alt="" />
                        <span>Groups</span></div>
                    <div className="leftbar_item">
                        <img src={img3} alt="" />
                        <span>Marketplace</span></div>
                    <div className="leftbar_item">
                        <img src={img4} alt="" />
                        <span>Watch</span></div>
                    <div className="leftbar_item">
                        <img src={img5} alt="" />
                        <span>Memories</span></div>
                </div>
                <div className="leftbar_menu">
                    <p>Your Shortcuts</p>
                    <div className="leftbar_item">
                        <img src={img6} alt="" />
                        <span>Events</span></div>
                    <div className="leftbar_item">
                        <img src={img7} alt="" />
                        <span>Gaming</span></div>
                    <div className="leftbar_item">
                        <img src={img8} alt="" />
                        <span>Gallery</span></div>
                    <div className="leftbar_item">
                        <img src={img9} alt="" />
                        <span>Videos</span></div>
                    <div className="leftbar_item">
                        <img src={img10} alt="" />
                        <span>Messages</span></div>
                </div>
                <div className="leftbar_menu">
                    <p>Others</p>
                    <div className="leftbar_item">
                        <img src={img11} alt="" />
                        <span>Fundraiser</span></div>
                    <div className="leftbar_item">
                        <img src={img12} alt="" />
                        <span>Tutorials</span></div>
                    <div className="leftbar_item">
                        <img src={img13} alt="" />
                        <span>Courses</span></div>
                </div>
            </div>
        </div>
    )
}

export default Left_Bar