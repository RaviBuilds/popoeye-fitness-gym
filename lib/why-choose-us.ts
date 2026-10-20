import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * POPOEYE FITNESS — from docs/Gym-research.md (WHY_CHOOSE_US.*). Every item
 * is PUBLICLY_REPORTED (Google Business Profile / Fitpass listing); owner
 * verification is required before final-client production. The research
 * offers listing-based reasons only (formats, amenities, location) — no
 * method, education or credential claims exist for this gym, so none are
 * written here.
 *
 * Wording guardrails taken from the research `basis` notes: no implied class
 * schedule or instructor credentials, no promised or dedicated parking, and
 * no superlatives such as "unparalleled" accessibility.
 *
 * Not used: "Equipment and cleanliness praised in a review" — a single
 * unattributed review, kept out so it is not presented as a testimonial or a
 * facility fact. The individual amenities are listed in lib/about.ts.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Several training formats",
    description:
      "Weight and strength training, CrossFit, HIIT classes, core workouts and personal training are all publicly listed.",
  },
  {
    title: "Air-conditioned, with parking",
    description:
      "Air conditioning, parking and a water cooler are listed amenities. Ask the team about current arrangements.",
  },
  {
    title: "Easy to place",
    description:
      "Find the gym by PVNR Expressway Pillar Number 53, in the Rethibowli and Gudimalkapur area.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the verified
 * reasons (formats, amenities, location); it is never a superlative. A clone
 * edits this object and the array, never the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "One gym, several ways to train.",
};
