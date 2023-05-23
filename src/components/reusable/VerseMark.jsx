export default function VerseMark({ verseChap, verseCont }) {
  return (
    <section className='verseMark'>
        <div className='verseGrid'>
            <div className='verseSpan'>
                <div className='verseHighChapter'>
                    <h1>- { verseChap } -</h1>
                </div>
                <div className='verseHighContent'>
                    <h1>
                    { verseCont }
                    </h1>
                </div>
            </div>
        </div>
    </section>
  )
}
