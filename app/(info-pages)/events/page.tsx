import { Events } from "@/modules/events";
import { Metadata } from "next";

async function fetchFacebookEvents() {
  const response = await fetch(
    `https://graph.facebook.com/v19.0/${process.env.PAGE_ID}/events?fields=name,description,place,start_time,cover&access_token=${process.env.PAGE_TOKEN}`,
  );
  const data = await response.json();

  // Filter to only return future events
  const now = new Date();
  const filteredData = data.data.filter(
    (event: { start_time: string }) => new Date(event.start_time) > now,
  );
  return filteredData;
}

export const metadata: Metadata = {
  title: "Events en Activiteiten - Zen2Spirit",
  description:
    "Ontdek aankomende events, workshops en groepsactiviteiten van Zen2Spirit. Deelnemen aan onze holistische bijeenkomsten.",
  keywords: [
    "events",
    "workshops",
    "activiteiten",
    "groepslessen",
    "meditatie",
  ],
  openGraph: {
    title: "Events en Activiteiten - Zen2Spirit",
    description: "Bekijk al onze geplande events en groepsactiviteiten.",
    url: "https://zen2spirit.be/events",
  },
};

export default async function EventsPage() {
  const events = await fetchFacebookEvents();
  return <Events events={events} />;
}
