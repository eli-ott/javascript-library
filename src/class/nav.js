let checkNavClass = setInterval(() => {
    if (document.querySelectorAll('.nav1').length
        || document.querySelectorAll('.nav2').length) {
        clearInterval(checkNavClass);
        createNav();
    }
}, 100);

const nav = {
    nav1: `
        <a href='home.html'>Home</a>
        <a href='about.html'>About Me</a>
        <a href='contact.html'>Contact</a>
    `,
    nav2: `
        
    `
}

const createNav = () => {
    if (document.querySelectorAll('.nav1').length > 0) {
        for (let i = 0; i < document.querySelectorAll('.nav1').length; i++) {
            document.getElementsByClassName('nav1')[i].innerHTML = nav.nav1;
        }
    }
    if (document.querySelectorAll('.nav2').length > 0) {
        for (let i = 0; i < document.querySelectorAll('.nav2').length; i++) {
            document.getElementsByClassName('nav2')[i].innerHTML = nav.nav2;
        }
    }
}