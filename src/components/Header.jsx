import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectUserName } from '../app/reducer/userSlice'

import loGoPPTN from '../assets/images/logopptn.svg'

const Header = ({handleSignOut}) => {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);

    const handleClickBars = () => {
        let Hamburger = document.querySelector('#nav-hamburger')
        Hamburger.classList.toggle('open')
        document.querySelector('#navbar-mobile').classList.toggle('active')
    }

    return (
        <>
            <header id="header" className="px-lg-5 px-md-4 px-sm-3 px-2">
                <div className="d-flex justify-content-between align-items-center mx-auto w-100">
                    <div className="logo">
                        <img src={loGoPPTN} alt="Logo Plearnpattana School" />
                    </div>
                    <nav id="navbar" className="">
                        <ul>{userName ? <li><NavLink exact activeClassName="active" to="/" >Home</NavLink></li> : ''}
                            <li><NavLink exact activeClassName="active" to="/dashboard" >Dashboard</NavLink></li>
                            <li className="dropdown"><NavLink activeClassName="active" to="/account" >{userName}</NavLink>
                                <ul>
                                    <li><Link to="/account">My account</Link></li>
                                    <li onClick={handleSignOut}><Link to="/">Sign out</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="hamburger-bar" onClick={handleClickBars}>
                        <div id="nav-hamburger">
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </header>
            <nav id="navbar-mobile" className="navbar-mobile-toggle">
                <ul>{userName ? <li><NavLink exact activeClassName="active" to="/" >Home</NavLink></li> : ''}
                    <li><NavLink exact activeClassName="active" to="/dashboard" >Dashboard</NavLink></li>
                    <li className="dropdown"><NavLink activeClassName="active" to="/account" >{userName}</NavLink>
                        <ul>
                            <li><Link to="/account">My account</Link></li>
                            <li onClick={handleSignOut}><Link to="/">Sign out</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
        
    )
}

export default Header