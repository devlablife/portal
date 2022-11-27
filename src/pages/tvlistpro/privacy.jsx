import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

const navlinks = [
  ['Features', '/tvlistpro/#features'],
  ['Reviews', '/tvlistpro/#reviews'],
  ['FAQs', '/tvlistpro/#faqs'],
  ['Priacy Policy', '#'],
]

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Pocket - Invest at the perfect time.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header
        navlinks={navlinks}
        title={'TV List Pro'}
        downloadUrl={'https://tvlistpro.page.link/dl'} />
      <main>
        <Container>
          <div class="">
            <h1 className='text-2xl font-extrabold mb-4'> Privacy Policy </h1>
            <div className='mb-4'>
              <p> DevLablife  has built the Tv Lir Pro app as a free app. This SERVICE is provided free
                of charge by DevLablife  and
                is intended for use as it is. In-app purchases may apply. </p>
              <p> This page is used to inform website visitors about our policy regarding the collection,
                use and disclosure of
                personal information if someone decides to use our service. </p>
              <p> If you choose to use our Service, you consent to the collection and use of information
                related to this policy.
                The personal information we collect is used to deliver and improve the service. We will
                not use or share your
                information with anyone other than as described in this privacy policy. </p>
              <p>
                The terms used in this Privacy Policy have the same meaning
                as in our Terms and
                Conditions, which are accessible on TV List Pro, unless otherwise defined in this
                Privacy Policy. </p>
            </div>
            <h4 className='font-bold text-xl mb-3'> Collecting and using
              information </h4>
            <div className='mb-4'>

              <p> For a better experience while using our Service, we may require that you provide us with
                certain personally
                identifiable information, including but not limited to Firebase. The information that we
                request is stored and
                used by us as described in this privacy policy. </p>
              <p> The app uses third-party services that may collect information that is used to identify
                you. </p>
            </div>
            <h4 className='font-bold text-xl mb-3'> Log data </h4>
            <div className='mb-4'>

              <p> We want you to know that when you use our Service, we collect data and information (via
                third-party products) on
                your phone in the event of an error in the app, called Log Data. This log data may
                contain information such as
                the IP address (device protocol), the device name, the version of the operating system,
                the configuration of the
                app when using our service, the time and date of your use of the service and other
                statistics . </p>
            </div>
            <h4 className='font-bold text-xl mb-3'> Cookies </h4>
            <div className='mb-4'>

              <p> Cookies are files with a small amount of data that is often used as anonymous unique
                identification. These are
                sent to your browser from the website you visit and are stored on the internal memory of
                your device. </p>
              <p> This Service does not use these "cookies" explicitly. However, the app can use
                third-party code and libraries
                that use "cookies" to collect information and improve their services. You have the
                ability to accept or decline
                these cookies and to know when a cookie is being sent to your device. If you choose to
                decline our cookies, you
                may not be able to use some parts of this service. </p>
            </div>
            <h4 className='font-bold text-xl mb-3'> Service providers </h4>
            <div className='mb-4'>
              <p> We may hire third-party companies and individuals for the following reasons: </p>
              <ul>
                <li> To facilitate our service; </li>
                <li> To deliver the Service on our behalf; </li>
                <li> Perform service-related services; or </li>
                <li> To help us analyze how our service is used. </li>
              </ul>
              &nbsp;<br />
              <p> We want to inform users of this Service that these third parties have access to your
                Personal Information. The reason is to perform the tasks assigned to them on our behalf.
                However, they are under no obligation to disclose or use the information for any other
                purpose. </p>
            </div>
            <h4 className='font-bold text-xl mb-3'> Security </h4>
            <div className='mb-4'>

              <p> We value your trust in providing your personal information, so we strive to use
                commercially acceptable means to protect it. But don't forget that no shipping method
                over the internet or electronic storage is 100% safe and reliable and we cannot
                guarantee its absolute security. </p>
              <h4 className='font-bold text-xl mb-3'> Links to other sites </h4>
              <p> This Service may contain links to other sites. If you click on a third-party link, you
                will be taken to that site. Note that these external sites are not managed by us. That
                is why we strongly recommend that you view the Privacy Policy of these websites. We have
                no control over and assume no responsibility for the content, privacy policies, or
                practices of third-party sites or services. </p>
              <h4 className='font-bold text-xl mb-3'> Children's privacy </h4>
              <p> These Services are not addressed to anyone under the age of 13. We do not knowingly
                collect personally identifiable information from children under the age of 13. If we
                discover that a child under the age of 13 has provided us with personal information, we
                will immediately remove it from our servers. If you are a parent or guardian and you
                know that your child has provided us with personal information, please contact us so
                that we can take appropriate action. </p>
            </div>
            <h4 className='font-bold text-xl mb-3'> Changes to this privacy
              policy </h4>
            <div className='mb-4'>

              <p>
                We may update our privacy policy from time to time. That is
                why you are advised to regularly check this page for any changes. These changes take effect
                immediately after they have been placed on this page. </p>
              <h4 className='font-bold text-xl mb-3'> Contact us </h4>
              <p> If you have any questions or suggestions about our privacy policy, please do not
                hesitate to contact us. </p>
              <p> </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer
        navlinks={navlinks}
        title={'TV List Pro'}
        qrCode={'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png'}
      />
    </>
  )
}
