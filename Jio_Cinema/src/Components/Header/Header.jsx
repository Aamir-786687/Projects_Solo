import React from 'react'
import './header.css'
import JClogo from '../../assets/jc_logo_v2.svg'

const Header = () => {
    return (
        <>
            <header className="header">

                <nav className='navigation'>
                    <div className='logo'>
                        <img src={JClogo} alt='JCLOGO' />
                        <div className='premium'>Go Premium</div>
                    </div>
                </nav>

                <div className='search'>
                </div>
            </header>
        </>
    )
}

export default Header