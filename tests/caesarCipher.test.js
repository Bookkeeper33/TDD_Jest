import caesarCipher from "../scripts/caesarCipher";

describe("Caesar Cipher test", () => {
    test("Test case with standard latin alphabet", () => {
        expect(caesarCipher("Hello World", 3)).toBe("Khoor Zruog");
    });

    test("Number, punctuation test case", () => {
        expect(caesarCipher("my Name iS Eddy! 12 YEARS oLD. Tod@y", 10)).toBe(
            "wi Xkwo sC Onni! 12 IOKBC yVN. Dyn@i"
        );
    });

    test("Number, symbol, spaces and punctuation", () => {
        expect(caesarCipher("a1ab#bc c", 1)).toBe("b1bc#cd d");
    });

    test('Passing wrong arguments"', () => {
        expect(caesarCipher(1, "stt")).toBe(
            "Invalid input. Please provide a string and an integer."
        );
    });
});
