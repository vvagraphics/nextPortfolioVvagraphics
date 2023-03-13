import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import TabPrint from './components/TabPrint'
import TabDigital from './components/TabDigital'
import TabBranding from './components/TabBranding'
import TabUIUX from './components/TabUIUX'
import TabMotion from './components/TabMotion'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      
    {/* <div className='navsections'> */}
    <div>
      <TabPrint />
      <TabDigital />
      <TabBranding />
      <TabUIUX />
      <TabMotion />
    
    </div>

    </main>
  )
}
