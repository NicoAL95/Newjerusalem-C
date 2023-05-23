export default function HeadTitle({ headKing, headCont, headVerse, headClass }) {
  return (
    <section className='headTitle'>
        <div className='headTitleWrapper'>
            <div className='subName'>
                <h1>New Jerusalem Ministry</h1>
            </div>
            <div className='subTitle'>
                <h6>christ community</h6>
                <h6 className='subHero'>sunday services</h6>
                <h6>youth services</h6>
            </div>
            <div className={ headClass }>
                <h1>{ headKing }</h1>
            </div>
            <div className='verseTitle'>
                <div className='verseContent'>
                    <h1>{ headCont }</h1>
                </div>
                <div className='verseChapter'>
                    <h1>- { headVerse } -</h1>
                </div>
            </div>
        </div>
    </section>
  )
}
