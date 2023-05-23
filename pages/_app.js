import '../styles/globals.css'
import '../styles/scss/custom.scss'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color='#FFE07B'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        
      />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
