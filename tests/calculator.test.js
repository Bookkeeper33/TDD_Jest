import calculator from "../scripts/calculator";

describe("Calculator tests", () => {
    // Tests for ints
    test("sum two numbers", () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    test("subtract two number", () => {
        expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test("divide two number", () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test("multiply two number", () => {
        expect(calculator.multiply(5, 10)).toBe(50);
    });

    // Tests for floating numbers
    test("sum two floating numbers", () => {
        expect(calculator.add(2.3, 12.9)).toBeCloseTo(15.2);
    });

    test("subtract two floating numbers", () => {
        expect(calculator.subtract(21.5, 58.43)).toBeCloseTo(-36.93);
    });

    test("divide two floating numbers", () => {
        expect(calculator.divide(203.85, 44.2)).toBeCloseTo(4.61);
    });

    test("multiply two floating numbers", () => {
        expect(calculator.multiply(34.13, 5.58)).toBeCloseTo(190.45);
    });

    test("Arguments validity: string and number", () => {
        expect(calculator.add("12", 34)).toBe("Invalid data type in argument");
    });

    test("Arguments validity: both strings", () => {
        expect(calculator.add("12", "12")).toBe(
            "Invalid data type in argument"
        );
    });

    test("Division by zero", () => {
        expect(() => calculator.divide(10, 0)).toThrow("C'mon can't divide by 0");
    });
});
