import example from "./example";

describe("Jest Test Example", () => {
  it("returns the sum of two arguments passed into the example function", () => {
    const a = 1;
    const b = 1;
    const expectedResult = 2;

    const result = example(a, b);

    expect(result).toEqual(expectedResult);
  });
});
