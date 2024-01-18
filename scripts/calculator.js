const calculator = (function () {
    function add(a, b) {
        if (!checkType(a, b)) return showError();

        return a + b;
    }

    function subtract(a, b) {
        if (!checkType(a, b)) return showError();
        return a - b;
    }

    function divide(a, b) {
        if (!checkType(a, b)) return showError();

        if (b === 0) throw new Error("C'mon can't divide by 0");

        return a / b;
    }

    function multiply(a, b) {
        if (!checkType(a, b)) return showError();
        return a * b;
    }

    return { add, subtract, divide, multiply };
})();

function checkType(a, b) {
    if (Number.isFinite(a) && Number.isFinite(b)) {
        return true;
    }

    return false;
}

function showError() {
    return "Invalid data type in argument";
}

export default calculator;
