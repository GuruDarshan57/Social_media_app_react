import React, { useContext } from 'react'
import './Rightbar.css'
import { Theme } from '../../Contexts/Mode'
const Right_bar = () => {
    const { mode } = useContext(Theme)
    return (
        <div className={`rightbar ${mode}`}>
            <div className="rightbar_con">
                <div className="rightbar_suggestions">
                    <span style={{ color: "grey" }}>Suggestions For You</span>
                    <div className="rightbar_user">
                        <div className="rightbar_left">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Yashas Raj</span>
                        </div>
                        <div className="rightbar_right">
                            <button className='rightbar_follow'>Follow</button>
                            <button className='rightbar_dismiss'>Dismiss</button>
                        </div>
                    </div>
                    <div className="rightbar_user">
                        <div className="rightbar_left">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jeevan Kumar</span>
                        </div>
                        <div className="rightbar_right">
                            <button className='rightbar_follow'>Follow</button>
                            <button className='rightbar_dismiss'>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="rightbar_activities">
                    <span style={{ color: "grey" }}>Latest Activities</span>
                    <div className="rightbar_activitiy">
                        <div className="rightbar_al">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span><strong>Jane Doe</strong> changed their cover picture</span>
                        </div>
                        <div className="rightbar_ar">
                            <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="rightbar_activitiy">
                        <div className="rightbar_al">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span><strong>Reena</strong> changed their cover picture</span>
                        </div>
                        <div className="rightbar_ar">
                            <span>2 min ago</span>
                        </div>
                    </div>
                    <div className="rightbar_activitiy">
                        <div className="rightbar_al">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span><strong>Ravi</strong> changed their cover picture</span>
                        </div>
                        <div className="rightbar_ar">
                            <span>3 min ago</span>
                        </div>
                    </div>
                    <div className="rightbar_activitiy">
                        <div className="rightbar_al">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span><strong>Neha</strong> changed their cover picture</span>
                        </div>
                        <div className="rightbar_ar">
                            <span>3 min ago</span>
                        </div>
                    </div>
                </div>
                <div className="rightbar_friends">
                    <span style={{ color: "grey" }}>Online Friends</span>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="friend">
                        <div className="online" />
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>Jane Doe</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Right_bar