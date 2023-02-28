'use client'

import Link from 'next/link'
import Image from 'next/image'
import profileIcon from '../ProfileIcon.svg'
import searchIcon from '../SearchIcon.svg'
import { usePathname } from 'next/navigation'

const liStyle = 'p-2'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center p-3 border">
      <h1 className="logo font-black text-6xl">Gifter</h1>
      <ul className="flex items-center">
        {/* TODO: change pathname to '/'*/}
        {pathname !== '/dupa' ? (
          <li className={liStyle}>
            <Link href="/">
              <Image src={searchIcon} alt="profile icon" />
            </Link>
          </li>
        ) : null}
        <li className={liStyle}>
          <Link href="/profile">
            <Image src={profileIcon} alt="profile icon" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
