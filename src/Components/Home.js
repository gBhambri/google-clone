import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';
function Home() {
    return (
        <div className='home'>
           <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon></AppsIcon>
                    <Avatar></Avatar>
                </div>
           </div>
           <div className='home__body'>
                <img alt='logo' src='data:image/png;base64,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'></img>
                <div className='home__inputContainer'>
                    <Search hideButtons></Search>
                </div>
           </div>
           
        </div>
    )
}

export default Home
