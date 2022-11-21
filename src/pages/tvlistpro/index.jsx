import Head from 'next/head'

import { Hero } from '@/components/AppHero'
import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'
import { FeaturesDesktop, FeaturesMobile, PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'


const plans = [
  {
    name: 'Free',
    featured: false,
    price: { Monthly: '$0', Annually: '$0' },
    description:
      'Get Start Watching TV Shows and Movies for Free and see ads on plays',
    button: {
      label: 'Get started for free',
      href: '/register',
    },
    features: [
      'Save Unlimited Playlists',
      'Dark Mode',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Premium',
    featured: true,
    price: { Monthly: '$2', Annually: '$20' },
    description:
      'See no ads on plays and get access to all the premium features',
    button: {
      label: 'Subscribe',
      href: '/',
    },
    features: [
      'No ads on plays',
      'Access to all premium features',
      'Save Unlimited Playlists',
      'Change App Icon',
      'Dark Mode',
    ],
    logomarkClassName: 'fill-cyan-500',
  },
]

// const features = [
//   {
//     name: 'Play',
//     description:
//       'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
//     icon: DeviceArrowIcon,
//   },
//   {
//     name: 'Build a balanced portfolio',
//     description:
//       'Invest in different industries to find the most opportunities to win huge.',
//     icon: DeviceCardsIcon,
//   },
//   {
//     name: 'Trade in real-time',
//     description:
//       'Get insider tips on big stock moves and act on them within seconds.',
//     icon: DeviceClockIcon,
//   },
//   {
//     name: 'Profit from your network',
//     description:
//       'Invite new insiders to get tips faster and beat even other Pocket users.',
//     icon: DeviceListIcon,
//   },
//   {
//     name: 'Encrypted and anonymized',
//     description:
//       'Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.',
//     icon: DeviceLockIcon,
//   },
//   {
//     name: 'Portfolio tracking',
//     description:
//       'Watch your investments grow exponentially, leaving other investors in the dust.',
//     icon: DeviceChartIcon,
//   },
// ]

const navlinks = [
  ['Features', '#features'],
  ['Reviews', '#reviews'],
  ['Pricing', '#pricing'],
  ['FAQs', '#faqs'],
  ['Privacy & Policy', '/tvlistpro/privacy'],
]

export default function Home() {
  return (
    <>
      <Head>
        <title>TV List Pro</title>
        <meta
          name="description"
          content="Stream IPTV  online with  no registration required. Watch your favorite TV shows and movies online for free."
        />
      </Head>
      <Header
        navlinks={navlinks}
        title={'TV List Pro'}

        downloadUrl={'http://appstore.com'} />
      <main>
        <Hero
          appDemo
          title={'Watch TV Shows and Movies Online'}
          subtitle={'Stream TV shows and movies online with no registration required. Watch your favorite TV shows and movies online for free.'}
        />
        <PrimaryFeatures
          features={<>
            <div className="mt-16 md:hidden">
              <FeaturesMobile />
            </div>
            <Container className="hidden md:mt-20 md:block">
              <FeaturesDesktop />
            </Container>
          </>}
          title={'Watch TV Shows and Movies Online'}
          subtitle={`TV List Pro was built for people who like to have their IP TV channels and movies organized in one place. It's a simple and easy to use application that allows you to watch your favorite TV shows and movies online for free`}
        />
        {/* <SecondaryFeatures
         /> */}
        <CallToAction
          title={'Watch TV Shows and Movies Online'}
          subtitle={`Download the app and create a playlist
         today and start watching your favorite TV shows and movies online for free`}
          appleStoreDownloadUrl={'http://appstore.com'}
          googlePlayDownloadUrl={'http://googleplay.com'}
        />
        {/* <Reviews /> */}
        <Pricing
          title={'Pricing'}
          subtitle={`TV List Pro is free to use. You can watch TV shows and movies online for free. If you want to remove ads and get more features, you can subscribe to our premium plan.`}
          plans={plans}
        />

      </main>
      <Footer
        navlinks={navlinks}
        title={'TV List Pro'}
        qrCode={'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png'}
      />
    </>
  )
}
