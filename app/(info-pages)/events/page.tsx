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
  title: "Events - Zen2Spirit",
  description:
    "Een vzw met als maatschappelijk doel mensen op holistische wijze te helpen hun welzijn te vergroten door o.a. energetische healingen, hypnose & meditaties aan te bieden.",
};

export default async function EventsPage() {
  const events = await fetchFacebookEvents();
  return <Events events={events} />;
}
