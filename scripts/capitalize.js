function capitalize(str) {
    if (typeof str === "string" || str instanceof String) {
        const regEx = /[a-zA-Z]/;
        const firstLetterIndex = regEx.exec(str)?.index | 0;

        return (
            str.slice(0, firstLetterIndex) +
            str.split("")[firstLetterIndex].toUpperCase() +
            str.slice(firstLetterIndex + 1)
        ).trim();
    }

    return "Invalid argument type";
}

export default capitalize;
