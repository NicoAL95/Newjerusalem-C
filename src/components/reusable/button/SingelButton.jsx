export default function SingelButton({ name, link }) {
  return (
    <a href={ link } className='viewMore'>
            { name }
    </a>
  )
}
