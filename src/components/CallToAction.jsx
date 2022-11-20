import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PlayStoreLink } from './PlayStoreLink'

export function CallToAction({
  title, 
  subtitle, 
  appleStoreDownloadUrl,
  googlePlayDownloadUrl}) {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {subtitle}
          </p>
          <div className="mt-8 flex justify-center space-x-2 ">
            <AppStoreLink color="white" link={appleStoreDownloadUrl} />
            <PlayStoreLink color="white" link={googlePlayDownloadUrl} />
          </div>
        </div>
      </Container>
    </section>
  )
}
