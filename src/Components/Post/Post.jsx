import React, { useContext, useState } from 'react'
import './Post.css'
import { Theme } from '../../Contexts/Mode'
import { Link } from 'react-router-dom'
const Post = () => {
    const { Setusr, usr } = useContext(Theme)
    const posts = [{
        post_id: 1,
        user_id: 1,
        pro_img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        user_name: "Neha Shetty",
        post_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam impedit officiis accusamus unde inventore, aspernatur ipsa modi magni",
        post_img: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 12,
        comments: [{
            user_id: "Rhea Bhat",
            pro_img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
            comment: "Lorem lit.Quisquam impedit officiis accusamus "
        }, {
            user_id: "Nutan M",
            pro_img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            comment: "Lorem ipsum d modi magniLorem ipsum dolor sit amet consectetur adipisicing e"
        }, {
            user_id: "Gagan Shankar",
            pro_img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            comment: "Lorem ipsum dolor sit amet consectetur ipsa modi magniLorem ipsum dolor sit amet consectetur adipisicing elit.Quisusamus unde invent"
        }]
    },
    {
        post_id: 2,
        user_id: 2,
        pro_img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        user_name: "Ravi Kumar",
        post_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam impedit officiis accusamus unde inventore, aspernatur ipsa modi magni",
        post_img: "https://images.pexels.com/photos/691637/pexels-photo-691637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 10,
        comments: [{
            user_id: "Darshan R M",
            comment: "Lorem ipsum dolor sit amet consor sit amet consectetur adipisicing elit.Quisquam impedit officiis accusamus "
        }, {
            user_id: "Niveditha",
            pro_img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing epsum dolor sit amet consectetur adipisicing e"
        }, {
            user_id: "Radikha Mittal",
            pro_img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisqit.Quisquam impedit officiis accusamus unde invent"
        }]
    }, {
        post_id: 3,
        user_id: 3,
        pro_img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        user_name: "Rhea Chaudry",
        post_des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam impedit officiis accusamus unde inventore, aspernatur ipsa modi magni",
        post_img: "",
        likes: 100,
        comments: []
    }
    ]
    const [vc, setVc] = useState(0);
    return (
        <div className="post">
            <div className="post_con">
                {posts?.map((ele) => (
                    <div className="pi">
                        <div className="pinfo">
                            <div className="pinfol">
                                <img className='img' src={ele.pro_img} alt="" />
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <Link onClick={() => { Setusr(ele.user_id); console.log(usr) }} to={`/Profile/${ele.user_id}`} style={{ textDecoration: "none", color: "var(--color)" }}>{ele.user_name}</Link>
                                    <span>1 min ago</span>
                                </div>
                            </div>
                            <div className="pinfor">
                                <i className="fa-solid fa-ellipsis" style={{ color: "var(--color)" }}></i>
                            </div>
                        </div>
                        <div className="pdes">
                            <span>{ele.post_des}</span>
                        </div>
                        {ele.post_img ? <div className="pimage">
                            <img src={ele.post_img} alt="" />
                        </div> : ""}
                        <div className="puti">
                            <div>
                                <i class="fa-regular fa-heart" style={{ color: "var(--color)" }}></i>
                                <span>{ele.likes} Likes</span>
                            </div>
                            <div>
                                <i class="fa-regular fa-comments" style={{ color: "var(--color)" }} onClick={() => { setVc(vc === ele.user_id ? 0 : ele.user_id) }}></i>
                                <span>{ele.comments.length} Comments</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-share-nodes" style={{ color: "var(--color)" }}></i>
                                <span>Share</span>
                            </div>
                        </div>

                        {vc === ele.user_id ?
                            <div className="post_comment">
                                <div className="create_comment">
                                    <img className='img' src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                                    <input type="text" placeholder='Write a comment ....' />
                                    <button>Send</button>
                                </div>
                                <div className="pc">
                                    {ele.comments.map((el) => (
                                        <div className='pci'>
                                            <img className='img' src={el.pro_img} alt="" />
                                            <div>
                                                <p>{el.user_id}</p>
                                                <span>{el.comment}</span>
                                            </div>
                                            <span>1 Hour ago</span>
                                        </div>
                                    ))}
                                </div>
                            </div> : ""}

                    </div>))}
            </div>


        </div >
    )
}

export default Post