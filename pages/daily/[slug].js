import Layout from "../../src/components/layout/Layout"
import HeadTitle from "../../src/components/reusable/HeadTitle"
import CardShowHigh from "../../src/components/reusable/card/CardShowHigh"
import ContentDaily from "../../src/components/DailyPage/ContentDaily"
import VerseMark from "../../src/components/reusable/VerseMark"
import ComingEvents from "../../src/components/reusable/ComingEvents"
import getAllSlugs from "../../src/lib/global/get-all-slug"
import { getDevotion } from "../../src/lib/global/get-devotion-with-slug"


import getEventsData from "../../src/lib/global/get-events-data"
import getAllDevotions from "../../src/lib/global/get-all-devotions"

import moment from 'moment/moment';

export default function daily({devotion, allDevotions, upcomingEvents}) {

  // wait data from server
  if (!devotion || !allDevotions || !upcomingEvents) {
    return <p className='font-geoReg'>Loading...</p>;
  }

  return (
    <Layout title={`${'Daily Devotion ' + moment(devotion.datePublished).format('dddd D MMMM YYYY')}`} content={`${devotion.title} - New Jerusalem Ministry | Powered by WeekGenz`}>
    <HeadTitle 
        headKing="Daily Devotion" 
        headCont="But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear:" 
        headVerse="1 peter 3 : 15" 
        headClass="superMini"
      />
      <ContentDaily detailDev={devotion}/>
      <CardShowHigh devHighs={allDevotions}/>
      <VerseMark 
        verseChap='john 11 : 25' 
        verseCont='Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:'
      />
      <ComingEvents eventsDatas={upcomingEvents}/>
    </Layout>
  )
}


export async function getStaticProps({ params }) {
    const slug = params.slug;
    const {devotion} = await getDevotion({slug});
    const upcomingEvents = await getEventsData();
    const {allDevotions} = await getAllDevotions();
  
    if (devotion == null) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        devotion,
        allDevotions,
        upcomingEvents
      },
      // - At most once every 60 seconds
      revalidate: 60, // In seconds
    };
  }
  
  export async function getStaticPaths() {
    const { devotions } = await getAllSlugs();
    // Get the paths we want to pre-render based on post
    const paths = devotions.map((devotion) => ({
      params: { slug: devotion.slug },
    }));
    return { paths, fallback: true };
  }
  
