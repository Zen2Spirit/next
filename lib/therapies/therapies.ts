import { ReactNode } from "react";
import { SoulTherapy } from "./soul-therapy";
import { GroupMeditation } from "./group-meditation";
import { EnergeticHealing } from "./energetic-healing";
import { HypnoTherapy } from "./hypno-therapy";
import { WalkCoaching } from "./walk-coaching";
import { ConversationTherapy } from "./conversation-therapy";
import { Tarot } from "./tarot";

type Therapy = {
  name: string;
  description: ReactNode;
  imageUrl: string;
  duration: number; // in minutes
  price: number;
};

export const therapies: Therapy[] = [
  {
    name: "Soultherapie",
    description: SoulTherapy(),
    imageUrl: "/therapies/soul-therapy.webp",
    duration: 60, // 1 uur
    price: 100,
  },
  {
    name: "Begeleide meditatie in groep",
    description: GroupMeditation(),
    imageUrl: "/therapies/group-meditation.webp",
    duration: 120, // 2 uur
    price: 15,
  },
  {
    name: "Energetische healings",
    description: EnergeticHealing(),
    imageUrl: "/therapies/energetic-healing.webp",
    duration: 90, // 1.5 uur
    price: 85,
  },
  {
    name: "Hypnotherapie",
    description: HypnoTherapy(),
    imageUrl: "/peter-marian-hypnose.webp",
    duration: 60, // 1 uur
    price: 80,
  },
  {
    name: "Wandelcoaching",
    description: WalkCoaching(),
    imageUrl: "/therapies/walk-coaching.webp",
    duration: 60, // 1 uur
    price: 70,
  },
  {
    name: "Gesprekstherapie",
    description: ConversationTherapy(),
    imageUrl: "/therapies/conversation-therapy.webp",
    duration: 60, // 1 uur
    price: 65,
  },
  {
    name: "TarotLegging",
    description: Tarot(),
    imageUrl: "/marian-tarot.webp",
    duration: 45, // 45 minuten
    price: 45,
  },
];
