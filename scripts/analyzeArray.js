function analyzeArray(arr) {
    if (!Array.isArray(arr)) throw new Error("Provide an array");
    if (arr.length === 0) throw new Error("Provided an empty array");

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

    return { average, length: arr.length, max, min };
}

export default analyzeArray;
