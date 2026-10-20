import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * POPOEYE FITNESS — from docs/Gym-research.md (FAQ.*). Only the entries the
 * research answers are used. The two entries whose answer is `null`
 * (lockers/showers, trainer names and qualifications) are deliberately NOT
 * created: the research says neither is verified. The membership-price
 * entry is worded as "not publicly disclosed" per the research. No
 * cancellation / freeze / trial / joining-fee / guest / refund FAQ is added
 * because the research supports none of them.
 *
 * Statuses: everything is PUBLICLY_REPORTED, so answers are worded as
 * "listed / reported" and owner verification is required before final-client
 * production.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "What are the reported opening hours?",
    answer:
      "Monday to Saturday, 6:00 AM to 11:00 PM, as reported on Fitpass. Workout sessions are listed as unavailable on Sundays, and hours may change on regional holidays. Confirm current hours with the gym before you visit.",
  },
  {
    id: "02",
    question: "Which training programs are listed?",
    answer:
      "Public listings mention CrossFit, HIIT exercise classes, personal training, weight training, strength training, nutrition consulting, core workouts and general gym workout access. Confirm current availability and schedules with the gym.",
  },
  {
    id: "03",
    question: "Is the gym air-conditioned?",
    answer: "Air conditioning is listed as a facility amenity. Confirm that it remains available.",
  },
  {
    id: "04",
    question: "Is parking available?",
    answer:
      "Parking is listed as an amenity. Capacity and exact arrangements are not specified, so confirm details with the gym.",
  },
  {
    id: "05",
    question: "Is drinking water available?",
    answer: "A water cooler is listed as an amenity. Confirm current availability with the gym.",
  },
  {
    id: "06",
    question: "What are the membership prices?",
    answer:
      "Popoeye Fitness does not publicly disclose its membership pricing; directory listings describe fees as available on request. Ask the gym for current plans and rates.",
  },
];
