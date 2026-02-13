"use client";

import { slugify } from "@/lib/slugify";
import { therapies } from "@/lib/therapies/therapies";
import { Button } from "@/modules/common/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Home() {
  const router = useRouter();

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center intro">
        <main className="container mx-auto flex flex-col gap-6 relative z-10 text-gray-50">
          <h1 className="text-6xl font-bold text-shadow-2xs">
            Welkom bij Zen2Spirit
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl text-gray-300 text-shadow-2xs">
              Alternatieve en holistische gezondheidszorg
            </h2>
            <p className="w-2/3 text-shadow-2xs">
              Een vzw met als maatschappelijk doel mensen op holistische wijze
              te helpen hun welzijn te vergroten door o.a. energetische
              healingen, hypnose & meditaties
            </p>
          </div>
          <div>
            <Button
              label="Maak een afspraak"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              }
            />
          </div>
        </main>
      </section>
      <div className="absolute bottom-10 flex justify-center w-full">
        <Link href="#about" className="animate-bounce hover:animate-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-14 text-gray-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </div>

      <section id="about" className="w-full">
        <div className="container mx-auto py-20 flex gap-15 justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Over ons</h2>
            <p>Kom meer te weten over Zen2Spirit</p>
            <p className="text-lg text-dark-gray">
              Wij geloven dat het lichaam meer is dan lichaam en geest alleen en
              dat alles met elkaar verbonden is en een invloed heeft op elkaar.
              Planten, dieren, mensen maar ook energieën en zielen zien wij als
              onderdeel van een groter geheel. Lichaam, geest, gevoelens,
              gedachten en verlangens: alles is 1...
            </p>
            <div>
              <Button
                label="Kom meer over ons te weten"
                onClick={() => router.push("/about")}
              />
            </div>
          </div>
          <Image
            src="/peter-marian-zen2spirit.webp"
            width={600}
            height={800}
            alt="Peter Marian"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="w-full py-20 bg-light-gray">
        <div className="container mx-auto flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Onze therapieën</h2>
          <p>Ontdek onze verschillende therapieën en behandelingen</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapies.map((therapy) => (
              <Link
                href={`/therapies#${slugify(therapy.name)}`}
                key={therapy.name}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-6 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={therapy.imageUrl}
                  width={300}
                  height={600}
                  alt={therapy.name}
                  className="w-full h-50 object-cover rounded-lg"
                />
                <div className="flex justify-between gap-2">
                  <p className="font-bold">{therapy.name}</p>
                  <p className="font-semibold text-primary">
                    {/* € {therapy.price}{" "} */}
                    <span className="text-sm text-gray-500">
                      {therapy.duration} min
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <Button
              label="Krijg meer info"
              onClick={() => router.push("/therapies")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
