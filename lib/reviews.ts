import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * POPOEYE FITNESS — rating/reviewCount are VERIFIED_OFFICIAL (Google
 * Business Profile screenshot described in docs/Gym-research.md REVIEWS:
 * 4.8 / 21 reviews). The research gives no exact calendar date for that
 * observation (`rating_read_on` is only "Current"); the operator should
 * re-read the live Google count before launch.
 *
 * REVIEWS — only the Google Business Profile review is shown. The research
 * lists two selected reviews:
 *   - "Yaye Aakash" ("Infrastructure", 5 stars, 12 Oct 2026) comes from
 *     FITPASS, not Google. The Section 06 wall is a Google-native card, so
 *     showing a Fitpass review there would misattribute its source. It is
 *     intentionally NOT rendered. (It also needs the owner's permission to
 *     use — owner question 18.)
 *   - The GBP review below is quoted verbatim from the research. Its
 *     reviewer name is visually obscured in the source screenshot
 *     (`reviewer_name` NOT_FOUND), and its star rating and date were not
 *     supplied, so the name is the neutral descriptor "Google reviewer" (not
 *     a person's name) and no `rating` is set. OWNER / SOURCE-PLATFORM
 *     ATTRIBUTION CHECK REQUIRED.
 * The section adapts to a single review; nothing further is invented.
 *
 * `tagline` is left empty: the research's sentiment summary is INFERRED
 * analysis, and an empty tagline is simply not rendered.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a Fitpass,
 * AcademyFind or Justdial URL for the Google review CTA.
 * googleBusinessProfileUrl uses a Google Maps search-by-name-and-address
 * query (the same safe fallback pattern as lib/business.ts mapUrl). No Place
 * ID or profile slug is invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.8,
  reviewCount: 21,
  tagline: "",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Popoeye+Fitness+Pillar+Number+53+Saptagiri+Colony+Sapthagiri+Nagar+Colony+Rethibowli+Hyderabad+500006",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "RK Ashwin",
      text: "Love the ambience & the equipment. very respectful staff and trainer, relatively new place so the crowd is not too much..",
    },
    {
      name: "Saidesh Chawdary",
      text: "Really good gym with a nice two-storey setup. The coach is excellent and genuinely helpful. All the equipment is brand new, and the gym is kept clean and hygienic. Overall, a great place to work out with a good atmosphere. Definitely recommend it.",
    },
    {
      name: "Mohdfurqan Furqan",
      text: "If you are looking for a gym you can definitely go for popoeye fitness gym. The gym is well maintained and clean, equipment’s are good especially management are very kind and cooperative ♥️",
    },
    {
      name: "Adnan Ali",
      text: "This gym is very good and there staff is very good communication and the environment also good and the trainer is very friendly and good...",
    },
  ],
};
