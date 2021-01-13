import Head from 'next/head';
// import Link from 'next/link';
import Page from '../components/Layout/Page';
import RentBanner from '../pages/PageHome/section/RentBanner';
import SlideSection from '../pages/PageHome/section/SlideSection';

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Tooravel</title>
        <link rel="icon" href="https://tooravel.s3.ap-northeast-2.amazonaws.com/media/company/small/TOORAVEL.jpg" />
      </Head>
      <Page>
        <SlideSection />

        <RentBanner />
      </Page>
    </div>
  )
}
