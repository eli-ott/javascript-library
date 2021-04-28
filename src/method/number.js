Number.prototype.divide = function () {
    let number = this;

    number = number.toString();
    let firstPart = number.slice(0, number.length / 2);
    let secondPart = number.slice(number.length / 2, number.length);

    return {
        firstPart,
        secondPart
    };
}

Number.prototype.toBinary = function () {
    let number = this;
    let binaryNumber = [];

    let canReturn = false
    if (!canReturn) {
        for (let i = 0; i < number; number = number / 2) {
            if (Math.floor(number) % 2 == 0 && Math.floor(number) != 1) binaryNumber.unshift(0);
            else if (Math.floor(number) != 1) binaryNumber.unshift(1);

            if (Math.floor(number) == 1) {
                if (Math.floor(number) % 2 == 1) binaryNumber.unshift(1);
                canReturn = true;
                break;
            }
        }

        if (canReturn) {
            return (parseInt(binaryNumber.join('')));
        } else {
            return "Not a valid number";
        }
    }
}