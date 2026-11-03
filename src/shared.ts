import { z } from "zod";

export function to_date(seconds: number): Date {
  let date = new Date(0);
  date.setUTCSeconds(seconds);
  return date;
}

/**
 * Anatomical axis orientations, from OME-NGFF RFC-4.
 * https://ngff.openmicroscopy.org/rfc/4/index.html
 *
 * Listed in the order of the RFC's own table, so the two can be read side by side.
 */
export const ANATOMICAL_ORIENTATIONS = [
  "left-to-right",
  "right-to-left",
  "anterior-to-posterior",
  "posterior-to-anterior",
  "inferior-to-superior",
  "superior-to-inferior",
  "dorsal-to-ventral",
  "ventral-to-dorsal",
  "dorsal-to-palmar",
  "palmar-to-dorsal",
  "dorsal-to-plantar",
  "plantar-to-dorsal",
  "rostral-to-caudal",
  "caudal-to-rostral",
  "cranial-to-caudal",
  "caudal-to-cranial",
  "proximal-to-distal",
  "distal-to-proximal",
  "superficial-to-deep",
  "deep-to-superficial",
  "apical-to-basal",
  "basal-to-apical",
  "apex-to-base",
  "base-to-apex",
] as const;

/**
 * Which way a spatial axis runs, from its lowest coordinate to its highest.
 *
 * RFC-4: the value "specifies the direction from lowest to highest coordinates along
 * the axis", so `anterior-to-posterior` means coordinates increase towards the back.
 * That is a statement about the coordinate system the spatial metadata establishes,
 * not about array index order, so it composes with `coordinateTransformations` rather
 * than contradicting them.
 *
 * `type` admits only "anatomical" today. The RFC reserves room for other domains
 * (it names engineering and geographical as candidates) but defines none of them.
 */
export const Orientation = z.object({
  type: z.literal("anatomical"),
  value: z.enum(ANATOMICAL_ORIENTATIONS),
});
