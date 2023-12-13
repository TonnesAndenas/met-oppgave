export const expectedWeatherData = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [60.1, 9.58],
  },
  properties: {
    meta: {
      updated_at: new Date(),
      units: {
        air_pressure_at_sea_level: "hPa",
        air_temperature: "°C",
        cloud_area_fraction: "%",
        precipitation_amount: "mm",
        relative_humidity: "%",
        wind_from_direction: "degrees",
        wind_speed: "m/s",
      },
    },
    timeseries: [
      {
        time: new Date("2023-12-13T08:00:00Z"),
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.4,
              air_temperature: -7.6,
              cloud_area_fraction: 15.0,
              relative_humidity: 90.3,
              wind_from_direction: 58.5,
              wind_speed: 1.2,
            },
          },
          next_12_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: {},
          },
          next_1_hours: {
            summary: { symbol_code: "fair_day" },
            details: { precipitation_amount: 0.0 },
          },
          next_6_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: { precipitation_amount: 0.0 },
          },
        },
      },
      {
        time: new Date("2023-12-13T09:00:00Z"),
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.9,
              air_temperature: -8.0,
              cloud_area_fraction: 8.4,
              relative_humidity: 90.2,
              wind_from_direction: 58.6,
              wind_speed: 1.2,
            },
          },
          next_12_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: {},
          },
          next_1_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: { precipitation_amount: 0.0 },
          },
          next_6_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: { precipitation_amount: 0.0 },
          },
        },
      },
      {
        time: new Date("2023-12-13T10:00:00Z"),
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.4,
              air_temperature: -7.6,
              cloud_area_fraction: 4.2,
              relative_humidity: 89.3,
              wind_from_direction: 58.8,
              wind_speed: 0.8,
            },
          },
          next_12_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: {},
          },
          next_1_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: { precipitation_amount: 0.0 },
          },
          next_6_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: { precipitation_amount: 0.0 },
          },
        },
      },
    ],
  },
};

export const mockFetchDataLessThanThreeDays = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [60.1, 9.58],
  },
  properties: {
    meta: {
      updated_at: new Date(),
      units: {
        air_pressure_at_sea_level: "hPa",
        air_temperature: "°C",
        cloud_area_fraction: "%",
        precipitation_amount: "mm",
        relative_humidity: "%",
        wind_from_direction: "degrees",
        wind_speed: "m/s",
      },
    },
    timeseries: [
      {
        time: new Date("2023-12-13T08:00:00Z"),
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.4,
              air_temperature: -7.6,
              cloud_area_fraction: 15.0,
              relative_humidity: 90.3,
              wind_from_direction: 58.5,
              wind_speed: 1.2,
            },
          },
          next_12_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: {},
          },
          next_1_hours: {
            summary: { symbol_code: "fair_day" },
            details: { precipitation_amount: 0.0 },
          },
          next_6_hours: {
            summary: { symbol_code: "clearsky_day" },
            details: { precipitation_amount: 0.0 },
          },
        },
      },
    ],
  },
};

export const mockFetchDataError = {
  status: 400,
  ok: false,
};

