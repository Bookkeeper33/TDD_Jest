import analyzeArray from "../scripts/analyzeArray";

describe("Array analyzer", () => {
    test("Analyze with positive numbers in array", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test("Analyze with negative numbers in array", () => {
        expect(analyzeArray([-5, 2, -32, 12, -2, 0, 10, 4])).toEqual({
            average: -1.375,
            min: -32,
            max: 12,
            length: 8,
        });
    });

    test("Analyze with empty array", () => {
        expect(() => analyzeArray([])).toThrow("Provided an empty array");
    });

    test("Analyze with another type of provided data: number", () => {
        expect(() => analyzeArray(12)).toThrow("Provide an array");
    });

    test("Analyze with another type of provided data: string", () => {
        expect(() => analyzeArray("hello")).toThrow("Provide an array");
    });

    test("Analyze with another type of provided data: object", () => {
        expect(() => analyzeArray({ name: "John" })).toThrow(
            "Provide an array"
        );
    });
});
