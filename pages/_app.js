import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {

    const gtmId = process.env.NEXT_PUBLIC_GTM_ID
    
    const tagManagerArgs = {
        gtmId
    }
    useEffect(() => {
        TagManager.initialize(tagManagerArgs)
    }, [])
    

    return <Component {...pageProps} />
  }