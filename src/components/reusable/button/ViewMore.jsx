import Link from "next/link"

export default function ViewMore() {
  return (
    <div className='cardMore'>
        <Link href='/devotion'>
          <a className='viewMore'>
              View More
          </a>
        </Link>
    </div>
  )
}
