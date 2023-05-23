import Link from "next/link"
import moment from 'moment/moment';
import ReactMarkdown from 'react-markdown';

export default function CardSquare({ classCard, marginHidden, date, title, content, classInput, slug, butText }) {
  return (
    <div className={`${classInput} cardSquare`}>
        <div className='cardDevDate'>
        <h1 className={`${classCard}`}>{moment(date).format('LL')}</h1>
        </div>
        <div className={`${marginHidden} cardDevTitle`}>
        <h1>{ title }</h1>
        </div>
        <div className='cardDevDesc'>
          <ReactMarkdown 
                // eslint-disable-next-line react/no-children-prop
                children={content.substring(0, 225)}
                components={{
                    p: ({ children }) => <span className='cardDevDesc'>{children}</span>,
                    em: ({ children }) => <span className='cardDevDesc'>{children}</span>,
                    strong: ({ children }) => <span className='cardDevDesc'>{children}</span>
                }}
          />
        </div>
        <div className='cardDevButton'>
          <Link href={`${slug}`}>
            <a className='textButtonWhite'>{butText}</a>
          </Link>
        </div>
    </div>
  )
}
