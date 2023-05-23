import Image from "next/image"
import moment from 'moment/moment';

export default function ComingEvents({ eventsDatas }) {
  return (
    <section className='comingEvents'>
      <div className='comingTitle'>
        <h1>Upcoming Events</h1>
      </div>
      <div className='comingGrid'>
        {eventsDatas.upcomingEvents.map((upevent, index) => index < 1 && (
          <div className='comingCont' key={index}>
          <div className="comeImg">
            <Image src={upevent.eventsBackground.url} objectFit="cover" layout="fill" alt="" className="bg-top"/>
          </div>
          <div className='comeFloat'>
            <div className='floatTitle'>
              <h1>{upevent.eventsTitle}</h1>
            </div>
            <div className='floatDate'>
              <h1>{moment(upevent.eventsDate).format('LL')}</h1>
            </div>
            <div className='floatTime'>
              <h1>{moment(upevent.eventsDate).format('LT')}</h1>
            </div>
            <div className='floatAddress'>
              <h1>{upevent.eventsLocation}</h1>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}
