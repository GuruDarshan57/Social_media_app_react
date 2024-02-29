import React, { useContext } from 'react'
import './Home.css'
import { Theme } from '../../Contexts/Mode'
import Stories from '../../Components/Stories/Stories'
import Add_Post from '../../Components/Posts/Add_Post'
import Post from '../../Components/Post/Post'
const Home = () => {
    const { mode } = useContext(Theme)
    return (
        <div className={`home ${mode}`}>
            <Stories />
            <Add_Post />
            <Post />
        </div>
    )
}

export default Home