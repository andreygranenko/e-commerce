import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={'bg-blue-900 w-screen flex items-center h-screen'}>
      <div className={'text-center w-full'}>
        <button className={'bg-white p-2 rounded-lg px-4'}>Login with Google</button>
      </div>
    </div>
  )
}
