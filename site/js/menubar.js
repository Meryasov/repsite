const mainButton = document.getElementById('button Main');
const aboutMeButton = document.getElementById('button AboutMe');
const priceListButton = document.getElementById('button PriceList');
const contactsButton = document.getElementById('button Contacts');

mainButton.addEventListener('click', function(){
    document.getElementsByClassName('level first')[0].scrollIntoView({
        behavior: 'smooth'
    });
});

aboutMeButton.addEventListener('click', function(){
    document.getElementsByClassName('level second')[0].scrollIntoView({
        behavior: 'smooth'
    });
});

priceListButton.addEventListener('click', function(){
    document.getElementsByClassName('level thrid')[0].scrollIntoView({
        behavior: 'smooth'
    });
});

contactsButton.addEventListener('click', function(){
    document.getElementsByClassName('level fourth')[0].scrollIntoView({
        behavior: 'smooth'
    });
});