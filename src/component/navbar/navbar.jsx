import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./navbar.css"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Utama = () =>{
    const [Mobile, setMobile] = useState(false)

    return(
        <nav className="navbar">
                <h3 className="logo">Naufal.</h3>

                <ul className={Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Beranda</NavLink></li>
                    <li><NavLink to='/tentangsaya' className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Tentang Saya</NavLink></li>
                    <li><NavLink to='/karya' className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Karya</NavLink></li>
                    <li><NavLink to='/kontak' className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Kontak</NavLink></li>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                    {Mobile? <ImCross color="#10f5cc"/> : <FaBars color="#10f5cc"/>}
                </button>           
        </nav>
    )
}

export default Utama