import Head from 'next/head';
// import Link from 'next/link';
import Page from '../components/Layout/Page';
import RentBanner from './home/section/RentBanner';
import SlideSection from './home/section/SlideSection';

export default function Home() {

  React.useEffect(() => {

    console.log(window.localStorage);
  })

  return (
    <Page>
      <SlideSection />
      <RentBanner />
    </Page>
  )
}
