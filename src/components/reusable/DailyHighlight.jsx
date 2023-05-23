import Link from 'next/link';
import moment from 'moment/moment';
import ReactMarkdown from 'react-markdown';

export default function DailyHighlight({ dailyInp }) {
  let countLength = 0;
  return (
    <section className='dailyHighlight'>
      {dailyInp.map((devotion) => {
        if (
          moment(devotion.datePublished).isSame(moment()) ||
          moment(devotion.datePublished).isBefore(moment())
        ) {
          if (countLength === 0) {
            countLength++;
            return (
              <div key={countLength}>
                <div className='devTitle'>
                  <h1>Daily Devotion</h1>
                </div>
                <div className='devDate'>
                  <h1>{moment(devotion.datePublished).format('LL')}</h1>
                </div>
                <div className='devHighTitle'>
                  <h1>{devotion.title}</h1>
                </div>
                <div className='devHighCont'>
                  <ReactMarkdown 
                      // eslint-disable-next-line react/no-children-prop
                      children={devotion.content.substring(0, 330)}
                    />
                </div>
                <div className='devHighButton'>
                  <Link href={`/daily/${devotion.slug}`}>
                    <a className='textButton mx-auto'>Read More</a>
                  </Link>
                </div>
              </div>
            );
          }
        }
      })}
    </section>
  );
}
