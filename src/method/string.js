//spliting an array in two method
String.prototype.divide = function () {
    let stringLength = this.length;
    let midString = stringLength / 2;

    let firstPart = this.slice(0, midString);
    let secondPart = this.slice(midString);

    return {
        firstPart,
        secondPart
    };
}

String.prototype.hasNumber = function () {
    let string = this;
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let stringHasNumber;
    for (let i = 0; i < string.length; i++) {
        //we break the loop if we find a number in the string 
        if (stringHasNumber) break;

        let char = string[i];
        for (let j = 0; j < number.length; j++) {
            if (char == number[j] && char != ' ') {
                stringHasNumber = true;
                break;
            } else {
                stringHasNumber = false;
            }
        }
    }

    return stringHasNumber;
}

//swapping two character of an string
String.prototype.swap = function (oldIndex, newIndex) {
    let splitString = [...this.trim()];

    let firstChar = splitString[oldIndex - 1];
    let secondChar = splitString[newIndex - 1];

    splitString[oldIndex - 1] = secondChar;
    splitString[newIndex - 1] = firstChar;

    return splitString.join('');
}

//kebab casing a string
String.prototype.kebab = function () {
    let splitString = [...this.trim()];

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] == ' ') {
            splitString[i] = '-'
        }
    }

    return splitString.join('');
}

//unkebabing a string
String.prototype.unKebab = function () {
    return this.trim().replace(/[-]/g, ' ').toLowerCase();
}

//camel casing a string
String.prototype.camel = function () {
    let splitString = [...this.trim()];

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] == ' ') {
            splitString[i + 1] = splitString[i + 1].toLocaleUpperCase();
            splitString[i] = '';
        }
    }

    return splitString.join('');
}

//uncameling a string
String.prototype.unCamel = function () {
    return this.trim().replace(/[A-Z]/g, ' $&').toLowerCase();
}

//snake casing a string
String.prototype.snake = function () {
    let string = this.trim();
    let splitString = [...string];

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] == ' ') {
            splitString[i] = '_';
        }
    }

    return splitString.join('');
}

//unsnaking a string
String.prototype.unSnake = function () {
    return this.trim().replace(/[_]/g, ' ').toLowerCase();
}

//removing all the white spaces of a tring
String.prototype.noWhiteSpace = function () {
    let splitString = [...this.trim()];

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] == ' ') {
            splitString[i] = '';
        }
    }

    return splitString.join('');
}

//reverse a string 
String.prototype.reverse = function () {
    return [...this].reverse().join('');
}

//checking if the string is a number
String.prototype.isNumber = function () {
    if (parseInt(this).toString().length != this.length || parseInt(this) == null) return false; 
    return true;
}