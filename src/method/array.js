Array.prototype.divide = function () {
    let array = this;
    let firstPart;
    let secondPart;

    firstPart = array.slice(0, array.length / 2);
    secondPart = array.slice(array.length / 2, array.length);

    return {
        firstPart,
        secondPart
    };
}

Array.prototype.hasNumber = function () {
    if(this.join('').match(/[0-9]/g) != null) return true;
    return false;
}

Array.prototype.hasCharacter = function () {
    if(this.join('').match(/[A-Za-z]/g) != null) return true;
    return false;
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

Array.prototype.multiply = function (number = 1, secondArray = []) {
    let array = this;
    let filteredArray = [];

    let biggerArray;
    if(secondArray.length < 1){
        biggerArray = array;
    } else if(secondArray.length > 0) {
        if(array.length > secondArray.length){
            biggerArray = array;
        } else if(array.length < secondArray.length){
            biggerArray = secondArray;
        } else if(array.length == secondArray.length){
            biggerArray = array;
        }
    }
    if(number != 1){
        for (let i = 0; i < biggerArray.length; i++){
            filteredArray.push(array[i] * number);
        } 
    }

    if (secondArray.length > 0) {
        for (let i = 0; i < biggerArray.length; i++){
            filteredArray.push(array[i] * secondArray[i]);
        }
    }

    return filteredArray;
}

Array.prototype.add = function (number = 1, secondArray = []) {
    let array = this;
    let filteredArray = [];

    let biggerArray;
    if(secondArray.length < 1){
        biggerArray = array;
    } else if(secondArray.length > 0) {
        if(array.length > secondArray.length){
            biggerArray = array;
        } else if(array.length < secondArray.length){
            biggerArray = secondArray;
        } else if(array.length == secondArray.length){
            biggerArray = array;
        }
    }
    if(number != 1){
        for (let i = 0; i < biggerArray.length; i++){
            filteredArray.push(array[i] + number);
        } 
    }

    if (secondArray.length > 0) {
        for (let i = 0; i < biggerArray.length; i++){
            filteredArray.push(array[i] + secondArray[i]);
        }
    }

    return filteredArray;
}

Array.prototype.subtract = function (number = 1, secondArray = []) {
    let array = this;
    let filteredArray = [];

    let biggerArray;
    if(secondArray.length < 1){
        biggerArray = array;
    } else if(secondArray.length > 0) {
        if(array.length > secondArray.length){
            biggerArray = array;
        } else if(array.length < secondArray.length){
            biggerArray = secondArray;
        } else if(array.length == secondArray.length){
            biggerArray = array;
        }
    }
    if(number != 1){
        for (let i = 0; i < biggerArray.length; i++){
            filteredArray.push(array[i] - number);
        } 
    }

    if (secondArray.length > 0) {
        for (let i = 0; i < biggerArray.length; i++){
            filteredArray.push(array[i] - secondArray[i]);
        }
    }

    return filteredArray;
}

