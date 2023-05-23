import Layout from "../src/components/layout/Layout"
import HeadTitle from "../src/components/reusable/HeadTitle"
import DetailAbout from "../src/components/AboutPage/DetailAbout"
import MapsAbout from "../src/components/AboutPage/MapsAbout"
import VerseMark from "../src/components/reusable/VerseMark"
import ComingEvents from "../src/components/reusable/ComingEvents"

import getEventsData from "../src/lib/global/get-events-data"

export default function about({ upcomingEvents }) {
  return (
    <Layout title='About | New Jerusalem Ministry' content='New Jerusalem Ministry Official Website | Powered by WeekGenz'>
      <HeadTitle 
        headKing="about jerusalem" 
        headCont="That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved." 
        headVerse="romans 10 : 9" 
        headClass="superMini"
      />
      <DetailAbout/>
      <MapsAbout/>
      <VerseMark 
        verseChap='ephesians 2 : 10' 
        verseCont='For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.'
      />
      <ComingEvents eventsDatas={upcomingEvents}/>
    </Layout>
  )
}

export async function getStaticProps(){
  const upcomingEvents = await getEventsData();

  return{
    props: {
      upcomingEvents
    },
    revalidate: 10,
  };
}
