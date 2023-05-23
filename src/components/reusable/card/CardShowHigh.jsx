import CardSquare from './CardSquare';
import ViewMore from '../button/ViewMore';

import moment from 'moment/moment';

export default function CardShowHigh({ devHighs }) {
  let countLength = 0;
  return (
    <section className='cardShowHigh'>
      <div className='cardGrid'>
        {/* Loop Card */}
          {devHighs.map(devHigh => {
                if(moment(devHigh.datePublished).isSame(moment()) || moment(devHigh.datePublished).isBefore(moment())){
                  countLength++;
                  if(countLength <= 3){
                    return(
                      <CardSquare key={ devHigh.id } date={devHigh.datePublished} title={devHigh.title} content={devHigh.content} slug={'/daily/' + devHigh.slug} butText={'Read More'}/>
                    )
                  }
                }
              })}
        {/* End Loop Card */}
      </div>
      <ViewMore/>
    </section>
  )
}
