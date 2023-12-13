import { fetchWeatherDataOslo } from "../fetchWeatherDataOslo";
import { validateAgainstInterface } from "../interfaceValidation";
import { expectedWeatherData } from "../mockData";

describe("getWeatherDataOslo", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch weather data successfully", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(expectedWeatherData),
    });

    const data = await fetchWeatherDataOslo();
    expect(data).toEqual(expectedWeatherData);
  });

  it("should handle fetch error", async () => {
    const errorMessage = "Failed to fetch";
    global.fetch = jest.fn().mockRejectedValue(new Error(errorMessage));

    try {
      await fetchWeatherDataOslo();
    } catch (error: any) {
      expect(error.message).toEqual(errorMessage);
    }
  });

  it("should validate data against the interface", () => {
    const isValid = validateAgainstInterface(expectedWeatherData);
    expect(isValid).toBe(true);
  });

  it("should throw error if data does not validate against interface", () => {
    const invalidData = { ...expectedWeatherData };
    invalidData.properties.timeseries[0].data.next_1_hours.summary.symbol_code =
      "invalid";

    expect(() => validateAgainstInterface(invalidData)).toThrow();
  });

  it("should throw error if data is null", () => {
    expect(() => validateAgainstInterface(null)).toThrow();
  });

  it("should throw error if data is undefined", () => {
    expect(() => validateAgainstInterface(undefined)).toThrow();
  });

  it("should throw error if data is empty", () => {
    expect(() => validateAgainstInterface({})).toThrow();
  });

  it("should throw error if data is not an object", () => {
    expect(() => validateAgainstInterface("")).toThrow();
  });

});
