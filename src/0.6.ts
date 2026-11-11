
import { z } from "zod";
import { to_date } from "./shared.js";

export const VersionSchema = z
  .enum(["0.6.dev3", "0.6"])
  .describe("The version of the OME-Zarr Metadata");


function withVersion<T extends z.ZodRawShape>(InnerSchema: T) {
  const withVersionSchema = z.object({
    ome: z.object({
      ...InnerSchema,
      version: VersionSchema
    }).describe("The versioned OME-Zarr Metadata namespace"),
  }).describe("The zarr.json attributes key");

  return withVersionSchema
}


// PLATE

const StrictAquisition = z.object({
  id: z
    .number()
    .int()
    .gte(0)
    .describe(
      "A unique identifier within the context of the plate"
    ),
  maximumfieldcount: z
    .number()
    .int()
    .gt(0)
    .describe(
      "The maximum number of fields of view for the acquisition"
    ),
  name: z.string().describe("The name of the acquisition"),
  description: z
    .string()
    .describe("The description of the acquisition")
    .optional(),
  starttime: z
    .number()
    .int()
    .gte(0)
    .describe(
      "The start timestamp of the acquisition, expressed as epoch time i.e. the number seconds since the Epoch"
    )
    .transform(to_date)
    .optional(),
  endtime: z
    .number()
    .int()
    .gte(0)
    .describe(
      "The end timestamp of the acquisition, expressed as epoch time i.e. the number seconds since the Epoch"
    )
    .transform(to_date)
    .optional(),
});

const Aquisition = StrictAquisition.partial({
  maximumfieldcount: true,
  name: true,
});

const Columns = z
  .array(
    z.object({
      name: z
        .string()
        .regex(new RegExp("^[A-Za-z0-9]+$"))
        .describe("The column name"),
    }),
  )
  .min(1)
  .superRefine((rows, ctx) => {
    let names = rows.map((row) => row.name);
    if (rows.length !== new Set(names).size) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `No duplicates columns allowed.`,
      });
    }
  })
  .describe("The columns of the plate");

const Rows = z
  .array(
    z.object({
      name: z
        .string()
        .regex(new RegExp("^[A-Za-z0-9]+$"))
        .describe("The row name"),
    }),
  )
  .min(1)
  .superRefine((rows, ctx) => {
    let names = rows.map((row) => row.name);
    if (rows.length !== new Set(names).size) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `No duplicates rows allowed.`,
      });
    }
  })
  .describe("The rows of the plate");

const PlateWells = z
  .array(
    z.object({
      path: z
        .string()
        .regex(new RegExp("^[A-Za-z0-9]+/[A-Za-z0-9]+$"))
        .describe("The path to the well subgroup"),
      rowIndex: z
        .number()
        .int()
        .gte(0)
        .describe("The index of the well in the rows list"),
      columnIndex: z
        .number()
        .int()
        .gte(0)
        .describe("The index of the well in the columns list"),
    }),
  )
  .min(1)
  .describe("The wells of the plate");

const FieldCount = z
  .number()
  .int()
  .gt(0)
  .describe("The maximum number of fields per view across all wells")
  .optional();

function createPlateSchema<T extends z.ZodTypeAny>(Aquisition: T) {
  return z.object({
    name: z.string().describe("The name of the plate"),
    acquisitions: z.array(Aquisition)
      .describe("The acquisitions for this plate")
      .optional(),
    field_count: FieldCount,
    columns: Columns,
    rows: Rows,
    wells: PlateWells,
  });
}

export const PlateSchema = withVersion(z.object({
  plate: createPlateSchema(Aquisition).partial({ name: true }),
}).shape);

export const StrictPlateSchema = withVersion(z.object({
  plate: createPlateSchema(StrictAquisition),
}).shape);

// BF2Raw

export const Bf2RawSchema = withVersion(z.object({
  "bioformats2raw.layout": z
    .literal(3)
    .describe(
      "The top-level identifier metadata added by bioformats2raw"
    ),
  "plate": PlateSchema.optional()
}).shape);

// OME

export const OmeSchema = withVersion(z.object({
  series: z
    .array(z.string())
    .describe(
      "An array of the same length and the same order as the images defined in the OME-XML"
    )
}).shape);

// Image

const AxesSchema = z.object({
  name: z.string(),
  type: z.string().optional(),
  unit: z.string().optional(),
  discrete: z.boolean().optional(),
  longName: z.string().optional(),
});

const TransformationRef = z.object({
  name: z.string().optional(),
  path: z.string().nullable().optional(),
});

const TransformationEndpoints = z.object({
  input: TransformationRef.optional(),
  output: TransformationRef.optional(),
});

const TransformationFields = {
  ...TransformationEndpoints.shape,
  name: z.string().optional(),
};

const IdentityTransformationSchema = z.object({
  ...TransformationFields,
  type: z.literal("identity"),
});

const ScaleTransformationSchema = z.union([
  z.object({
    ...TransformationFields,
    type: z.literal("scale"),
    scale: z.array(z.number()),
  }),
  z.object({
    ...TransformationFields,
    type: z.literal("scale"),
    path: z.string(),
  }),
]);

const TranslationTransformationSchema = z.union([
  z.object({
    ...TransformationFields,
    type: z.literal("translation"),
    translation: z.array(z.number()),
  }),
  z.object({
    ...TransformationFields,
    type: z.literal("translation"),
    path: z.string(),
  }),
]);

const RotationTransformationSchema = z.union([
  z.object({
    ...TransformationFields,
    type: z.literal("rotation"),
    rotation: z.array(z.array(z.number())),
  }),
  z.object({
    ...TransformationFields,
    type: z.literal("rotation"),
    path: z.string(),
  }),
]);

const AffineTransformationSchema = z.union([
  z.object({
    ...TransformationFields,
    type: z.literal("affine"),
    affine: z.array(z.array(z.number())),
  }),
  z.object({
    ...TransformationFields,
    type: z.literal("affine"),
    path: z.string(),
  }),
]);

type Transformation =
  | z.infer<typeof IdentityTransformationSchema>
  | z.infer<typeof ScaleTransformationSchema>
  | z.infer<typeof TranslationTransformationSchema>
  | z.infer<typeof RotationTransformationSchema>
  | z.infer<typeof AffineTransformationSchema>
  | z.infer<typeof TransformationEndpoints> & {
    name?: string;
    type: "sequence";
    transformations: Transformation[];
  };

const TransformationSchema: z.ZodType<Transformation> = z.lazy(() =>
  z.union([
    IdentityTransformationSchema,
    ScaleTransformationSchema,
    TranslationTransformationSchema,
    RotationTransformationSchema,
    AffineTransformationSchema,
    z.object({
      ...TransformationFields,
      type: z.literal("sequence"),
      transformations: z.array(TransformationSchema),
    }),
  ])
);

const NamedTransformationRef = TransformationRef.extend({
  name: z.string(),
});

const DatasetEndpoints = z.object({
  input: z.object({ path: z.string() }).strict(),
  output: z.object({ name: z.string() }).strict(),
});

const MultiscaleEndpoints = z.object({
  input: NamedTransformationRef,
  output: NamedTransformationRef,
});

const SceneEndpoints = z.object({
  input: NamedTransformationRef,
  output: NamedTransformationRef,
});

const DatasetCoordinateTransformationSchema = TransformationSchema.and(
  DatasetEndpoints
);

const MultiscaleCoordinateTransformationSchema = TransformationSchema.and(
  MultiscaleEndpoints
);

const SceneCoordinateTransformationSchema = TransformationSchema.and(
  SceneEndpoints
);

const CoordinateSystemSchema = z.object({
  name: z.string(),
  axes: z.array(AxesSchema),
});

const StrictMultiscale = z.object({
  name: z.string(),
  datasets: z
    .array(
      z.object({
        path: z.string(),
        coordinateTransformations: z.array(
          DatasetCoordinateTransformationSchema
        ),
      }),
    )
    .min(1),
  coordinateSystems: z.array(CoordinateSystemSchema).optional(),
  coordinateTransformations: z.array(
    MultiscaleCoordinateTransformationSchema
  ).optional(),
});

const Multiscale = StrictMultiscale.partial({
  name: true,
});

const Omero = z.object({
  channels: z.array(
    z.object({
      window: z
        .object({
          end: z.number(),
          max: z.number(),
          min: z.number(),
          start: z.number(),
        })
        .optional(),
      label: z.string().optional(),
      family: z.string().optional(),
      color: z.string().optional(),
      active: z.boolean().optional(),
    })
  ),
});

function createImageSchema<T extends z.ZodTypeAny>(Multiscale: T) {
  return z.object({
    multiscales: z.array(Multiscale)
      .min(1)
      .describe("The multiscale datasets for this image"),
    omero: Omero.optional(),
  });
}

export const ImageSchema = withVersion(createImageSchema(Multiscale).shape);

export const StrictImageSchema = withVersion(createImageSchema(StrictMultiscale).shape);

// Label

const StrictImageLabelSchema = z.object({
  colors: z
    .array(
      z.object({
        "label-value": z.number().describe("The value of the label"),
        rgba: z
          .array(z.number().int().gte(0).lte(255))
          .min(4)
          .max(4)
          .describe(
            "The RGBA color stored as an array of four integers between 0 and 255",
          )
          .optional(),
      }),
    )
    .min(1)
    .describe("The colors for this label image")
    .superRefine((colors, ctx) => {
      let label_values = colors.map((color) => color["label-value"]);
      if (colors.length !== new Set(label_values).size) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `No duplicate color_labels allowed.`,
        });
      }
    }),
  properties: z
    .array(
      z.object({
        "label-value": z
          .number()
          .int()
          .describe("The pixel value for this label"),
      }),
    )
    .min(1)
    .describe("The properties for this label image")
    .optional(),
  source: z
    .object({ image: z.string().optional() })
    .describe("The source of this label image")
    .optional(),
});

const ImageLabelSchema = StrictImageLabelSchema.partial({
  colors: true,
});

export const LabelSchema = withVersion(z.object({
  "image-label": ImageLabelSchema,
  "multiscales": z.array(Multiscale)
}).shape);

export const StrictLabelSchema = withVersion(z.object({
  "image-label": StrictImageLabelSchema,
  "multiscales": z.array(Multiscale)
}).shape);

// Well

const StrictInnerWellSchema = z.object({
  images: z
    .array(
      z.object({
        acquisition: z
          .number()
          .int()
          .describe("A unique identifier within the context of the plate")
          .optional(),
        path: z
          .string()
          .regex(new RegExp("^[A-Za-z0-9]+$"))
          .describe("The path for this field of view subgroup"),
      }),
    )
    .min(1)
    .describe("The fields of view for this well")
    .superRefine((imgs, ctx) => {
      let paths = imgs.map((img) => img.path);
      if (imgs.length !== new Set(paths).size) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `No duplicate images allowed.`,
        });
      }
    }),
});


const Scene = z.object({
  coordinateTransformations: z.array(SceneCoordinateTransformationSchema),
  coordinateSystems: z.array(CoordinateSystemSchema).optional(),
});

export const SceneSchema = withVersion(z.object({ scene: Scene }).shape);

export const WellSchema = withVersion(z.object({
  well: StrictInnerWellSchema.partial({})
}).shape);

export const StrictWellSchema = withVersion(z.object({
  well: StrictInnerWellSchema
}).shape);

export const OmeZarrSchema = z.union([
  Bf2RawSchema,
  ImageSchema,
  ImageLabelSchema,
  OmeSchema,
  PlateSchema,
  WellSchema,
  SceneSchema
]);
