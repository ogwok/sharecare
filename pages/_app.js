import '../styles/globals.css'
import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import { SessionProvider } from "next-auth/react"


function App({ Component, pageProps, session }) {
  const [color, setColor] = useState('blue')
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setColor('red'), [])
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
    </Layout>
  </SessionProvider>
  )
}

export default App  
