import Head from 'next/head'

import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Reviews } from '@/components/Reviews'

export default function Home() {
  return (
    <>
      <Head>
        <title> DevLabLife  </title>
        <meta
          name="description"
          content="DevLabLife is a platform for developers to share their knowledge and learn from others."
        />
      </Head>
      <Header
        title="DevLabLife"
        navlinks={[
          ['TV List Pro', '/tvlistpro'],
        ]}
      />
      <main>
        <Hero
          title="DevLabLife"
          subtitle="A platform for developers to share their knowledge and learn from others."
        />
        <Reviews
         />
      </main>
      <Footer
        title="DevLabLife"
      />
    </>
  )
}
