import Head from 'next/head';
import { Roboto } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import { Header } from '@/components/Header/Header';
import { AboutFestBlock } from '@/components/AboutFestBlock/AboutFestBlock';
import { MapBlock } from '@/components/MapBlock/MapBlock';
import { PerformersBlock } from '@/components/PerformersBlock/PerformersBlock';
import { Footer } from '@/components/Footer/Footer';

const roboto = Roboto({ weight: '400', subsets: ['cyrillic'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>БАРЖА LIVE!</title>
        <meta
          name="description"
          content="Сайт музыкального фестиваля «БАРЖА LIVE!»"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <Header />
        <AboutFestBlock />
        <PerformersBlock />
        <MapBlock />
        <Footer />
      </main>
    </>
  );
}
