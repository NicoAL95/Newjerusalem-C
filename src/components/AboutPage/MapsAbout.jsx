import React from 'react'

export default function MapsAbout() {
  return (
    <section className='mapsAbout'>
        <div className='mapsTitle'>
            <h1>Our Location</h1>
        </div>
        <div className='mapsDesc'>
            <h1>Ruko Gading River View Blok H Unit 2, Jl. MOI Gate A, Kelapa Gading</h1>
        </div>
        <div className='mapsWrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3772.436207923672!2d106.88970735252992!3d-6.148850136672195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2840da4924013280!2sGBI%20Yerusalem%20Baru!5e0!3m2!1sid!2sid!4v1667360483865!5m2!1sid!2sid" width="full" height="full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}
