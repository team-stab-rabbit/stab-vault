import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import useComponentVisible from '../../hooks/useComponentVisible'

import './nav-drop-down.style.css'


const NavDropDown = ({setLoggedInUser}) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    return (
        <div ref={ref} onClick={() => setIsComponentVisible(!isComponentVisible)}>
            <button className="nav-drop-down__btn"  >
                <i className="fas fa-user-astronaut fa-3x" />
            </button>
            <div className="nav-drop-down__modal" >
                { isComponentVisible && <Links setLoggedInUser={setLoggedInUser}/> }
            </div>
        </div>
    )
}

 
const Links = ({setLoggedInUser}) => {
    const history = useHistory();    

    const logout = (e) => {
        e.preventDefault()
        fetch('/api/logout').then(() => {
            setLoggedInUser('');
            history.push('/');
        });
    }

    return (
        <>
            <Link to="/" className="nav-drop-down__option">Home</Link>
            <Link to="/" className="nav-drop-down__option">My settings</Link>
            <a href='' onClick={logout} className="nav-drop-down__option">Logout</a>
        </>
    )

}



export default NavDropDown