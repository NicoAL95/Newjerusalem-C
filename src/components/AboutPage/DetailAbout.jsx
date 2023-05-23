import Image from "next/image"

export default function DetailAbout() {
  return (
    <section className='detailAbout'>
        <div className='detailAboutTitle'>
            <h1>New Jerusalem</h1>
        </div>
        <div className='detailAboutDesc'>
            <h1>The New Jerusalem Indonesia Bethel Church is a family-friendly church based on the principles of the Holy Spirit and the GBI Confession of Faith</h1>
        </div>
        <div className='detailGrid'>
            <div className='detailGridCont'>
                <div className='detailGridFlex'>
                    <div className='detailGridName'>
                        <h1>Pdt. Trisna Wahyudi</h1>
                    </div>
                    <div className='detailGridRole'>
                        <h1>Church Pastor</h1>
                    </div>
                    <div className='detailGridDesc'>
                        <h1>Vitae vestibulum a, euismod aliquet vestibulum viverra elit ipsum, nisl. Amet, venenatis ut nisl amet, venenatis pellentesque id nisi, id. Lectus posuere nunc sollicitudin ac a leo nibh nulla. Odio diam, adipiscing egestas amet, ut ac. Sed ut ipsum, amet, iaculis viverra eu nulla. Adipiscing amet elementum sed est vulputate et vulputate nisi, tellus.
Eu rhoncus eu cursus nulla faucibus mauris tristique sit.</h1>
                    </div>
                </div>
            </div>
            <div className='detailGridImg'>
                <Image src='/libraries/img/jpg/about/pastor.jpg' objectFit="cover" layout="fill" alt="" className="bg-center"/>
            </div>
        </div>
    </section>
  )
}
