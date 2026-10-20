import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * POPOEYE FITNESS — all 8 listed services from docs/Gym-research.md
 * (PROGRAMS.*). Every entry is PUBLICLY_REPORTED (Google Business Profile
 * screenshot / Fitpass listing); owner verification of current availability,
 * formats and schedules is required before final-client production.
 * Descriptions state only what is listed; no schedule, coach, curriculum,
 * outcome, equipment brand or health claim is added. Nutrition consulting
 * deliberately carries no provider or credential wording.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed even though the gym-facing program name differs. Here
 * `conditioning` is carried by "CrossFit" (a listed functional-training
 * format).
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); several share the same temporary
 * artwork. The operator replaces the files in place with real Popoeye
 * Fitness photography — no code change.
 */
const ASSET = "/assets/programs/popoeye-fitness-rethibowli-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description: "Strength training, listed alongside weight training and general gym workout access.",
    icon: "strength",
    image: `${ASSET}-strength-training.jpg`,
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "Personal training is listed. Ask the team about session format and availability.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "CrossFit",
    description: "CrossFit, a functional-training format with varied movements, is listed at the gym.",
    icon: "equipment",
    image: `${ASSET}-crossfit.jpg`,
    verified: true,
    ctaLabel: "Ask about CrossFit",
    ctaHref: undefined,
  },
  {
    id: "hiit-classes",
    name: "HIIT Classes",
    description: "HIIT exercise classes are listed. Ask the team for class timings.",
    icon: "cardio",
    image: `${ASSET}-hiit-classes.jpg`,
    verified: true,
    ctaLabel: "Ask about HIIT classes",
    ctaHref: undefined,
  },
  {
    id: "weight-training",
    name: "Weight Training",
    description: "Weight training is listed as part of the gym's training offer.",
    icon: "strength",
    image: `${ASSET}-weight-training.jpg`,
    verified: true,
    ctaLabel: "Ask about weight training",
    ctaHref: undefined,
  },
  {
    id: "core-workouts",
    name: "Core Workouts",
    description: "Core workout sessions are listed. Ask the team how they are structured.",
    icon: "floor",
    image: `${ASSET}-core-workouts.jpg`,
    verified: true,
    ctaLabel: "Ask about core workouts",
    ctaHref: undefined,
  },
  {
    id: "general-gym-workout",
    name: "Gym Workout",
    description: "General gym workout access, listed publicly. Confirm access terms with the gym.",
    icon: "equipment",
    image: `${ASSET}-general-gym-workout.jpg`,
    verified: true,
    ctaLabel: "Ask about gym access",
    ctaHref: undefined,
  },
  {
    id: "nutrition-consulting",
    name: "Nutrition Consulting",
    description: "Nutrition consulting is listed. Ask the team about scope and how to book.",
    icon: "coaching",
    image: `${ASSET}-nutrition-consulting.jpg`,
    verified: true,
    ctaLabel: "Ask about nutrition consulting",
    ctaHref: undefined,
  },
];
