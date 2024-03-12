import sum from "./sum";
import { describe, test, expect } from "vitest";

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
