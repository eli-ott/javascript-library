//spliting an array in two method
String.prototype.divide = function () {
    let stringLength = this.length;
    let midString = stringLength / 2;

    let firstPart = this.slice(0, midString);
    let secondPart = this.slice(midString);

    return {
        'firstPart': firstPart,
        'secondPart': secondPart
    };
}

//swapping two character of an string
String.prototype.swap = function (oldIndex, newIndex) {
    let string = this;
}

//encoding method
String.prototype.encode = function (type, number = 0) {
    let string = this;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let encodeString;
    switch (type) {
        case 'number':
            let indexes = [];
            for (let i = 0; i < string.length; i++) {
                let char = string[i];
                indexes.push(alphabet.indexOf(char) + 1);
            }
            encodeString = indexes.join('-');
            break;
        case 'rotate':
            console.log(number);
        break;
    }

    return encodeString;
}