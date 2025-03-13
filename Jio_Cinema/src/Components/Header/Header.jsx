import React from 'react'
import './header.css'
import JClogo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import { ChevronDown, Search, Mic, User } from 'lucide-react';


const Header = () => {


    return (
        <>
            <header className="header">

                <nav className='navigation'>
                    <div className='logo'>
                        <img src={JClogo} alt='JCLOGO' />
                        <div className='premium'> <img src={crown} alt="crown" />
                            <p>Go Premium</p>
                        </div>
                    </div>

                    <ul className='navLinks'>
                        <li className='link'>Home</li>
                        <li className='link'>Sports</li>
                        <li className='link'>Movies</li>
                        <li className='link'>TV Shows</li>
                        <li className='link'>More </li><ChevronDown />
                    </ul>
                </nav>

                <div className='search'>
                    < div className='searchBox'>
                        <Search size={18} className='header-icon'/> 
                        <input type="text" placeholder='Movies, Shows and more' />
                         <Mic size={22} className='header-icon' />
                    </div>

                    <div className='user'>
                        <User size={30} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header