"use client"
import Link from "next/link"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useEffect } from "react";
function Header({lang}) {
  useEffect(() => {
    localStorage.setItem('lang',lang)
  },[lang])
  return (
    <header className="header-el fixed top-0 z-10 w-full shadow-lg bg-primary">
      <div className="flex items-center py-[1rem] wide gap-2">
        {/* logo */}
        <Link href={`/`} className="head-link w-[3rem] h-[3rem] text-[1.2rem] grid place-items-center rounded-[8px] bg-hight-light text-white ml-2">CV</Link>

        <Link href={`/blogs`} className="head-link">Blogs</Link>
        <Link href={`/contact`} className="head-link">Contact</Link>
        <Link href={`/profile`} className="head-link">Profile</Link>

        {/* dark mode */}
        <div className="ml-auto switcher-btn">
          <ThemeSwitcher/>
        </div>
        {/* language */}
        <div className="flex gap-1 ml-[1rem]">
          <Link href={'/vi'} className={`lang ${lang === 'vi' && 'text-hight-light'}`}>VI</Link>
          <span>|</span>
          <Link href={'/en'} className={`lang ${lang === 'en' && 'text-hight-light'}`}>EN</Link>
          <span>|</span>
          <Link href={'/ja'} className={`lang ${lang === 'ja' && 'text-hight-light'}`}>JA</Link>

        </div>
      </div>
    </header>

  )
}

export default Header