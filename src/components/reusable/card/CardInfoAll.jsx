import CardSquare from "./CardSquare"

export default function CardInfoAll({ informationsList }) {
  return (
    <section className='cardShowHigh'>
        <div className='cardGrid'>
          {/* Loop Card */}
          {informationsList.informations.map((info) => (
            <CardSquare
                  key={info.id}
                  classCard={'hidden'}
                  marginHidden={'mt-[-15px]'}
                  date={info.datePublished}
                  title={info.title}
                  content={info.description}
                  slug={info.link}
                  butText={'View Form'}
                />
          ) 
          )}
          {/* End Loop Card */}
        </div>
      </section>
  )
}
