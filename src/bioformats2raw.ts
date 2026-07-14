
import { z } from "zod";

const baseTypeSchema = z.object({});

const affineTransformSchema = baseTypeSchema.extend({
  A00: z.number(),
  A01: z.number(),
  A02: z.number(),
  A10: z.number(),
  A11: z.number(),
  A12: z.number(),
});

export const annotationIDSchema = z.string();

const referenceSchema = baseTypeSchema;

const arcTypeTypeTypeSchema = z.union([
  z.literal("Hg"),
  z.literal("Xe"),
  z.literal("HgXe"),
  z.literal("Other"),
]);

export const base64BinarySchema = z.string();

export const binningSchema = z.union([
  z.literal("1x1"),
  z.literal("2x2"),
  z.literal("4x4"),
  z.literal("8x8"),
  z.literal("Other"),
]);

export const channelIDSchema = z.string();


const channelTypeAcquisitionModeTypeSchema = z.union([
  z.literal("WideField"),
  z.literal("LaserScanningConfocalMicroscopy"),
  z.literal("SpinningDiskConfocal"),
  z.literal("SlitScanConfocal"),
  z.literal("MultiPhotonMicroscopy"),
  z.literal("StructuredIllumination"),
  z.literal("SingleMoleculeImaging"),
  z.literal("TotalInternalReflection"),
  z.literal("FluorescenceLifetime"),
  z.literal("SpectralImaging"),
  z.literal("FluorescenceCorrelationSpectroscopy"),
  z.literal("NearFieldScanningOpticalMicroscopy"),
  z.literal("SecondHarmonicGenerationImaging"),
  z.literal("PALM"),
  z.literal("STORM"),
  z.literal("STED"),
  z.literal("TIRF"),
  z.literal("FSM"),
  z.literal("LCM"),
  z.literal("Other"),
  z.literal("BrightField"),
  z.literal("SweptFieldConfocal"),
  z.literal("SPIM"),
]);

const channelTypeContrastMethodTypeSchema = z.union([
  z.literal("Brightfield"),
  z.literal("Phase"),
  z.literal("DIC"),
  z.literal("HoffmanModulation"),
  z.literal("ObliqueIllumination"),
  z.literal("PolarizedLight"),
  z.literal("Darkfield"),
  z.literal("Fluorescence"),
  z.literal("Other"),
]);

export const unitsLengthSchema = z.union([
  z.literal("Ym"),
  z.literal("Zm"),
  z.literal("Em"),
  z.literal("Pm"),
  z.literal("Tm"),
  z.literal("Gm"),
  z.literal("Mm"),
  z.literal("km"),
  z.literal("hm"),
  z.literal("dam"),
  z.literal("m"),
  z.literal("dm"),
  z.literal("cm"),
  z.literal("mm"),
  z.literal("\u00B5m"),
  z.literal("nm"),
  z.literal("pm"),
  z.literal("fm"),
  z.literal("am"),
  z.literal("zm"),
  z.literal("ym"),
  z.literal("\u00C5"),
  z.literal("thou"),
  z.literal("li"),
  z.literal("in"),
  z.literal("ft"),
  z.literal("yd"),
  z.literal("mi"),
  z.literal("ua"),
  z.literal("ly"),
  z.literal("pc"),
  z.literal("pt"),
  z.literal("pixel"),
  z.literal("reference frame"),
]);

const channelTypeIlluminationTypeTypeSchema = z.union([
  z.literal("Transmitted"),
  z.literal("Epifluorescence"),
  z.literal("Oblique"),
  z.literal("NonLinear"),
  z.literal("Other"),
]);

const annotationRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const filterSetRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

export const colorSchema = z.number();

export const datasetIDSchema = z.string();

const datasetRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const experimenterGroupRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const experimenterRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const imageRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});


export const detectorIDSchema = z.string();

const settingsSchema = referenceSchema;

export const unitsFrequencySchema = z.union([
  z.literal("YHz"),
  z.literal("ZHz"),
  z.literal("EHz"),
  z.literal("PHz"),
  z.literal("THz"),
  z.literal("GHz"),
  z.literal("MHz"),
  z.literal("kHz"),
  z.literal("hHz"),
  z.literal("daHz"),
  z.literal("Hz"),
  z.literal("dHz"),
  z.literal("cHz"),
  z.literal("mHz"),
  z.literal("\u00B5Hz"),
  z.literal("nHz"),
  z.literal("pHz"),
  z.literal("fHz"),
  z.literal("aHz"),
  z.literal("zHz"),
  z.literal("yHz"),
]);

export const unitsElectricPotentialSchema = z.union([
  z.literal("YV"),
  z.literal("ZV"),
  z.literal("EV"),
  z.literal("PV"),
  z.literal("TV"),
  z.literal("GV"),
  z.literal("MV"),
  z.literal("kV"),
  z.literal("hV"),
  z.literal("daV"),
  z.literal("V"),
  z.literal("dV"),
  z.literal("cV"),
  z.literal("mV"),
  z.literal("\u00B5V"),
  z.literal("nV"),
  z.literal("pV"),
  z.literal("fV"),
  z.literal("aV"),
  z.literal("zV"),
  z.literal("yV"),
]);

const manufacturerSpecSchema = baseTypeSchema.extend({
  LotNumber: z.string().optional(),
  Manufacturer: z.string().optional(),
  Model: z.string().optional(),
  SerialNumber: z.string().optional(),
});

const detectorTypeTypeTypeSchema = z.union([
  z.literal("CCD"),
  z.literal("IntensifiedCCD"),
  z.literal("AnalogVideo"),
  z.literal("PMT"),
  z.literal("Photodiode"),
  z.literal("Spectroscopy"),
  z.literal("LifetimeImaging"),
  z.literal("CorrelationSpectroscopy"),
  z.literal("FTIR"),
  z.literal("EMCCD"),
  z.literal("APD"),
  z.literal("CMOS"),
  z.literal("EBCCD"),
  z.literal("Other"),
]);

export const dichroicIDSchema = z.string();

const dichroicRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const dichroicTypeSchema = manufacturerSpecSchema.extend({
  ID: z.string(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
});

export const experimenterGroupIDSchema = z.string();

const leaderTypeSchema = referenceSchema.extend({
  ID: z.string(),
});


export const experimenterIDSchema = z.string();

const experimenterTypeSchema = baseTypeSchema.extend({
  Email: z.string().optional(),
  FirstName: z.string().optional(),
  ID: z.string(),
  Institution: z.string().optional(),
  LastName: z.string().optional(),
  MiddleName: z.string().optional(),
  UserName: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
});

export const experimentIDSchema = z.string();

const experimentRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const typeSchema = z.union([
  z.literal("FP"),
  z.literal("FRET"),
  z.literal("TimeLapse"),
  z.literal("FourDPlus"),
  z.literal("Screen"),
  z.literal("Immunocytochemistry"),
  z.literal("Immunofluorescence"),
  z.literal("FISH"),
  z.literal("Electrophysiology"),
  z.literal("IonImaging"),
  z.literal("Colocalization"),
  z.literal("PGIDocumentation"),
  z.literal("FluorescenceLifetime"),
  z.literal("SpectralImaging"),
  z.literal("Photobleaching"),
  z.literal("SPIM"),
  z.literal("Other"),
]);

const filamentTypeTypeTypeSchema = z.union([
  z.literal("Incandescent"),
  z.literal("Halogen"),
  z.literal("Other"),
]);

export const filterIDSchema = z.string();

const filterRefSchema = referenceSchema.extend({
  ID: z.string(),
});

export const filterSetIDSchema = z.string();

const filterSetTypeSchema = manufacturerSpecSchema.extend({
  ID: z.string(),
  DichroicRef: dichroicRefTypeSchema.optional(),
  EmissionFilterRef: z.array(filterRefSchema).optional(),
  ExcitationFilterRef: z.array(filterRefSchema).optional(),
});

const filterTypeTypeTypeSchema = z.union([
  z.literal("Dichroic"),
  z.literal("LongPass"),
  z.literal("ShortPass"),
  z.literal("BandPass"),
  z.literal("MultiPass"),
  z.literal("NeutralDensity"),
  z.literal("Tuneable"),
  z.literal("Other"),
]);

const transmittanceRangeTypeSchema = baseTypeSchema.extend({
  CutIn: z.number().optional(),
  CutInTolerance: z.number().optional(),
  CutInToleranceUnit: unitsLengthSchema.optional(),
  CutInUnit: unitsLengthSchema.optional(),
  CutOut: z.number().optional(),
  CutOutTolerance: z.number().optional(),
  CutOutToleranceUnit: unitsLengthSchema.optional(),
  CutOutUnit: unitsLengthSchema.optional(),
  Transmittance: z.number().optional(),
});

export const folderIDSchema = z.string();

const folderRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const rOIRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});


export const fontFamilySchema = z.union([
  z.literal("serif"),
  z.literal("sans-serif"),
  z.literal("cursive"),
  z.literal("fantasy"),
  z.literal("monospace"),
]);

export const hex40Schema = z.string();

export const imageIDSchema = z.string();

const instrumentRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const microbeamManipulationRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const stageLabelTypeSchema = baseTypeSchema.extend({
  Name: z.string(),
  X: z.number().optional(),
  XUnit: unitsLengthSchema.optional(),
  Y: z.number().optional(),
  YUnit: unitsLengthSchema.optional(),
  Z: z.number().optional(),
  ZUnit: unitsLengthSchema.optional(),
});


export const unitsPressureSchema = z.union([
  z.literal("YPa"),
  z.literal("ZPa"),
  z.literal("EPa"),
  z.literal("PPa"),
  z.literal("TPa"),
  z.literal("GPa"),
  z.literal("MPa"),
  z.literal("kPa"),
  z.literal("hPa"),
  z.literal("daPa"),
  z.literal("Pa"),
  z.literal("dPa"),
  z.literal("cPa"),
  z.literal("mPa"),
  z.literal("\u00B5Pa"),
  z.literal("nPa"),
  z.literal("pPa"),
  z.literal("fPa"),
  z.literal("aPa"),
  z.literal("zPa"),
  z.literal("yPa"),
  z.literal("bar"),
  z.literal("Mbar"),
  z.literal("kbar"),
  z.literal("dbar"),
  z.literal("cbar"),
  z.literal("mbar"),
  z.literal("atm"),
  z.literal("psi"),
  z.literal("Torr"),
  z.literal("mTorr"),
  z.literal("mm Hg"),
]);

export const unitsTemperatureSchema = z.union([
  z.literal("\u00B0C"),
  z.literal("\u00B0F"),
  z.literal("K"),
  z.literal("\u00B0R"),
]);

export const instrumentIDSchema = z.string();

const detectorTypeSchema = manufacturerSpecSchema.extend({
  AmplificationGain: z.number().optional(),
  Gain: z.number().optional(),
  ID: z.string(),
  Offset: z.number().optional(),
  Type: detectorTypeTypeTypeSchema.optional(),
  Voltage: z.number().optional(),
  VoltageUnit: unitsElectricPotentialSchema.optional(),
  Zoom: z.number().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
});

const filterTypeSchema = manufacturerSpecSchema.extend({
  FilterWheel: z.string().optional(),
  ID: z.string(),
  Type: filterTypeTypeTypeSchema.optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  TransmittanceRange: transmittanceRangeTypeSchema.optional(),
});

const laserTypeLaserMediumTypeSchema = z.union([
  z.literal("Cu"),
  z.literal("Ag"),
  z.literal("ArFl"),
  z.literal("ArCl"),
  z.literal("KrFl"),
  z.literal("KrCl"),
  z.literal("XeFl"),
  z.literal("XeCl"),
  z.literal("XeBr"),
  z.literal("N"),
  z.literal("Ar"),
  z.literal("Kr"),
  z.literal("Xe"),
  z.literal("HeNe"),
  z.literal("HeCd"),
  z.literal("CO"),
  z.literal("CO2"),
  z.literal("H2O"),
  z.literal("HFl"),
  z.literal("NdGlass"),
  z.literal("NdYAG"),
  z.literal("ErGlass"),
  z.literal("ErYAG"),
  z.literal("HoYLF"),
  z.literal("HoYAG"),
  z.literal("Ruby"),
  z.literal("TiSapphire"),
  z.literal("Alexandrite"),
  z.literal("Rhodamine6G"),
  z.literal("CoumarinC30"),
  z.literal("GaAs"),
  z.literal("GaAlAs"),
  z.literal("EMinus"),
  z.literal("Other"),
]);

const laserTypePulseTypeSchema = z.union([
  z.literal("CW"),
  z.literal("Single"),
  z.literal("QSwitched"),
  z.literal("Repetitive"),
  z.literal("ModeLocked"),
  z.literal("Other"),
]);

const laserTypeTypeTypeSchema = z.union([
  z.literal("Excimer"),
  z.literal("Gas"),
  z.literal("MetalVapor"),
  z.literal("SolidState"),
  z.literal("Dye"),
  z.literal("Semiconductor"),
  z.literal("FreeElectron"),
  z.literal("Other"),
]);

const pumpTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const lightPathTypeSchema = baseTypeSchema.extend({
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  DichroicRef: dichroicRefTypeSchema.optional(),
  EmissionFilterRef: z.array(filterRefSchema).optional(),
  ExcitationFilterRef: z.array(filterRefSchema).optional(),
});

export const unitsPowerSchema = z.union([
  z.literal("YW"),
  z.literal("ZW"),
  z.literal("EW"),
  z.literal("PW"),
  z.literal("TW"),
  z.literal("GW"),
  z.literal("MW"),
  z.literal("kW"),
  z.literal("hW"),
  z.literal("daW"),
  z.literal("W"),
  z.literal("dW"),
  z.literal("cW"),
  z.literal("mW"),
  z.literal("\u00B5W"),
  z.literal("nW"),
  z.literal("pW"),
  z.literal("fW"),
  z.literal("aW"),
  z.literal("zW"),
  z.literal("yW"),
]);

export const lightSourceIDSchema = z.string();

const lightSourceSettingsTypeSchema = settingsSchema.extend({
  Attenuation: z.number().optional(),
  ID: z.string(),
  Wavelength: z.number().optional(),
  WavelengthUnit: unitsLengthSchema.optional(),
});

export const markerSchema = z.literal("Arrow");

const annotationSchema = baseTypeSchema.extend({
  Annotator: z.string().optional(),
  ID: z.string(),
  Namespace: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
});

export const lsidSchema = z.string();
export const mapMTypeSchema = z.object({
  K: z.coerce.string(),
});

const mapSchema = baseTypeSchema.extend({
  M: z.array(mapMTypeSchema).optional(),
});

export const microbeamManipulationIDSchema = z.string();


const type2Schema = z.union([
  z.literal("FRAP"),
  z.literal("FLIP"),
  z.literal("InverseFRAP"),
  z.literal("Photoablation"),
  z.literal("Photoactivation"),
  z.literal("Uncaging"),
  z.literal("OpticalTrapping"),
  z.literal("Other"),
]);

const microscopeTypeTypeTypeSchema = z.union([
  z.literal("Upright"),
  z.literal("Inverted"),
  z.literal("Dissection"),
  z.literal("Electrophysiology"),
  z.literal("Other"),
]);

export const moduleIDSchema = z.string();

export const namingConventionSchema = z.union([
  z.literal("letter"),
  z.literal("number"),
]);

export const nonNegativeFloatSchema = z.number();

export const nonNegativeIntSchema = z.number();

export const nonNegativeLongSchema = z.number();

const basicAnnotationSchema = annotationSchema;

export const objectiveIDSchema = z.string();

const objectiveSettingsTypeMediumTypeSchema = z.union([
  z.literal("Air"),
  z.literal("Oil"),
  z.literal("Water"),
  z.literal("Glycerol"),
  z.literal("Other"),
]);

const objectiveTypeCorrectionTypeSchema = z.union([
  z.literal("UV"),
  z.literal("PlanApo"),
  z.literal("PlanFluor"),
  z.literal("SuperFluor"),
  z.literal("VioletCorrected"),
  z.literal("Achro"),
  z.literal("Achromat"),
  z.literal("Fluor"),
  z.literal("Fl"),
  z.literal("Fluar"),
  z.literal("Neofluar"),
  z.literal("Fluotar"),
  z.literal("Apo"),
  z.literal("PlanNeofluar"),
  z.literal("Other"),
]);

const objectiveTypeImmersionTypeSchema = z.union([
  z.literal("Oil"),
  z.literal("Water"),
  z.literal("WaterDipping"),
  z.literal("Air"),
  z.literal("Multi"),
  z.literal("Glycerol"),
  z.literal("Other"),
]);

const datasetTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Name: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
  ExperimenterGroupRef: experimenterGroupRefTypeSchema.optional(),
  ExperimenterRef: experimenterRefTypeSchema.optional(),
  ImageRef: z.array(imageRefTypeSchema).optional(),
});

const experimenterGroupTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Name: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
  ExperimenterRef: z.array(experimenterRefTypeSchema).optional(),
  Leader: z.array(leaderTypeSchema).optional(),
});

const folderTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Name: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
  FolderRef: z.array(folderRefTypeSchema).optional(),
  ImageRef: z.array(imageRefTypeSchema).optional(),
  ROIRef: z.array(rOIRefTypeSchema).optional(),
});

const projectTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Name: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  DatasetRef: z.array(datasetRefTypeSchema).optional(),
  Description: z.string().optional(),
  ExperimenterGroupRef: experimenterGroupRefTypeSchema.optional(),
  ExperimenterRef: experimenterRefTypeSchema.optional(),
});

const rightsTypeSchema = baseTypeSchema.extend({
  RightsHeld: z.string().optional(),
  RightsHolder: z.string().optional(),
});

export const percentFractionSchema = z.number();

export const pixelsIDSchema = z.string();

const pixelsTypeDimensionOrderTypeSchema = z.union([
  z.literal("XYZCT"),
  z.literal("XYZTC"),
  z.literal("XYCTZ"),
  z.literal("XYCZT"),
  z.literal("XYTCZ"),
  z.literal("XYTZC"),
]);

export const unitsTimeSchema = z.union([
  z.literal("Ys"),
  z.literal("Zs"),
  z.literal("Es"),
  z.literal("Ps"),
  z.literal("Ts"),
  z.literal("Gs"),
  z.literal("Ms"),
  z.literal("ks"),
  z.literal("hs"),
  z.literal("das"),
  z.literal("s"),
  z.literal("ds"),
  z.literal("cs"),
  z.literal("ms"),
  z.literal("\u00B5s"),
  z.literal("ns"),
  z.literal("ps"),
  z.literal("fs"),
  z.literal("as"),
  z.literal("zs"),
  z.literal("ys"),
  z.literal("min"),
  z.literal("h"),
  z.literal("d"),
]);

export const pixelTypeSchema = z.union([
  z.literal("int8"),
  z.literal("int16"),
  z.literal("int32"),
  z.literal("uint8"),
  z.literal("uint16"),
  z.literal("uint32"),
  z.literal("float"),
  z.literal("double"),
  z.literal("complex"),
  z.literal("double-complex"),
  z.literal("bit"),
]);

const planeTypeSchema = baseTypeSchema.extend({
  DeltaT: z.number().optional(),
  DeltaTUnit: unitsTimeSchema.optional(),
  ExposureTime: z.number().optional(),
  ExposureTimeUnit: unitsTimeSchema.optional(),
  PositionX: z.number().optional(),
  PositionXUnit: unitsLengthSchema.optional(),
  PositionY: z.number().optional(),
  PositionYUnit: unitsLengthSchema.optional(),
  PositionZ: z.number().optional(),
  PositionZUnit: unitsLengthSchema.optional(),
  TheC: z.number(),
  TheT: z.number(),
  TheZ: z.number(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  HashSHA1: z.string().optional(),
});

export const plateAcquisitionIDSchema = z.string();

const wellSampleRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});


export const plateIDSchema = z.string();

const plateAcquisitionTypeSchema = baseTypeSchema.extend({
  EndTime: z.string().pipe(z.coerce.date()).optional(),
  ID: z.string(),
  MaximumFieldCount: z.number().optional(),
  Name: z.string().optional(),
  StartTime: z.string().pipe(z.coerce.date()).optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
  WellSampleRef: z.array(wellSampleRefTypeSchema).optional(),
});


export const positiveFloatSchema = z.number();

export const positiveIntSchema = z.number();

export const projectIDSchema = z.string();

export const reagentIDSchema = z.string();

const reagentRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});

const reagentTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Name: z.string().optional(),
  ReagentIdentifier: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
});


export const roiidSchema = z.string();


export const screenIDSchema = z.string();

const screenTypePlateRefTypeSchema = referenceSchema.extend({
  ID: z.string(),
});


const shapeFillRuleTypeSchema = z.union([
  z.literal("EvenOdd"),
  z.literal("NonZero"),
]);

const shapeFontFamilyTypeSchema = z.union([
  z.literal("serif"),
  z.literal("sans-serif"),
  z.literal("cursive"),
  z.literal("fantasy"),
  z.literal("monospace"),
]);

const shapeFontStyleTypeSchema = z.union([
  z.literal("Bold"),
  z.literal("BoldItalic"),
  z.literal("Italic"),
  z.literal("Normal"),
]);

export const shapeIDSchema = z.string();

const booleanAnnotationTypeSchema = basicAnnotationSchema.extend({
  Value: z.boolean(),
});

const listAnnotationTypeSchema = annotationSchema;

const mapAnnotationTypeSchema = annotationSchema.extend({
  Value: mapSchema,
});

const termAnnotationTypeSchema = basicAnnotationSchema.extend({
  Value: z.string(),
});

export const timestampAnnotationTypeSchema = basicAnnotationSchema.extend({
  Value: z.string().pipe(z.coerce.date()),
});


const textAnnotationSchema = annotationSchema;

const typeAnnotationSchema = annotationSchema;

export const unitsAngleSchema = z.union([
  z.literal("deg"),
  z.literal("rad"),
  z.literal("gon"),
]);

export const universallyUniqueIdentifierSchema = z.string();

export const wellIDSchema = z.string();

export const wellSampleIDSchema = z.string();

const wellSampleTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Index: z.number(),
  PositionX: z.number().optional(),
  PositionXUnit: unitsLengthSchema.optional(),
  PositionY: z.number().optional(),
  PositionYUnit: unitsLengthSchema.optional(),
  Timepoint: z.string().pipe(z.coerce.date()).optional(),
  ImageRef: imageRefTypeSchema.optional(),
});

const wellTypeSchema = baseTypeSchema.extend({
  Color: z.number().optional(),
  Column: z.number(),
  ExternalDescription: z.string().optional(),
  ExternalIdentifier: z.string().optional(),
  ID: z.string(),
  Row: z.number(),
  Type: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  ReagentRef: reagentRefTypeSchema.optional(),
  WellSample: z.array(wellSampleTypeSchema).optional(),
});

const xMLAnnotationTypeValueTypeSchema = baseTypeSchema;

const lightSourceSchema = manufacturerSpecSchema.extend({
  ID: z.string(),
  Power: z.number().optional(),
  PowerUnit: unitsPowerSchema.optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
});

const detectorSettingsTypeSchema = settingsSchema.extend({
  Binning: binningSchema.optional(),
  Gain: z.number().optional(),
  ID: z.string(),
  Integration: z.number().optional(),
  Offset: z.number().optional(),
  ReadOutRate: z.number().optional(),
  ReadOutRateUnit: unitsFrequencySchema.optional(),
  Voltage: z.number().optional(),
  VoltageUnit: unitsElectricPotentialSchema.optional(),
  Zoom: z.number().optional(),
});

const commentAnnotationTypeSchema = textAnnotationSchema.extend({
  Value: z.string(),
});

const numericAnnotationSchema = basicAnnotationSchema;

const shapeSchema = baseTypeSchema.extend({
  FillColor: z.number().optional(),
  FillRule: shapeFillRuleTypeSchema.optional(),
  FontFamily: shapeFontFamilyTypeSchema.optional(),
  FontSize: z.number().optional(),
  FontSizeUnit: unitsLengthSchema.optional(),
  FontStyle: shapeFontStyleTypeSchema.optional(),
  ID: z.string(),
  Locked: z.boolean().optional(),
  StrokeColor: z.number().optional(),
  StrokeDashArray: z.string().optional(),
  StrokeWidth: z.number().optional(),
  StrokeWidthUnit: unitsLengthSchema.optional(),
  Text: z.string().optional(),
  TheC: z.number().optional(),
  TheT: z.number().optional(),
  TheZ: z.number().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Transform: affineTransformSchema.optional(),
});

const experimentTypeTypeTypeSchema = z.array(typeSchema);
const filamentTypeSchema = lightSourceSchema.extend({
  Type: filamentTypeTypeTypeSchema.optional(),
});

const fileAnnotationTypeSchema = typeAnnotationSchema;

const genericExcitationSourceTypeSchema = lightSourceSchema.extend({
  Map: mapSchema.optional(),
});

const imagingEnvironmentTypeSchema = baseTypeSchema.extend({
  AirPressure: z.number().optional(),
  AirPressureUnit: unitsPressureSchema.optional(),
  CO2Percent: z.number().optional(),
  Humidity: z.number().optional(),
  Temperature: z.number().optional(),
  TemperatureUnit: unitsTemperatureSchema.optional(),
  Map: mapSchema.optional(),
});

const objectiveSettingsTypeSchema = settingsSchema.extend({
  CorrectionCollar: z.number().optional(),
  ID: z.string(),
  Medium: objectiveSettingsTypeMediumTypeSchema.optional(),
  RefractiveIndex: z.number().optional(),
});

const microscopeTypeSchema = manufacturerSpecSchema.extend({
  Type: microscopeTypeTypeTypeSchema.optional(),
});

const objectiveTypeSchema = manufacturerSpecSchema.extend({
  CalibratedMagnification: z.number().optional(),
  Correction: objectiveTypeCorrectionTypeSchema.optional(),
  ID: z.string(),
  Immersion: objectiveTypeImmersionTypeSchema.optional(),
  Iris: z.boolean().optional(),
  LensNA: z.number().optional(),
  NominalMagnification: z.number().optional(),
  WorkingDistance: z.number().optional(),
  WorkingDistanceUnit: unitsLengthSchema.optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
});

const labelTypeSchema = shapeSchema.extend({
  X: z.number(),
  Y: z.number(),
});

const laserTypeSchema = lightSourceSchema.extend({
  FrequencyMultiplication: z.number().optional(),
  LaserMedium: laserTypeLaserMediumTypeSchema.optional(),
  PockelCell: z.boolean().optional(),
  Pulse: laserTypePulseTypeSchema.optional(),
  RepetitionRate: z.number().optional(),
  RepetitionRateUnit: unitsFrequencySchema.optional(),
  Tuneable: z.boolean().optional(),
  Type: laserTypeTypeTypeSchema.optional(),
  Wavelength: z.number().optional(),
  WavelengthUnit: unitsLengthSchema.optional(),
  Pump: pumpTypeSchema.optional(),
});

const lightEmittingDiodeTypeSchema = lightSourceSchema;

const arcTypeSchema = lightSourceSchema.extend({
  Type: arcTypeTypeTypeSchema.optional(),
});

const lineTypeSchema = shapeSchema.extend({
  MarkerEnd: markerSchema.optional(),
  MarkerStart: markerSchema.optional(),
  X1: z.number(),
  X2: z.number(),
  Y1: z.number(),
  Y2: z.number(),
});

const longAnnotationTypeSchema = numericAnnotationSchema.extend({
  Value: z.number(),
});

const maskTypeSchema = shapeSchema.extend({
  Height: z.number(),
  Width: z.number(),
  X: z.number(),
  Y: z.number(),
});

const microbeamManipulationTypeTypeTypeSchema = z.array(type2Schema);

const plateTypeSchema = baseTypeSchema.extend({
  ColumnNamingConvention: namingConventionSchema.optional(),
  Columns: z.number().optional(),
  ExternalIdentifier: z.string().optional(),
  FieldIndex: z.number().optional(),
  ID: z.string(),
  Name: z.string().optional(),
  RowNamingConvention: namingConventionSchema.optional(),
  Rows: z.number().optional(),
  Status: z.string().optional(),
  WellOriginX: z.number().optional(),
  WellOriginXUnit: unitsLengthSchema.optional(),
  WellOriginY: z.number().optional(),
  WellOriginYUnit: unitsLengthSchema.optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
  PlateAcquisition: z.array(plateAcquisitionTypeSchema).optional(),
  Well: z.array(wellTypeSchema).optional(),
});

const screenTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Name: z.string().optional(),
  ProtocolDescription: z.string().optional(),
  ProtocolIdentifier: z.string().optional(),
  ReagentSetDescription: z.string().optional(),
  ReagentSetIdentifier: z.string().optional(),
  Type: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
  PlateRef: z.array(screenTypePlateRefTypeSchema).optional(),
  Reagent: z.array(reagentTypeSchema).optional(),
});

const channelTypeSchema = baseTypeSchema.extend({
  AcquisitionMode: channelTypeAcquisitionModeTypeSchema.optional(),
  Color: z.number().optional(),
  ContrastMethod: channelTypeContrastMethodTypeSchema.optional(),
  EmissionWavelength: z.number().optional(),
  EmissionWavelengthUnit: unitsLengthSchema.optional(),
  ExcitationWavelength: z.number().optional(),
  ExcitationWavelengthUnit: unitsLengthSchema.optional(),
  Fluor: z.string().optional(),
  ID: z.string(),
  IlluminationType: channelTypeIlluminationTypeTypeSchema.optional(),
  Name: z.string().optional(),
  NDFilter: z.number().optional(),
  PinholeSize: z.number().optional(),
  PinholeSizeUnit: unitsLengthSchema.optional(),
  PockelCellSetting: z.number().optional(),
  SamplesPerPixel: z.coerce.number().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  DetectorSettings: detectorSettingsTypeSchema.optional(),
  FilterSetRef: filterSetRefTypeSchema.optional(),
  LightPath: lightPathTypeSchema.optional(),
  LightSourceSettings: lightSourceSettingsTypeSchema.optional(),
});

const pointTypeSchema = shapeSchema.extend({
  X: z.number(),
  Y: z.number(),
});

const polygonTypeSchema = shapeSchema.extend({
  Points: z.string(),
});

const polylineTypeSchema = shapeSchema.extend({
  MarkerEnd: markerSchema.optional(),
  MarkerStart: markerSchema.optional(),
  Points: z.string(),
});

const rectangleTypeSchema = shapeSchema.extend({
  Height: z.number(),
  Width: z.number(),
  X: z.number(),
  Y: z.number(),
});

const ellipseTypeSchema = shapeSchema.extend({
  RadiusX: z.number(),
  RadiusY: z.number(),
  X: z.number(),
  Y: z.number(),
});

const doubleAnnotationTypeSchema = numericAnnotationSchema.extend({
  Value: z.number(),
});

const tagAnnotationTypeSchema = textAnnotationSchema.extend({
  Value: z.string(),
});

const xMLAnnotationTypeSchema = textAnnotationSchema.extend({
  Value: xMLAnnotationTypeValueTypeSchema,
});

const microbeamManipulationTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Type: microbeamManipulationTypeTypeTypeSchema.optional(),
  Description: z.string().optional(),
  ExperimenterRef: experimenterRefTypeSchema,
  LightSourceSettings: z.array(lightSourceSettingsTypeSchema).optional(),
  ROIRef: z.array(rOIRefTypeSchema),
});

const pixelsTypeSchema = baseTypeSchema.extend({
  BigEndian: z.coerce.boolean().optional(),
  DimensionOrder: pixelsTypeDimensionOrderTypeSchema,
  ID: z.string(),
  Interleaved: z.coerce.boolean().optional(),
  PhysicalSizeX: z.coerce.number().optional(),
  PhysicalSizeXUnit: unitsLengthSchema.optional(),
  PhysicalSizeY: z.coerce.number().optional(),
  PhysicalSizeYUnit: unitsLengthSchema.optional(),
  PhysicalSizeZ: z.coerce.number().optional(),
  PhysicalSizeZUnit: unitsLengthSchema.optional(),
  SignificantBits: z.coerce.number().optional(),
  SizeC: z.coerce.number(),
  SizeT: z.coerce.number(),
  SizeX: z.coerce.number(),
  SizeY: z.coerce.number(),
  SizeZ: z.coerce.number(),
  TimeIncrement: z.coerce.number().optional(),
  TimeIncrementUnit: unitsTimeSchema.optional(),
  Type: pixelTypeSchema,
  Channel: z.array(channelTypeSchema).optional(),
  Plane: z.array(planeTypeSchema).optional(),
});

const lightSourceGroupProxyTypeSchema = baseTypeSchema.extend({
  Arc: arcTypeSchema.optional(),
  Filament: filamentTypeSchema.optional(),
  GenericExcitationSource: genericExcitationSourceTypeSchema.optional(),
  Laser: laserTypeSchema.optional(),
  LightEmittingDiode: lightEmittingDiodeTypeSchema.optional(),
});

const experimentTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Type: experimentTypeTypeTypeSchema.optional(),
  Description: z.string().optional(),
  ExperimenterRef: experimenterRefTypeSchema.optional(),
  MicrobeamManipulation: z.array(microbeamManipulationTypeSchema).optional(),
});

const imageTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Name: z.union([z.string(), z.number()]).optional(),
  AcquisitionDate: z.string().pipe(z.coerce.date()).optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
  ExperimenterGroupRef: experimenterGroupRefTypeSchema.optional(),
  ExperimenterRef: experimenterRefTypeSchema.optional(),
  ExperimentRef: experimentRefTypeSchema.optional(),
  ImagingEnvironment: imagingEnvironmentTypeSchema.optional(),
  InstrumentRef: instrumentRefTypeSchema.optional(),
  MicrobeamManipulationRef: z
    .array(microbeamManipulationRefTypeSchema)
    .optional(),
  ObjectiveSettings: objectiveSettingsTypeSchema.optional(),
  Pixels: pixelsTypeSchema,
  ROIRef: z.array(rOIRefTypeSchema).optional(),
  StageLabel: stageLabelTypeSchema.optional(),
});

const instrumentTypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Detector: z.array(detectorTypeSchema).optional(),
  Dichroic: z.array(dichroicTypeSchema).optional(),
  Filter: z.array(filterTypeSchema).optional(),
  FilterSet: z.array(filterSetTypeSchema).optional(),
  LightSourceGroup: z.array(lightSourceGroupProxyTypeSchema).optional(),
  Microscope: microscopeTypeSchema.optional(),
  Objective: z.array(objectiveTypeSchema).optional(),
});

const structuredAnnotationsTypeSchema = baseTypeSchema.extend({
  BooleanAnnotation: z.array(booleanAnnotationTypeSchema).optional(),
  CommentAnnotation: z.array(commentAnnotationTypeSchema).optional(),
  DoubleAnnotation: z.array(doubleAnnotationTypeSchema).optional(),
  FileAnnotation: z.array(fileAnnotationTypeSchema).optional(),
  ListAnnotation: z.array(listAnnotationTypeSchema).optional(),
  LongAnnotation: z.array(longAnnotationTypeSchema).optional(),
  MapAnnotation: z.array(mapAnnotationTypeSchema).optional(),
  TagAnnotation: z.array(tagAnnotationTypeSchema).optional(),
  TermAnnotation: z.array(termAnnotationTypeSchema).optional(),
  TimestampAnnotation: z.array(timestampAnnotationTypeSchema).optional(),
  XMLAnnotation: z.array(xMLAnnotationTypeSchema).optional(),
});

const shapeGroupProxyTypeSchema = baseTypeSchema.extend({
  Ellipse: ellipseTypeSchema.optional(),
  Label: labelTypeSchema.optional(),
  Line: lineTypeSchema.optional(),
  Mask: maskTypeSchema.optional(),
  Point: pointTypeSchema.optional(),
  Polygon: polygonTypeSchema.optional(),
  Polyline: polylineTypeSchema.optional(),
  Rectangle: rectangleTypeSchema.optional(),
});

const rOITypeUnionTypeSchema = baseTypeSchema.extend({
  ShapeGroup: z.array(shapeGroupProxyTypeSchema),
});

const rOITypeSchema = baseTypeSchema.extend({
  ID: z.string(),
  Name: z.string().optional(),
  AnnotationRef: z.array(annotationRefTypeSchema).optional(),
  Description: z.string().optional(),
  Union: rOITypeUnionTypeSchema,
});

const OMETypeSchema = baseTypeSchema.extend({
  Creator: z.string().optional(),
  UUID: z.string().optional(),
  Dataset: z.array(datasetTypeSchema).optional(),
  Experiment: z.array(experimentTypeSchema).optional(),
  Experimenter: z.array(experimenterTypeSchema).optional(),
  ExperimenterGroup: z.array(experimenterGroupTypeSchema).optional(),
  Folder: z.array(folderTypeSchema).optional(),
  Image: z.array(imageTypeSchema).optional(),
  Instrument: z.array(instrumentTypeSchema).optional(),
  Plate: z.array(plateTypeSchema).optional(),
  Project: z.array(projectTypeSchema).optional(),
  Rights: rightsTypeSchema.optional(),
  ROI: z.array(rOITypeSchema).optional(),
  Screen: z.array(screenTypeSchema).optional(),
  StructuredAnnotations: structuredAnnotationsTypeSchema.optional(),
});

export const bioformats2rawOMEZattrsSchema = z.object({
  path: z.string(),
  highlight: z.string()
})

export const bioformats2rawOMEXMLSchema = baseTypeSchema.extend({
  OME: OMETypeSchema,
});
