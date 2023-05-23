import Layout from "../src/components/layout/Layout"
import HeadTitle from "../src/components/reusable/HeadTitle"
import HeaderInformation from "../src/components/InformationPage/HeaderInformation"
import CardInfoAll from "../src/components/reusable/card/CardInfoAll"
import VerseMark from "../src/components/reusable/VerseMark"
import ComingEvents from "../src/components/reusable/ComingEvents"

import getAllInfo from "../src/lib/global/get-all-information"
import getEventsData from "../src/lib/global/get-events-data"

export default function information({ informations, upcomingEvents }) {
  return (
    <Layout title='Information | New Jerusalem Ministry' content='New Jerusalem Ministry Official Information | Powered by WeekGenz'>
      <HeadTitle 
        headKing="information" 
        headCont="Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost." 
        headVerse="acts 2 : 38" 
        headClass="superMedium"
      />
      <HeaderInformation/>
      <CardInfoAll informationsList={informations}/>
      <VerseMark 
        verseChap='john 1 : 1-2' 
        verseCont='In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God.'
      />
      <ComingEvents eventsDatas={upcomingEvents}/>
    </Layout>
  )
}

export async function getStaticProps(){
  
  const informations = await getAllInfo();
  const upcomingEvents = await getEventsData();


  
  return{
    props: {
      informations,
      upcomingEvents
    },
    revalidate: 10,
  };
}
