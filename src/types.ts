export interface IFeature {
    type:       string;
    geometry:   IGeometry;
    properties: IProperties;
}

export interface IGeometry {
    type:        string;
    coordinates: number[];
}

export interface IProperties {
    meta:       IMeta;
    timeseries: ITimeseries[];
}

export interface IMeta {
    updated_at: Date;
    units:      IUnits;
}

export interface IUnits {
    air_pressure_at_sea_level: string;
    air_temperature:           string;
    cloud_area_fraction:       string;
    precipitation_amount:      string;
    relative_humidity:         string;
    wind_from_direction:       string;
    wind_speed:                string;
}

export interface ITimeseries {
    time: Date;
    data: IData;
}

export interface IData {
    instant:        IInstant;
    next_12_hours?: INext12_Hours;
    next_1_hours?:  INextHours;
    next_6_hours?:  INextHours;
}

export interface IInstant {
    details: IInstantDetails;
}

export interface IInstantDetails {
    air_pressure_at_sea_level: number;
    air_temperature:           number;
    cloud_area_fraction:       number;
    relative_humidity:         number;
    wind_from_direction:       number;
    wind_speed:                number;
}

export interface INext12_Hours {
    summary: ISummary;
    details: INext12_HoursDetails;
}

export interface INext12_HoursDetails {
}

export interface ISummary {
    symbol_code: SymbolCode;
}

export type SymbolCode = "clearsky_day" | "clearsky_night" | "fair_night" | "fair_day" | "partlycloudy_day" | "cloudy" | "partlycloudy_night" | "lightsleet" | "lightsnow" | "snow" | "sleet";


export interface INextHours {
    summary: ISummary;
    details: INext1_HoursDetails;
}

export interface INext1_HoursDetails {
    precipitation_amount: number;
}
