import Image from "next/image"

export default function YouthHome({ youthData }) {
  return (
    <section className='youthHome'>
        <div className='youthHomeWrap'>
            <div className='youthText'>
                <div className='youthDesc'>
                    <div className='youthJoin'>
                        <h1>Join Us</h1>
                    </div>
                    <div className='youthTitle'>
                        <h1>{ youthData.title }</h1>
                    </div>
                    <div className='youthSub'>
                        <h1>{ youthData.subtitle }</h1>
                    </div>
                    <div className='youthDate'>
                        <h1>{ youthData.manualDate }</h1>
                    </div>
                    <div className='youthAddress'>
                        <h1>{ youthData.address }</h1>
                    </div>
                </div>
            </div>
            <div className='youthImage'>
                <div className='youthImg'>
                    <Image src={ youthData.storyPortrait.url } objectFit="cover" layout="fill" alt="" className="bg-top"/>
                </div>
            </div>
        </div>
    </section>
  )
}
