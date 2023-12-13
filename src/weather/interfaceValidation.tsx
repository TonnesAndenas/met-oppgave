import {
  IFeature,
  IGeometry,
  IProperties,
  IMeta,
  IUnits,
  ITimeseries,
  IData,
  IInstant,
  IInstantDetails,
  INext12_Hours,
  INext12_HoursDetails,
  INext1_HoursDetails,
  INextHours,
  ISummary,
  SymbolCode,
} from "../types";

const symbolCodes = [
  "clearsky_day",
  "clearsky_night",
  "fair_night",
  "fair_day",
  "partlycloudy_day",
  "cloudy",
  "partlycloudy_night",
  "lightsleet",
  "lightsnow",
  "snow",
  "sleet",
] as const;

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAgainstInterface(data: unknown): data is IFeature {
  const isFeature = (feature: any): feature is IFeature => {
    if (
      typeof feature !== "object" ||
      feature === null ||
      !("type" in feature) ||
      !("geometry" in feature) ||
      !("properties" in feature)
    ) {
      throw new ValidationError("Feature validation failed");
    }

    return isGeometry(feature.geometry) && isProperties(feature.properties);
  };

  const isGeometry = (geometry: any): geometry is IGeometry => {
    if (
      typeof geometry !== "object" ||
      geometry === null ||
      typeof geometry.type !== "string" ||
      !["Point"].includes(geometry.type) ||
      !Array.isArray(geometry.coordinates) ||
      !geometry.coordinates.every((coord: number) => typeof coord === "number")
    ) {
      throw new ValidationError("Geometry validation failed");
    }
    return true;
  };

  const isProperties = (properties: any): properties is IProperties => {
    if (
      typeof properties !== "object" ||
      properties === null ||
      !isMeta(properties.meta) ||
      !Array.isArray(properties.timeseries) ||
      !properties.timeseries.every((timeseries: any) =>
        isTimeseries(timeseries)
      )
    ) {
      throw new ValidationError("Properties validation failed");
    }
    return true;
  };

  const isMeta = (meta: any): meta is IMeta => {
    if (
      typeof meta !== "object" ||
      meta === null ||
      !(meta.updated_at instanceof Date) ||
      !isUnits(meta.units)
    ) {
      throw new ValidationError("Meta validation failed");
    }
    return true;
  };

  const isUnits = (units: any): units is IUnits => {
    const validUnitValues = [
      "air_pressure_at_sea_level",
      "air_temperature",
      "cloud_area_fraction",
      "precipitation_amount",
      "relative_humidity",
      "wind_from_direction",
      "wind_speed",
    ];
    if (
      typeof units !== "object" ||
      units === null ||
      !Object.keys(units).every((key) => validUnitValues.includes(key))
    ) {
      throw new ValidationError("Units validation failed");
    }
    return true;
  };

  const isTimeseries = (timeseries: any): timeseries is ITimeseries => {  
    if (
      typeof timeseries !== "object" ||
      timeseries === null ||
      timeseries === undefined ||
      !(timeseries.time instanceof Date) ||
      !isData(timeseries.data)
    ) {
      throw new ValidationError("Timeseries validation failed");
    }
  
    return true;
  };  

  const isData = (data: any): data is IData => {
    if (
      typeof data !== "object" ||
      data === null ||
      !isInstant(data.instant) ||
      (data.next_12_hours ? !isNext12Hours(data.next_12_hours) : false) ||
      (data.next_1_hours ? !isNextHours(data.next_1_hours) : false) ||
      (data.next_6_hours ? !isNextHours(data.next_6_hours) : false)
    ) {
      throw new ValidationError("Data validation failed");
    }
    return true;
  };

  const isInstant = (instant: any): instant is IInstant => {
    if (
      typeof instant !== "object" ||
      instant === null ||
      !isInstantDetails(instant.details)
    ) {
      throw new ValidationError("Instant validation failed");
    }
    return true;
  };

  const isInstantDetails = (details: any): details is IInstantDetails => {
    if (
      typeof details !== "object" ||
      details === null ||
      typeof details.air_pressure_at_sea_level !== "number" ||
      typeof details.air_temperature !== "number" ||
      typeof details.cloud_area_fraction !== "number" ||
      typeof details.relative_humidity !== "number" ||
      typeof details.wind_from_direction !== "number" ||
      typeof details.wind_speed !== "number"
    ) {
      throw new ValidationError("InstantDetails validation failed");
    }
    return true;
  };

  const isNext12Hours = (next12_hours: any): next12_hours is INext12_Hours => {
    if (
      typeof next12_hours !== "object" ||
      next12_hours === null ||
      !isSummary(next12_hours.summary) ||
      !isNext12HoursDetails(next12_hours.details)
    ) {
      throw new ValidationError("Next12Hours validation failed");
    }
    return true;
  };

  const isNext12HoursDetails = (
    details: any
  ): details is INext12_HoursDetails => {
    if (typeof details !== "object" || details === null) {
      throw new ValidationError("Next12HoursDetails validation failed");
    }
    return true;
  };

  const isSummary = (summary: any): summary is ISummary => {
    if (
      typeof summary !== "object" ||
      summary === null ||
      typeof summary.symbol_code !== "string" ||
      !symbolCodes.includes(summary.symbol_code as SymbolCode)
    ) {
      throw new ValidationError("Summary validation failed");
    }
    return true;
  };

  const isNextHours = (next_hours: any): next_hours is INextHours => {
    if (
      typeof next_hours !== "object" ||
      next_hours === null ||
      !isSummary(next_hours.summary) ||
      !isNext1HoursDetails(next_hours.details)
    ) {
      throw new ValidationError("NextHours validation failed");
    }
    return true;
  };

  const isNext1HoursDetails = (
    details: any
  ): details is INext1_HoursDetails => {
    if (
      typeof details !== "object" ||
      details === null ||
      typeof details.precipitation_amount !== "number"
    ) {
      throw new ValidationError("Next1HoursDetails validation failed");
    }
    return true;
  };

  return isFeature(data);
}

export { validateAgainstInterface, ValidationError };
