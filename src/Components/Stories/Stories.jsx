import React from 'react'
import './Stories.css'

const Stories = () => {

    const stories = [
        {
            id: 1,
            user_name: "Jhon Doe",
            img: "https://images.pexels.com/photos/3379257/pexels-photo-3379257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, {
            id: 2,
            user_name: "Ravi",
            img: "https://images.pexels.com/photos/2170473/pexels-photo-2170473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 3,
            user_name: "Reena",
            img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            user_name: "Neha",
            img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            user_name: "Jhon Doe",
            img: "https://images.pexels.com/photos/3379257/pexels-photo-3379257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, {
            id: 6,
            user_name: "Ravi",
            img: "https://images.pexels.com/photos/2170473/pexels-photo-2170473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 7,
            user_name: "Reena",
            img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
        <div className="stories">
            <div className="stories_con">
                <div className='user_story'>
                    <img src="https://images.pexels.com/photos/20051870/pexels-photo-20051870/free-photo-of-a-man-leaning-against-a-wall-in-a-white-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <span>My Story</span>
                    <div className="add_story"><i className="fa-solid fa-plus" style={{ color: "white" }}></i></div>
                </div>

                {stories.map(story => (<div key={story.id} className='story'>
                    <img src={story.img} alt="" />
                    <span>{story.user_name}</span>
                </div>))}

            </div>
        </div>
    )
}

export default Stories