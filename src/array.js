//chrcking if the array has a number
Array.prototype.hasNumber = function () {
    let array = this;
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let hasNumber;

    for (let i = 0; i < array.length; i++) {
        if (hasNumber) break;
        let char = array[i];

        for (let j = 0; j < numbers.length; j++) {
            if (char == numbers[j] && char != ' ') {
                hasNumber = true;
                break;
            } else {
                hasNumber = false;
            }
        }
    }

    return hasNumber
}

//checking if the array has a char
Array.prototype.hasCharacter = function () {
    let array = this;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let hasCharacter;

    for (let i = 0; i < array.length; i++) {
        if (hasCharacter) break;
        let char = array[i];

        for (let j = 0; j < alphabet.length; j++) {
            if (char == alphabet[j] && char != ' ') {
                hasCharacter = true;
                break;
            } else {
                hasCharacter = false;
            }
        }
    }

    return hasCharacter;
}