import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * POPOEYE FITNESS (Rethibowli, Hyderabad) — populated from
 * docs/Gym-research.md. VERIFIED_OFFICIAL: business name (Google Business
 * Profile screenshot). PUBLICLY_REPORTED (owner verification required before
 * final-client production): address, locality, landmark, hours, description.
 *
 * NAME: the research records "Popoeye fitness" and the SEO block normalises
 * it to "Popoeye Fitness"; the capitalisation used here follows the SEO
 * block. Owner question 1 (preferred capitalisation) is still open.
 *
 * PHONE / WHATSAPP: NOT_FOUND. The research lists only a masked directory
 * number (+91 98XXX XX123), which must not be published as a working number.
 * `phone` and `whatsapp.number` are therefore left empty: every phone/call
 * surface already hides itself when `phone` is empty (header, contact
 * directory, final CTA, floating contact). OWNER QUESTION: supply the
 * approved phone and WhatsApp number.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted.
 *
 * TAGLINE: NOT_FOUND in the research. The template slots that render the
 * tagline (final CTA headline, footer) need a line, so a plain location
 * statement built only from verified facts is used — not a marketing claim.
 *
 * HOURS: Fitpass (PUBLICLY_REPORTED) lists Monday–Saturday 06:00–23:00 and
 * no Sunday sessions; the Google Business Profile corroborates the 06:00
 * opening. Sunday is entered with empty open/close, which the Location
 * section renders as "Closed". Fitpass also lists general Gym Workout
 * activities ending at 22:30 and notes regional-holiday changes; those
 * refinements are not representable in the weekly table and are left to the
 * owner to confirm.
 *
 * POSTAL CODE — DOCUMENTED SOURCE CONFLICT (not silently resolved): the
 * Google Business Profile screenshot reports 500006; AcademyFind and other
 * aggregators report 500028. The research recommends retaining the GBP value
 * for NAP consistency, so 500006 is applied here. 500028 is NOT confirmed.
 * OWNER VERIFICATION REQUIRED.
 *
 * mapUrl: no verified Google Maps / Place URL was found in research. This is
 * a standard Google Maps search-by-name-and-address URL built from the
 * PUBLICLY_REPORTED address text. No latitude, longitude or Place ID has been
 * invented.
 */
export const business: Business = {
  name: "Popoeye Fitness",
  tagline: "Gym & CrossFit in Rethibowli, Hyderabad.",
  description:
    "Popoeye Fitness is a neighbourhood gym in the Rethibowli and Gudimalkapur area of Hyderabad, listing weight and strength training, CrossFit, HIIT classes, core workouts, personal training and nutrition consulting.",
  phone: "",
  whatsapp: {
    number: "",
    message: "Hi, I'd like to know more about membership and training at Popoeye Fitness, Rethibowli.",
  },
  email: undefined,
  address: {
    addressLine: "Pillar Number 53, Saptagiri Colony, 12-2-717/A/15, Sapthagiri Nagar Colony",
    locality: "Rethibowli",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500006",
    landmark: "PVNR Expressway Pillar Number 53",
  },
  hours: [
    { day: "Monday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Tuesday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Wednesday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Thursday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Friday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Saturday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Sunday", open: "", close: "" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Popoeye+Fitness+Pillar+Number+53+Saptagiri+Colony+Sapthagiri+Nagar+Colony+Rethibowli+Hyderabad+500006",
  // Prompt A — PRIMARY brand colour "Electric Blue" #078DF5 (action / energy /
  // major brand signal), logo-extracted. The authentic hex is entered here
  // exactly once and is never altered; app/globals.css derives the deeper UI
  // fill (--brand-primary-ui) for filled buttons, and app/layout.tsx derives
  // --accent-foreground from the accent's contrast (lib/color.ts) so button
  // text stays legible on this mid-tone blue.
  accentColor: "#078DF5",
  // Prompt A — SECONDARY brand colour "Athletic Red" #F20D16 (structure /
  // support / depth: eyebrows, metadata, technical marks, focus), logo-
  // extracted. Used raw only where the existing token system allows it;
  // derived hover / ink / soft variants are computed in app/globals.css.
  secondaryColor: "#F20D16",
};
