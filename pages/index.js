import Head from 'next/head';
// import Link from 'next/link';
import Page from '../src/components/Layout/Page';
import RentBanner from './home/section/RentBanner';
import SlideSection from './home/section/SlideSection';

export default function Home() {

  return (
    <Page>
      <SlideSection />
      <RentBanner />
    </Page>
  )
}
