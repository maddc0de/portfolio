import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

import { styles } from '../styles'
import { logo } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")

  const handleLogoClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex item-center gap-2" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className="w-40 h-9 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id} 
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px]` }
              onClick={() => (setActive(nav.title))}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar