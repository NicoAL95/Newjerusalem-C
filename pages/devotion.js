import Layout from '../src/components/layout/Layout';
import HeadTitle from '../src/components/reusable/HeadTitle';
import DailyHighlight from '../src/components/reusable/DailyHighlight';
import VerseMark from '../src/components/reusable/VerseMark';
import ComingEvents from '../src/components/reusable/ComingEvents';

import CardShowAll from '../src/components/reusable/card/CardShowAll';

import getAllDevotions from '../src/lib/global/get-all-devotions';
import getEventsData from '../src/lib/global/get-events-data';
import getPaginationDevotions from '../src/lib/global/get-devotion-pagination';
import getDevotionInfoData from '../src/lib/global/get-count-devotion';

export default function devotion({
  allDevotions,
  devotions,
  upcomingEvents,
  page,
  devotionInfo,
}) {
  return (
    <Layout
      title='Devotion | New Jerusalem Ministry'
      content='New Jerusalem Ministry Official Devotion | Powered by WeekGenz'
    >
      <HeadTitle
        headKing='Holy Devotion'
        headCont='For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.'
        headVerse='John 3 : 16'
        headClass='superTitle'
      />
      <DailyHighlight dailyInp={allDevotions} />
      <CardShowAll
        devotionList={devotions}
        page={page}
        pageDevInfo={devotionInfo}
      />
      <VerseMark
        verseChap='luke 18 : 27'
        verseCont='And he said, The things which are impossible with men are possible with God.'
      />
      <ComingEvents eventsDatas={upcomingEvents} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // logic pagination
  const totalItems = 9;
  const first = totalItems;
  const skip = Math.abs(page) === 1 ? 0 : (Number(page) - 1) * totalItems;

  // const posts = await getPosts();
  const {allDevotions} = await getAllDevotions();
  const devotions = await getPaginationDevotions(first, skip);
  const upcomingEvents = await getEventsData();
  const { devotionInfo } = await getDevotionInfoData(first, skip);

  return {
    props: {
      // posts,
      allDevotions,
      devotions,
      upcomingEvents,
      devotionInfo,
      page,
    },
  };
}
