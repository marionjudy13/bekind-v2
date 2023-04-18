import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Head from "next/head";
import NewsAndEvents from "@/components/NewsAndEvents";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { fetchAboutContent } from "@/utils/fetchAboutContent";
import { fetchNewsAndEventsContent } from "@/utils/fetchNewsAndEvents";
import { AboutContent, NewsAndEventsContent } from "@/typings";

type Props = {
  aboutContent: AboutContent;
  newsAndEvents: NewsAndEventsContent[];
};

export default function Home({ aboutContent, newsAndEvents }: Props) {
  return (
    <>
      <Head>
        <title>Be Kind for Ollie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/butterfly.svg" />
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* About */}
      <About {...aboutContent} />
      {/* News & Events */}
      <NewsAndEvents newsAndEvents={newsAndEvents} />
      {/* How to Donate */}
      <Donate />
      {/* Contact Us */}
      <Contact />
      {/* Footer */}
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const aboutContent: AboutContent = await fetchAboutContent();
  const newsAndEvents: NewsAndEventsContent = await fetchNewsAndEventsContent();

  return {
    props: {
      aboutContent,
      newsAndEvents,
    },
    revalidate: 10,
  };
};