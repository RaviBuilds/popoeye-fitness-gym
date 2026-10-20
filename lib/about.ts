import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * POPOEYE FITNESS — populated from docs/Gym-research.md (ABOUT.zones,
 * ABOUT.attributes). Air conditioning, parking and the water cooler are
 * PUBLICLY_REPORTED (Fitpass listing) and render; owner verification is
 * required before final-client production. The strength / weight-training
 * zone is worded as a listing only — the research states a dedicated
 * physical zone is inferred, not mapped.
 *
 * Not rendered (checked, not verifiable): the functional-floor and cardio
 * zones are INFERRED by the research report (no floor plan, photos or
 * equipment list), and the "brand new equipment" and "clean and hygienic"
 * attributes exist only as an unattributed quoted review — a review is not a
 * facility fact. Lockers, showers, physiotherapy and progress tracking are
 * NOT verified. No station counts or equipment brands are claimed.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/popoeye-fitness-rethibowli-about-gym-interior.jpg",
    alt: "Popoeye Fitness training floor in Rethibowli, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength / weight training",
      detail: "Strength training and weight training are publicly listed.",
      icon: "strength",
      verified: true,
    },
    {
      id: "functional",
      label: "Functional training",
      detail: "CrossFit and HIIT are listed; a dedicated functional floor is not verified.",
      icon: "equipment",
      verified: false,
    },
    {
      id: "cardio",
      label: "Cardio",
      detail: "Specific cardio machines are not verified.",
      icon: "floor",
      verified: false,
    },
  ],
  attributes: [
    { id: "air-conditioning", label: "Air-conditioned facility", verified: true },
    { id: "parking", label: "Parking listed", verified: true },
    { id: "water-cooler", label: "Water cooler", verified: true },
    // Review-quote only (unattributed GBP review) — never rendered as a fact.
    { id: "new-equipment", label: "Equipment described as brand new", verified: false },
    { id: "clean", label: "Clean, hygienic gym", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
