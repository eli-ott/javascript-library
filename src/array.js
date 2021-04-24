Array.prototype.divide = function () {
    let array = this;
    let firstPart;
    let secondPart;

    firstPart = array.slice(0, array.length / 2);
    secondPart = array.slice(array.length / 2, array.length);

    return {
        'firstPart': firstPart,
        'secondPart': secondPart
    };
}

Array.prototype.hasNumber = function () {
    let array = this;
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let hasNumber;

    for (let i = 0; i < array.length; i++) {
        if (hasNumber) break;
        let char = array[i];

        if (char.length > 1) {
            console.log(char);
            let splitChar = [...char];

            for (let j = 0; j < splitChar.length; j++) {
                if (hasNumber) break;
                let secondChar = splitChar[j];

                for (let k = 0; k < numbers.length; k++) {
                    if (secondChar == numbers[k] && secondChar != ' ') {
                        hasNumber = true;
                        break;
                    } else {
                        hasNumber = false;
                    }
                }
            }

        } else {
            for (let j = 0; j < numbers.length; j++) {
                if (char == numbers[j] && char != ' ') {
                    hasNumber = true;
                    break;
                } else {
                    hasNumber = false;
                }
            }
        }
    }

    return hasNumber
}

Array.prototype.hasCharacter = function () {
    let array = this;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let hasCharacter;

    for (let i = 0; i < array.length; i++) {
        if (hasCharacter) break;
        let char = array[i];

        if (char.length > 1) {
            console.log(char);
            let splitChar = [...char];

            for (let j = 0; j < splitChar.length; j++) {
                if (hasCharacter) break;
                let secondChar = splitChar[j];

                for (let k = 0; k < alphabet.length; k++) {
                    if (secondChar == alphabet[k]) {
                        hasCharacter = true;
                        break;
                    } else {
                        hasCharacter = false;
                    }
                }
            }
        } else {
            for (let j = 0; j < alphabet.length; j++) {
                if (char == alphabet[j] && char != ' ') {
                    hasCharacter = true;
                    break;
                } else {
                    hasCharacter = false;
                }
            }
        }
    }

    return hasCharacter;
}

Array.prototype.moveTo = function (start, end, newArray = [], position = 'end') {
    let array = this;

    for (let i = start - 1; i < end; i++) {
        if (position == 'end') newArray.push(array[i]);
        else if (position == 'start') newArray.unshift(array[i]);
    }

    return newArray;
}

Array.prototype.remove = function (...index) {
    let array = this;

    let removeIndex = 1;
    index.forEach((element) => {
        array.splice(element - removeIndex, 1);
        removeIndex++;
    });

    return array;
}

Array.prototype.keep = function (...index) {
    let array = this;
    let filteredArray = [];

    index.forEach(index => {
        filteredArray.push(array[index - 1]);
    });

    return filteredArray;
}

Array.prototype.noExtraSpace = function () {
    let array = this;
    let filteredArray = [];

    let filterIndex = 0;
    let previousIndex = 0;
    let stringArray = array.toLocaleString();
    let stringPart;

    for (let i = 0; i <= stringArray.length; i++) {
        if (stringArray[i] == ',') {
            stringPart = stringArray.slice(previousIndex, i).trim();
            filteredArray[filterIndex] = stringPart;
            previousIndex = i + 1;
            filterIndex++;
        }
    }

    if (array[array.length - 1] != filteredArray[filteredArray.length - 1]) {
        filteredArray[filteredArray.length - 1] = array[array.length - 1].trim();
    }

    return filteredArray;
}

Array.prototype.noWhiteSpace = function () {
    let array = this;
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] != undefined && array[i] != null && array[i] != ' ' && array[i].length < 2) {
            filteredArray.push(array[i]);
        } else if (array[i].length >= 2) {
            let char = array[i];
            let splitChar = char.split('');
            for (let j = 0; j < splitChar.length; j++) {
                if (splitChar[j] == ' ') {
                    splitChar[j] = '';
                }
            }
            filteredArray.push(splitChar.join(''));
        }
    }

    return filteredArray;
}