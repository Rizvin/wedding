import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import Timeline from "./components/Timeline";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import QRCodeSection from "./components/QRCodeSection";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";
import ShareButton from "./components/ShareButton";
import { weddingData } from "./data/weddingData";

export default function App() {
  return (
    <main>
      <Hero />
      <Couple />
      <Invitation />
      <Countdown />

      <EventDetails title="Nikkah" {...weddingData.nikkah} image={weddingData.nikkah.image} />

      <Timeline />

      <EventDetails title="Reception" {...weddingData.reception} image={weddingData.reception.image} />

      <Venue
        name={weddingData.reception.venue}
        address={weddingData.reception.address}
        mapsUrl={weddingData.reception.mapsUrl}
        image={weddingData.reception.image}
      />

      <Gallery />
      <QRCodeSection />
      <RSVP />
      <Footer />
      <MusicToggle />
      <ShareButton />
    </main>
  );
}
