// import cardVerses from '../../../lib/local/cardVerse.json';
import CardSquare from './CardSquare';
import PrevNext from '../button/PrevNext';
import moment from 'moment/moment';

export default function CardShowAll({ devotionList, page, pageDevInfo }) {
  return (
    <>
      <section className='cardShowHigh'>
        <div className='cardGrid'>
          {/* Loop Card */}
          {devotionList.devotions.map((devotion) => {
            if (
              moment(devotion.datePublished).isSame(moment()) ||
              moment(devotion.datePublished).isBefore(moment())
            ) {
              return (
                <CardSquare
                  key={devotion.id}
                  date={devotion.datePublished}
                  title={devotion.title}
                  content={devotion.content}
                  slug={'/daily/' + devotion.slug}
                  butText={'Read More'}
                />
              );
            }
          })}
          ;{/* End Loop Card */}
        </div>
        <PrevNext page={page} pageDevInfo={pageDevInfo} />
      </section>
    </>
  );
}
