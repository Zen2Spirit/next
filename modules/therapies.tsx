import { therapies } from "@/lib/therapies/therapies";
import { Header } from "./common/header";
import { slugify } from "@/lib/slugify";

export function Therapies() {
  return (
    <>
      <Header title="Therapieën" />
      <main className="container mx-auto flex flex-col gap-10 my-10">
        {therapies.map((therapy) => (
          <div
            key={therapy.name}
            className="py-8 border-b border-light-gray w-full"
          >
            {/* Anchor with negative to so that we account for the header when navigating */}
            <div id={slugify(therapy.name)} className="relative -top-60" />
            <h2 className="text-4xl font-bold my-4">{therapy.name}</h2>
            <p className="my-4 text-accent">
              € {therapy.price} voor {therapy.duration} minuten
            </p>
            {therapy.description}
          </div>
        ))}
      </main>
    </>
  );
}
