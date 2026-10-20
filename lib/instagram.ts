/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * POPOEYE FITNESS Instagram configuration.
 *
 * docs/Gym-research.md INSTAGRAM.profile_url, INSTAGRAM.handle are both
 * `null` / NOT_FOUND (no official profile found in the research's
 * multi-platform search) and INSTAGRAM.items is an empty list (no Reel URLs
 * supplied). Nothing is invented: `profileUrl` and `handle` stay unset, so
 * the profile CTA and footer Instagram link are not rendered, and `items`
 * stays empty, so the Instagram section omits itself
 * (components/sections/Instagram.tsx returns null for an empty list).
 * OWNER QUESTIONS: confirm the official Instagram profile URL and handle, and
 * supply approved Reel URLs if Reels are to be displayed.
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: undefined,
  handle: undefined,
  items: [],
};
