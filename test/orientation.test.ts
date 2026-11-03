import { describe, expect, test } from "vitest";
import * as v04 from "../src/0.4";
import * as v05 from "../src/0.5";
import * as v06 from "../src/0.6";
import { ANATOMICAL_ORIENTATIONS } from "../src/shared";

/**
 * RFC-4 axis orientation. https://ngff.openmicroscopy.org/rfc/4/index.html
 *
 * Written by hand rather than from the spec submodules, because RFC-4 is not part of
 * any released NGFF version and so has no fixtures to read. These cases are the
 * regression guard for a field being dropped on the way through: a non-strict
 * `z.object` strips what it does not declare, which is silent, so a schema that
 * forgets a key still parses and the loss only shows up much later in a viewer.
 */

const ORIENTED_AXES = [
  { name: "z", type: "space", unit: "millimeter",
    orientation: { type: "anatomical", value: "superior-to-inferior" } },
  { name: "y", type: "space", unit: "millimeter",
    orientation: { type: "anatomical", value: "anterior-to-posterior" } },
  { name: "x", type: "space", unit: "millimeter",
    orientation: { type: "anatomical", value: "right-to-left" } },
];

const v04Image = (axes: unknown) => ({
  multiscales: [{
    version: "0.4",
    axes,
    datasets: [{ path: "0", coordinateTransformations: [{ type: "scale", scale: [1, 1, 1] }] }],
  }],
});

const v05Image = (axes: unknown) => ({
  ome: {
    version: "0.5",
    multiscales: [{
      axes,
      datasets: [{ path: "0", coordinateTransformations: [{ type: "scale", scale: [1, 1, 1] }] }],
    }],
  },
});

const v06Image = (axes: unknown) => ({
  ome: {
    version: "0.6",
    multiscales: [{
      coordinateSystems: [{ name: "physical", axes }],
      datasets: [{
        path: "0",
        coordinateTransformations: [{
          input: "/0",
          output: "physical",
          type: "sequence",
          transformations: [{ type: "scale", scale: [1, 1, 1] }],
        }],
      }],
    }],
  },
});

/** The axes as the schema hands them back, whatever the version buries them under. */
function parsedAxes(version: "0.4" | "0.5" | "0.6", axes: unknown) {
  if (version === "0.4") {
    const r = v04.ImageSchema.safeParse(v04Image(axes));
    if (!r.success) return r;
    return { success: true as const, axes: r.data.multiscales[0].axes };
  }
  if (version === "0.5") {
    const r = v05.ImageSchema.safeParse(v05Image(axes));
    if (!r.success) return r;
    return { success: true as const, axes: r.data.ome.multiscales[0].axes };
  }
  const r = v06.ImageSchema.safeParse(v06Image(axes));
  if (!r.success) return r;
  return { success: true as const, axes: r.data.ome.multiscales[0].coordinateSystems![0].axes };
}

describe.each(["0.4", "0.5", "0.6"] as const)("v%s", (version) => {
  test("keeps orientation on every axis that carries one", () => {
    const result = parsedAxes(version, ORIENTED_AXES);
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.axes.map((a) => a.orientation)).toEqual([
      { type: "anatomical", value: "superior-to-inferior" },
      { type: "anatomical", value: "anterior-to-posterior" },
      { type: "anatomical", value: "right-to-left" },
    ]);
  });

  // v0.6 reached its axes through a second, reduced axis schema that declared only
  // `name` and `type`, so every v0.6 image lost its units without anything saying so.
  test("keeps unit on every axis that carries one", () => {
    const result = parsedAxes(version, ORIENTED_AXES);
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.axes.map((a) => a.unit)).toEqual([
      "millimeter",
      "millimeter",
      "millimeter",
    ]);
  });

  test("accepts axes with no orientation at all", () => {
    const bare = ORIENTED_AXES.map(({ orientation: _, ...axis }) => axis);
    const result = parsedAxes(version, bare);
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.axes.every((a) => a.orientation === undefined)).toBe(true);
  });

  // The RFC calls an absent field and an explicit null equivalent, while the JSON
  // Schema it ships would reject the null. A reader should take either.
  test("accepts an explicit null orientation", () => {
    const nulled = ORIENTED_AXES.map((axis) => ({ ...axis, orientation: null }));
    expect(parsedAxes(version, nulled).success).toBe(true);
  });

  test("accepts orientation on only some of the axes", () => {
    const [z, y, x] = ORIENTED_AXES;
    const mixed = [{ name: z.name, type: z.type, unit: z.unit }, y, x];
    const result = parsedAxes(version, mixed);
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.axes[0].orientation).toBeUndefined();
    expect(result.axes[1].orientation).toEqual(ORIENTED_AXES[1].orientation);
  });

  test("rejects a value outside the controlled vocabulary", () => {
    const bogus = [{ ...ORIENTED_AXES[0], orientation: { type: "anatomical", value: "RAS" } },
                   ORIENTED_AXES[1], ORIENTED_AXES[2]];
    expect(parsedAxes(version, bogus).success).toBe(false);
  });

  // "anatomical" is the only domain the RFC defines; it reserves room for others but
  // names none, so anything else is a writer's mistake rather than a future we can read.
  test("rejects an orientation type other than anatomical", () => {
    const bogus = [{ ...ORIENTED_AXES[0], orientation: { type: "geographical", value: "left-to-right" } },
                   ORIENTED_AXES[1], ORIENTED_AXES[2]];
    expect(parsedAxes(version, bogus).success).toBe(false);
  });
});

describe("controlled vocabulary", () => {
  test("holds the 24 values RFC-4 defines, with no duplicates", () => {
    expect(ANATOMICAL_ORIENTATIONS).toHaveLength(24);
    expect(new Set(ANATOMICAL_ORIENTATIONS).size).toBe(24);
  });

  test("every value is a direction pair whose halves are both in the vocabulary", () => {
    for (const value of ANATOMICAL_ORIENTATIONS) {
      const halves = value.split("-to-");
      expect(halves).toHaveLength(2);
      // Each pair appears in both directions, so reversing a value must land on
      // another one. This is what lets a reader label both ends of a rendered axis.
      expect(ANATOMICAL_ORIENTATIONS).toContain(`${halves[1]}-to-${halves[0]}`);
    }
  });
});
