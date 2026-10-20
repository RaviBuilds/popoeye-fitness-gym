import type { SocialConfiguration } from "./types";

/**
 * Master social/Instagram data. Curated content only — no live authenticated
 * Instagram API dependency in Factory v1. An empty posts array is valid and
 * renders a "Follow us on Instagram" fallback CTA, never a broken widget.
 *
 * NOTE: `social` below is not currently imported by any component — the live
 * Instagram section (components/sections/Instagram.tsx) reads from
 * lib/instagram.ts. See docs/gym-customization-manifest.md §9.1
 * ("lib/social.ts is orphaned"). Left in sync with lib/instagram.ts for data
 * consistency in case a future section consumes this module; not a live
 * rendering path. `socialLinks` further down IS live (footer icons).
 *
 * POPOEYE FITNESS — docs/Gym-research.md INSTAGRAM.handle and
 * INSTAGRAM.profile_url are NOT_FOUND, so both fields are empty strings here
 * (the type requires strings). See lib/instagram.ts for the full note.
 */
export const social: SocialConfiguration = {
  instagramHandle: "",
  instagramUrl: "",
  posts: [],
};

/**
 * Footer social icons shown next to Instagram.
 *
 * SOURCE-FIRST: no handle or username is invented.
 *  - Facebook / X: docs/Gym-research.md CONTACT.facebook_url is NOT_FOUND and
 *    no X profile exists in the research. The icons keep the network
 *    homepage until the owner confirms an official page.
 *  - Justdial: the Justdial URLs in the research are locality category pages,
 *    not a verified Popoeye Fitness listing, so no Justdial icon is shown.
 *  - Fitpass (booking_url) is a third-party aggregator and has no icon in
 *    this set; it is not presented as a social profile.
 *
 * Instagram is configured separately in lib/instagram.ts (it also drives the
 * Reel embeds) and is not repeated here.
 */
export interface SocialLink {
  id: "facebook" | "justdial" | "x";
  /** Accessible name for the icon, e.g. "Facebook". */
  label: string;
  /** Profile URL. Defaults to the network homepage until the gym's own is set. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "x", label: "X", href: "https://x.com" },
];
