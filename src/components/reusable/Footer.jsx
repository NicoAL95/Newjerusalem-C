import Image from "next/image"
import Link from "next/link";

import { GrFacebookOption, GrYoutube, GrInstagram } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footLogo'>
        <Image src='/libraries/img/png/icons/logo-w.png' objectFit="contain" layout="fill" alt=''/>
      </div>
      <div className="footVerse">
        <h1>In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him.</h1>
      </div>
      <div className='footLinks'>
        <Link href={'/'}><a className='footLink'>Home</a></Link>
        <Link href={'/about'}><a className='footLink'>About Us</a></Link>
        <Link href={'/devotion'}><a className='footLink'>Devotion</a></Link>
        <Link href={'/information'}><a className='footLink'>Information</a></Link>
      </div>
      <div className='footSos'>
        <a href="https://www.facebook.com/gbiyerusalembaru/" className='footSosItem'>
          <GrFacebookOption/>
        </a>
        <a href="https://www.instagram.com/gbiyerusalembaru/" className='footSosItem'>
          <GrInstagram/>
        </a>
        <a href="https://www.youtube.com/channel/UCsrDdmuK0RHYTzfGuhZpCAA" className='footSosItem'>
          <GrYoutube/>
        </a>
      </div>
      <div className='footAddress'>
        <h1>Ruko Gading River View Blok H Unit 2, Jl. MOI Gate A, Kelapa Gading</h1>
      </div>
      <div className="footMark">
        <a href="https://www.weekgenz.com/">
          <h1>© 2022 All rights reserved | Made with ❣️ by WeekGenz</h1>
        </a>
      </div>
    </footer>
  )
}
