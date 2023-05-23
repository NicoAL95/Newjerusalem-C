
import Layout from "../src/components/layout/Layout"

import HeadTitle from "../src/components/reusable/HeadTitle"
import ServiceHome from "../src/components/HomePage/ServiceHome"
import DailyHighlight from "../src/components/reusable/DailyHighlight"
import CardShowHigh from "../src/components/reusable/card/CardShowHigh"
import PhotoHome from "../src/components/HomePage/PhotoHome"
import YouthHome from "../src/components/HomePage/YouthHome"
import VerseMark from "../src/components/reusable/VerseMark"
import ComingEvents from "../src/components/reusable/ComingEvents"

import getHomeData from "../src/lib/global/get-home-data"
import getAllDevotions from "../src/lib/global/get-all-devotions"
import getEventsData from "../src/lib/global/get-events-data"

export default function Home({ services, serviceBackgrounds, allDevotions, longBackgrounds, goldCommunities, upcomingEvents }) {
  return (
    <Layout title='New Jerusalem Ministry' content='New Jerusalem Ministry Official Website | Powered by WeekGenz'>
      <HeadTitle 
        headKing="King Of Glory" 
        headCont="In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him." 
        headVerse="1 John 4 : 9" 
        headClass="superTitle"
      />
      <ServiceHome dataService={services} bgService={serviceBackgrounds[0]}/>
      <DailyHighlight dailyInp={allDevotions}/>
      <CardShowHigh devHighs={allDevotions}/>
      <PhotoHome longImg={longBackgrounds[0]}/>
      <YouthHome youthData={goldCommunities[0]}/>
      <VerseMark 
        verseChap='mark 10 : 27' 
        verseCont='And Jesus looking upon them saith, With men it is impossible, but not with God: for with God all things are possible.'
      />
      <ComingEvents eventsDatas={upcomingEvents}/>
    </Layout>
    )
}

export async function getStaticProps(){
  const {services, serviceBackgrounds, longBackgrounds, goldCommunities} = await getHomeData();
  const upcomingEvents = await getEventsData();
  const {allDevotions} = await getAllDevotions();

  return {
    props: {
      services,
      serviceBackgrounds,
      allDevotions,
      longBackgrounds,
      goldCommunities,
      upcomingEvents
    },
    revalidate: 10,
  };
}