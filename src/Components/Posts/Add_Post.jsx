import React from 'react'
import './Add_Post.css'
import img1 from './img.png'
import img2 from './map.png'
import img3 from './friend.png'

const Add_Post = () => {
    return (
        <div className="add_posts">
            <div className="add_posts_con">
                <div className="add_posts_top">
                    <img className='img' src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <input type="text" placeholder="What's on your mind Hemanth ?" />
                </div>
                <div className='divider'></div>
                <div className="add_posts_bottom">
                    <div className="apbl">
                        <div>
                            <img src={img1} alt="" />
                            <span>Add Image</span>
                        </div>
                        <div>
                            <img src={img2} alt="" />
                            <span>Add Place</span>
                        </div>
                        <div>
                            <img src={img3} alt="" />
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="apbr">
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_Post