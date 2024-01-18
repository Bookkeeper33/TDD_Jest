import capitalize from "../scripts/capitalize";

describe("Capitalization", () => {
    test("Simple string capitalization", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test("Already first letter Capitalize", () => {
        expect(capitalize("Test")).toBe("Test");
    });

    test("All word in upper case", () => {
        expect(capitalize("HELLO")).toBe("HELLO");
    });

    test("Big sentence test", () => {
        expect(capitalize("hello world my name is Bookkeeper")).toBe(
            "Hello world my name is Bookkeeper"
        );
    });

    test("Word starting with number", () => {
        expect(capitalize("1tester")).toBe("1Tester");
    });

    test("String with numbers and symbols", () => {
        expect(capitalize("141354@513@%%!@")).toBe("141354@513@%%!@");
    });

    test("Big sentence test with numbers and special symbols", () => {
        expect(capitalize("1488 !@ y name is Bookkeeper   ")).toBe(
            "1488 !@ Y name is Bookkeeper"
        );
    });

    test("String with spaces, numbers and special chars", () => {
        expect(capitalize(" 13@!5s5as%  ")).toBe("13@!5S5as%");
    });

    test("Passing other types of data", () => {
        expect(capitalize(5319)).toBe("Invalid argument type");
    });

    test("Passing other types of data", () => {
        expect(capitalize({ string: "hello" })).toBe("Invalid argument type");
    });

    test("Passing other types of data", () => {
        expect(capitalize(() => "hello world")).toBe("Invalid argument type");
    });
});
