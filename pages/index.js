import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import Counter from '../components/Counter'
import UserExample from '../components/UserExample'
import { getClient } from '../lib/sanity'
import SanityStarterData from '../components/SanityStarterData'

export default function Home({ data }) {

  return (
    <MainLayout>
      <Head>
        <title>Reach Next Js Starter - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="text-container">
            <h1>Reach Marketing</h1>
            <h2>Next JS boilerplate</h2>
            <p>With support for:</p>
            <ul className="list-disc pl-4 mt-4">
              <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a></li>
              <li><a href="https://www.sanity.io/" target="_blank" rel="noopener noreferrer">Sanity IO</a></li>
              <li><a href="https://tagmanager.google.com/#/home" target="_blank" rel="noopener noreferrer">Google Tag Manager</a></li>
              <li>GDPR / Cookies consent - <Link href="/privacy-cookies-policy/"><a>Privacy & Cookies Policy</a></Link></li>
            </ul>
            <SanityStarterData data={data} />
            <h2>Redux examples</h2>
            <Counter />
            <UserExample />
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const data = await getClient(true).fetch(`*[]`);

  return {
    props: {
      data: { data }
    },
    revalidate: 1
  }
}
