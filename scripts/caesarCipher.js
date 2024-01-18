function caesarCipher(str, shift) {
    if (!isValidInput(str, shift)) {
        return "Invalid input. Please provide a string and an integer.";
    }

    return str
        .split("")
        .map((char) => shiftCharacter(char, shift))
        .join("");
}

function isValidInput(str, shift) {
    return typeof str === "string" && Number.isInteger(shift);
}

function shiftCharacter(char, shift) {
    if (isLetter(char)) {
        return shiftLetter(char, shift);
    }

    return char;
}

function isLetter(char) {
    const charCode = char.charCodeAt(0);
    return (
        (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
        (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0))
    );
}

function shiftLetter(char, shift) {
    const baseChar = char.toLowerCase();
    const baseCharCode = baseChar.charCodeAt(0);
    const shiftAmount = (baseCharCode - "a".charCodeAt(0) + shift) % 26;
    const newCharCode = shiftAmount + "a".charCodeAt(0);

    return baseChar === char
        ? String.fromCharCode(newCharCode)
        : String.fromCharCode(newCharCode).toUpperCase();
}

export default caesarCipher;
