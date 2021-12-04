import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
           {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                <Link to="/dashboard" className="nav-link">Dashboard KPU</Link>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                
                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown">
                
                
                </li>
                <li className="nav-item">
                <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i className="fas fa-expand-arrows-alt" />
                </a>
                </li>
            </ul>
            </nav>
            {/* /.navbar */}

        </div>
    )
}

export default Header
