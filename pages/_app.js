import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 2500
    })
  })

  return <Component {...pageProps} />
}

export default MyApp
