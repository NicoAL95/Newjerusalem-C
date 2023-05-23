import Image from "next/image"
import moment from 'moment/moment';


export default function ServiceHome({ dataService, bgService }) {
  return (
    <section className='serviceHome' id='serviceHome'>
      <div className='serviceBackground'>

        {/* Background Image */}
        <Image src={bgService.serviceBanner.url} objectFit='cover' layout='fill' alt='' className="grayscale"/>
        {/* End Background Image */}

        <div className='serviceWrapper'>
          <div className='serviceSquare'>
            <ul>
              {dataService.map((service, index) => index < 3 && (
                <li className='serSect' key={index}>
                  <div className='serDate'>
                    <h1>{moment(service.times).format('dddd LL | LT')}</h1>
                  </div>
                  <div className='serPastor'>
                    <h1>{ service.speaker }</h1>
                  </div>
                  <div className='serTitle'>
                    <h1>{ service.theme }</h1>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='serviceTitle'>
            <div className='serviceWords'>
              <h1>Our</h1>
              <h1>Services</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
