import Image from "next/image"

export default function PhotoHome({ longImg }) {
  return (
    <section className='photoHome'>
        <div className='photoHomePicture'>
            <Image src={ longImg.longBanner.url } objectFit="cover" layout="fill" alt="" className="bg-top"/>
        </div>
    </section>
  )
}
