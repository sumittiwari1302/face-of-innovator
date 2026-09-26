import SiteNav from "@/components/site-nav";
import Hero from "@/components/hero";
import UpcomingEvent from "@/components/upcoming-event";
import WhatIs from "@/components/what-is";
import StatsGrid from "@/components/stats-grid";
import Gallery from "@/components/gallery";
import Tracks from "@/components/tracks";
import Journey from "@/components/journey";
import Featured from "@/components/featured";
import Founders from "@/components/founders";
import Voices from "@/components/voices";
import Community from "@/components/community";
import PreviousEvents from "@/components/previous-events";
import Schedule from "@/components/schedule";
import Sponsors from "@/components/sponsors";
import Faq from "@/components/faq";
import Ambassadors from "@/components/ambassadors";
import ContactForm from "@/components/contact-form";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col bg-white">
      <SiteNav />
      <Hero />
      <UpcomingEvent />
      <WhatIs />
      <StatsGrid />
      <Gallery />
      <Tracks />
      <Journey />
      <Featured />
      <Founders />
      <Voices />
      <Community />
      <PreviousEvents />
      <Schedule />
      <Sponsors />
      <Faq />
      <Ambassadors />
      <Cta />
      <ContactForm />
      <Footer />
    </main>
  );
}