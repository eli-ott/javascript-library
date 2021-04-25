let checkClassInterval = setInterval(() => {
    if (document.querySelectorAll('.form1').length
        || document.querySelectorAll('.form2').length) {
        clearInterval(checkClassInterval);
        createForm();
    }
}, 100);

let form = {
    form1: `
        <input type="email"></input>
        <input type="password"></input>
        <input type="submit"></input>
    `,
    form2: `
    
    `
};

const createForm = () => {
    if (document.querySelectorAll('.form1').length > 0) {

    }
    if (document.querySelectorAll('.form2').length) {

    }
}