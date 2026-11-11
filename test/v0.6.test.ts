import { describe, expect, test } from "vitest";
import { SceneSchema } from "../src/0.6.js";

const sceneStitchingExample = {
  zarr_format: 3,
  node_type: "group",
  attributes: {
    ome: {
      version: "0.6",
      scene: {
        coordinateTransformations: [
          {
            type: "translation",
            output: { name: "world" },
            input: { path: "tile_0", name: "physical" },
            translation: [0, 0],
            name: "tile_0_mm to world",
          },
          {
            type: "translation",
            output: { name: "world" },
            input: { path: "tile_1", name: "physical" },
            translation: [0, 348],
            name: "tile_1_mm to world",
          },
          {
            type: "translation",
            output: { name: "world" },
            input: { path: "tile_2", name: "physical" },
            translation: [276, 0],
            name: "tile_2_mm to world",
          },
          {
            type: "translation",
            output: { name: "world" },
            input: { path: "tile_3", name: "physical" },
            translation: [276, 348],
            name: "tile_3_mm to world",
          },
        ],
        coordinateSystems: [
          {
            name: "world",
            axes: [
              {
                type: "space",
                name: "x",
                unit: "micrometer",
                discrete: false,
              },
              {
                type: "space",
                name: "y",
                unit: "micrometer",
                discrete: false,
              },
            ],
          },
        ],
      },
    },
  },
};

describe("SceneSchema", () => {
  test("parses the OME-NGFF 0.6 scene stitching example", () => {
    const parsed = SceneSchema.parse(sceneStitchingExample.attributes);
    const firstTransformation =
      parsed.ome.scene.coordinateTransformations[0];
    const inputName: string = firstTransformation.input.name;

    expect(parsed.ome.scene.coordinateTransformations).toHaveLength(4);
    expect(inputName).toBe("physical");
    expect(firstTransformation.output.name).toBe("world");
    expect(parsed.ome.scene.coordinateSystems?.[0]?.axes[0]?.unit).toBe(
      "micrometer",
    );
    expect(parsed.ome.scene.coordinateSystems?.[0]?.axes[0]?.discrete).toBe(
      false,
    );
  });
});
