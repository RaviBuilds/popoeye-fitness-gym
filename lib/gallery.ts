import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * POPOEYE FITNESS — real facility photographs supplied by the operator
 * (public/assets/gallery/popoeye-fitness-rethibowli-gallery-<subject>.jpg).
 * Alt text describes only what is visible in each frame; no equipment brands,
 * counts or claims are encoded. The source files are 680x510 JPEGs; swap in
 * higher-resolution versions under the same filenames if sharper images are
 * wanted — no code change needed.
 *
 * Not linked (still in the folder): 33.jpg (portrait, 287px wide), 677.jpg
 * (680x175 panorama) and 44.jpg (near-duplicate of the turf bench corner)
 * would crop badly or repeat a frame in the rail; ee.jpg and sd.jpg are
 * byte-identical copies of the machine-floor-turf image.
 *
 * ORDER is editorial: strength floor, free weights, machines, cardio, turf
 * zone, then entrance and reception.
 */
const GALLERY = "/assets/gallery/popoeye-fitness-rethibowli-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-strength-floor-wide.jpg`,
    alt: "Strength training floor with benches, racks and weight machines at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-free-weights-racks.jpg`,
    alt: "Dumbbell racks, a bench and squat racks on the training floor at Popoeye Fitness",
  },
  {
    src: `${GALLERY}-dumbbell-rack-benches.jpg`,
    alt: "Dumbbell racks and adjustable benches in front of mirrors at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-machine-floor.jpg`,
    alt: "Weight machines on rubber flooring at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-machine-floor-turf.jpg`,
    alt: "Weight machine area with a turf strip in the foreground at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-cable-and-machine-stations.jpg`,
    alt: "Cable and weight machine stations between pillars at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-machine-area-mirror.jpg`,
    alt: "Weight machines beside wall mirrors at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-machine-corridor.jpg`,
    alt: "Weight machines and mirrors along the training floor at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-lower-body-machine.jpg`,
    alt: "Plate-loaded machine and mirrors on the training floor at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-cardio-area.jpg`,
    alt: "Treadmills and cross-trainers by the windows at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-cardio-treadmills.jpg`,
    alt: "Row of treadmills facing a wall mirror at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-turf-zone.jpg`,
    alt: "Turf training zone seen through the glass entrance at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-turf-bench-corner.jpg`,
    alt: "Turf corner with wooden benches and a wall graphic at Popoeye Fitness, Rethibowli",
  },
  {
    src: `${GALLERY}-entrance-turf.jpg`,
    alt: "Glass entrance with the Popoeye Fitness sign and the turf zone beyond, Rethibowli",
  },
  {
    src: `${GALLERY}-reception-desk.jpg`,
    alt: "Reception desk with the Popoeye Fitness sign at Popoeye Fitness, Rethibowli",
  },
];
