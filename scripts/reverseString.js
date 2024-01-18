function reverseString(str) {
    if (typeof str === "string" || str instanceof String) {
        const splitted = str.split("");
        const reversed = [...splitted].reverse();

        return reversed.join("").trim();
    }

    return "Invalid argument type";
}

export default reverseString;
