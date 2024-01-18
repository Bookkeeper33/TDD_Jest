import reverseString from "../scripts/reverseString";

describe("String reverse tests", () => {
    test("Reverse string simple case", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test("String reverse with two words", () => {
        expect(reverseString("hello world")).toBe("dlrow olleh");
    });

    test("String with chars and numbers", () => {
        expect(
            reverseString("My name is John and i have 250 brothers and sisters")
        ).toBe("sretsis dna srehtorb 052 evah i dna nhoJ si eman yM");
    });

    test("String with chars and numbers and spaces", () => {
        expect(reverseString("  Hello @12F s@ddly I lost my m1nd    ")).toBe(
            "dn1m ym tsol I yldd@s F21@ olleH"
        );
    });

    test("Only digits", () => {
        expect(reverseString("1359862168")).toBe("8612689531");
    });

    test("Pass digits as number", () => {
        expect(reverseString(1234)).toBe("Invalid argument type");
    });

    test("Pass object as argument", () => {
        expect(reverseString({ number: 1492 })).toBe("Invalid argument type");
    });
});
