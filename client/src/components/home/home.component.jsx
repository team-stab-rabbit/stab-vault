import React from 'react'
import { Link, useParams } from 'react-router-dom';

import './home.style.css'

const Home = ({ loggedInUser }) => (
    <div className="home__container">
        { loggedInUser ? LoggedIn(loggedInUser) : NotLoggedIn() }
    </div>

)

// TODO: Add current path the loggedInUser and display as text
// TODO: Need current path to pass to travel
const LoggedIn = (loggedInUser) => (
    <>
        <Link to="/view-path">Travel {loggedInUser} path</Link>
        <Link to="/my-paths">My paths</Link>
        <Link to="/all-paths">All paths</Link>
        <Link to="/discover">Discover new path</Link>
        <Link to="/edit-path">Forge new path</Link>
    </>
)


const NotLoggedIn = () => (
    <>
        <Link to="/all-paths">See paths</Link>
        <Link to="/discover">Discover your path</Link>
        <Link to="/edit-path">Forge own path</Link>
    </>
)

export default Home