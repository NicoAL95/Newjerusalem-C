import Head from 'next/head';

import Navbar from "../reusable/Navbar"
import Footer from "../reusable/Footer"

export default function Layout({ title, content, children }) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta
            property='og:title'
            content={title}
            key={`WeekGenz ${title}`}
            />
            <meta name="description" content={content}></meta>
            <meta name="keywords" content="church, gbiyerusalembaru, weekgenz"></meta>
        </Head>

        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}
