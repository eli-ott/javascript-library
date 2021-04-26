let checkClassInterval = setInterval(() => {
    if (document.querySelectorAll('.signinForm').length
        || document.querySelectorAll('.signupForm').length) {
        clearInterval(checkClassInterval);
        createForm();
    }
}, 100);

let form = {
    signin: `
        <input required type="email" placeholder="Email / Username"></input>
        <input required type="password" placeholder="Password"></input>
        <input required type="submit" value="SIGN IN"></input>
    `,
    signup: `
        <input required type="text" placeholder="Username"></input> 
        <input required type="email" placeholder="Email"></input>
        <input required type="password" placeholder="Password"></input>
        <input required type="password" placeholder="Pasword confirmation"></input>
        <input required type="submit" value="SIGN UP"></input>
    `
};

const createForm = () => {
    if (document.querySelectorAll('.signinForm').length > 0) {
        for (let i = 0; i < document.querySelectorAll('.signinForm').length; i++) {
            document.getElementsByClassName('signinForm')[i].innerHTML = form.signin;
        }
    }
    if (document.querySelectorAll('.signupForm').length) {
        for (let i = 0; i < document.querySelectorAll('.signupForm').length; i++) {
            document.getElementsByClassName('signupForm')[i].innerHTML = form.signup;
        }
    }
}