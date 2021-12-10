import { payRollAddAdjustment } from "./script.js";

describe("payRollAddAjustment()", () => {
  it("should return 12 when we pass 10 as a value", () => {
    expect(payRollAddAdjustment(10)).toBe(12);
  });

  it("should return 2000 when we pass 2300 as a value", () => {
    expect(payRollAddAdjustment(2000)).toBe(2300);
  });

  it("should return 5000 when we pass 5500 as a value", () => {
    expect(payRollAddAdjustment(5000)).toBe(5500);
  });

  it("should return 8500 when we pass 8925 as a value", () => {
    expect(payRollAddAdjustment(8500)).toBe(8925);
  });
});
