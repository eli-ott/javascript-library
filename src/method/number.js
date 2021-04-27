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
    let binaryInterval = setInterval(() => {
        if (Math.floor(number) % 2 == 0 && Math.floor(number) != 1) binaryNumber.unshift(0);
        else if (Math.floor(number) != 1) binaryNumber.unshift(1);
        
        if (Math.floor(number) == 1) {
            if(Math.floor(number) % 2 == 1) binaryNumber.unshift(1);
        
            clearInterval(binaryInterval); 
            canReturn = true;
        }
        
        number = number / 2;

        //PROBLEME DE RETURN SA NE RETURN RIEN DU TOUT

        if(canReturn) return binaryNumber.join('');
    }, 10);
}