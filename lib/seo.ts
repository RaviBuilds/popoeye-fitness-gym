import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * POPOEYE FITNESS SEO configuration, from docs/Gym-research.md
 * (SEO.title_candidate / description_candidate — INFERRED from reported
 * business data, not official gym wording). The research's description
 * candidate ends with "Confirm current services and hours with the gym."; that
 * sentence is dropped from the meta description and kept in the FAQ answers
 * instead. Only listed services are named; no ranking or superlative claim.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO standalone website for the gym.
 */
export const seo: SEOConfiguration = {
  title: "Popoeye Fitness | Gym & CrossFit in Rethibowli, Hyderabad",
  description:
    "Popoeye Fitness in the Rethibowli and Gudimalkapur area of Hyderabad, with publicly listed CrossFit, HIIT classes, weight training, personal training, core workouts and nutrition consulting.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
