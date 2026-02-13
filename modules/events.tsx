"use client";

import Image from "next/image";
import { Header } from "./common/header";
import { Button } from "./common/button";
import Link from "next/link";

type FbEvent = {
  id: string;
  name: string;
  cover: {
    source: string;
  };
  description: string;
  place: {
    name: string;
    location: {
      city: string;
      country: string;
      street: string;
      zip: string;
    };
  };
  start_time: string;
};

type EventProps = {
  events: FbEvent[];
};
export function Events({ events }: EventProps) {
  return (
    <>
      <Header title="Events" />
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.length === 0 && (
            <div className="col-span-full flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Jammer, niets gepland...</h2>
              <p className="text-dark-gray col-span-full w-2/3">
                Er zijn momenteel geen aankomende evenementen. We raden je aan
                om later nog eens terug te komen!
              </p>
              <p className="text-dark-gray col-span-full w-2/3">
                Heb je zelf een idee voor een evenement dat je graag door
                Zen2Spirit georganiseerd zou willen zien? Aarzel niet en{" "}
                <Link href="/contact" className="text-primary">
                  neem contact op met ons
                </Link>
                !
              </p>
            </div>
          )}
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            >
              <div>
                <Image
                  src={event.cover.source}
                  alt={event.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                  <p className="text-accent mb-4">
                    {new Date(event.start_time).toLocaleString("nl-BE")}
                  </p>
                  <p className="text-dark-gray">{event.description}</p>
                </div>
              </div>
              <div className="flex justify-end p-4">
                <Button
                  label="Schrijf je in"
                  onClick={() => {
                    window.open(
                      `https://www.facebook.com/events/${event.id}`,
                      "_blank",
                    );
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
