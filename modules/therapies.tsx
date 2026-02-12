import { therapies } from "@/lib/therapies/therapies";
import { Header } from "./common/header";

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
