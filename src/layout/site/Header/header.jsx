
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Header = () => {
return (
    <nav>
        <div className="nav__left">
            <h1>Selling</h1><span>.</span>
            </div>
            <div className="nav__right">

            <i class="fa-solid fa-bars"></i>
                <ul>
                    <li><Link to={''}>Home</Link></li>
                    <li><Link to={'basket'}>Basket</Link></li>
                    <li><Link to={'admin/add'}>Add</Link>
                    </li>
                    <li>About Us</li>
                    <li>Special</li>
                    <li>Contact Us</li>
                </ul>
            </div>
    </nav>
)
}

export default Header
                            