import Image from "next/image"
import { useRouter } from 'next/router';
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  // useRouter
  const router = useRouter();

  // useState Hooks
  const [showNavbar, setShowNavbar] = useState(false);
  const [navScroll, setShadow] = useState('');

  // Navbar Border Animation
  const listenScrollEvent = () => {
    window.scrollY > 50 ? setShadow('borderOn') : setShadow('') ;
  }

  // useEffects Hooks
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    }
  }, []);

  // Close navbar outside
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowNavbar(false)
      }
    }
    document.addEventListener('mousedown', handler);
    return() => {
      document.removeEventListener('mousedown', handler);
    }
  });

  return (
    <div className={`${navScroll} navbar`}>
      <div className='navLogo'>
        <Image src='/libraries/img/png/icons/logo.png' objectFit="contain" layout="fill" alt=''/>
      </div>
      <div className={`${showNavbar ? 'navOn' : 'navOff'} navContent`} ref={menuRef}>
        <ul className='navFlex'>
          <li className='navItem'>
            <div className='navTop'>
              <div className='navTitle'>
                <h1>New Jerusalem Ministry</h1>
              </div>
              <div className='navClose'>
                <button onClick={() => setShowNavbar(false)}>
                    <Image src='/libraries/img/svg/close.svg' objectFit="contain" layout="fill" alt=''/>
                </button>
              </div>
            </div>
          </li>
          <li className='navItem'>
            <Link href="/">
              <span className={`${router.pathname === '/' ? 'active' : '' } navLink`}>Home</span>
            </Link>
          </li>
          <li className='navItem'>
            <Link href="/about">
              <span className={`${router.pathname === '/about' ? 'active' : '' } navLink`}>
                About Us
              </span>
            </Link>
          </li>
          <li  className='navItem'>
            <Link href="/devotion">
              <span className={`${router.pathname === '/devotion' || router.pathname === '/daily' ? 'active' : '' } navLink`}>
                Devotion
              </span>
            </Link>
          </li>
          <li  className='navItem'>
            <Link href="/information">
              <span className={`${router.pathname === '/information' ? 'active' : '' } navLink`}>
                Information
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='navText'>
        <h1>New Jerusalem Ministry</h1>
      </div>
      <div className='navBurger'>
        <button onClick={() => setShowNavbar(true)}>
          <Image src='/libraries/img/svg/burger.svg' objectFit="contain" layout="fill" alt=''/>
        </button>
      </div>
    </div>
  )
}
