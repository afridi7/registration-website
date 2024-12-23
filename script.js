const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');

// hamburger menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu .nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// dropdown
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    const wrapper = document.querySelector('.wrapper');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
        wrapper.classList.toggle('wrapper-active');
    });

    options.forEach(option => {
        if (option.textContent !== "Select an Event") {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                wrapper.classList.remove('wrapper-active');

                options.forEach(o => o.classList.remove('active'));
                option.classList.add('active');
            });
        }
    });
});

// select option from list
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu li');
    const nextButton = document.getElementById('next');
    let selectedEvent = '';

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            selectedEvent = this.textContent;
        });
    });

    nextButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (selectedEvent.includes('HackVenture')) {
            window.location.href = 'register-pages/register-hv.html';
        } else if (selectedEvent.includes('Quizzie Quest')) {
            window.location.href = 'register-pages/register-qq.html';
        } else if (selectedEvent.includes('BGMI')) {
            window.location.href = 'register-pages/register-bgmi.html';
        } else if (selectedEvent.includes('Code In The Dark')) {
            window.location.href = 'register-pages/register-citd.html';
        } else if (selectedEvent.includes('Quick Think')) {
            window.location.href = 'register-pages/register-qt.html';
        } else {
            alert('Please select a valid event.');
        }
    });
});

// previous-next button
document.addEventListener('DOMContentLoaded', function () {
    const previousButton = document.getElementById('previous');

    previousButton.addEventListener('click', function () {
        window.location.href = '../register.html';
    });
});

// images
document.getElementById('hvImage').addEventListener('click', function () {
    location.href = 'events/hv.html';
});
document.getElementById('citdImage').addEventListener('click', function () {
    location.href = 'events/citd.html';
});
document.getElementById('bgmiImage').addEventListener('click', function () {
    location.href = 'events/bgmi.html';
});
document.getElementById('qtImage').addEventListener('click', function () {
    location.href = 'events/qt.html';
});
document.getElementById('qqImage').addEventListener('click', function () {
    location.href = 'events/qq.html';
});
//sponsor
document.getElementById('hudhudImage').addEventListener('click', function () {
    location.href = 'https://www.hudhud.in/';
});



document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next');
    const selectedEvent = document.querySelector('.selected');

    nextButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        // Prevent form submission by default

        if (selectedEvent.textContent === 'Select an Event') {
            alert('Please select an event before proceeding.');
        } else {
            if (selectedEvent.textContent.includes('HackVenture')) {
                window.location.href = 'register-pages/register-hv.html';
            } else if (selectedEvent.textContent.includes('Quizzie Quest')) {
                window.location.href = 'register-pages/register-qq.html';
            } else if (selectedEvent.textContent.includes('BGMI')) {
                window.location.href = 'register-pages/register-bgmi.html';
            } else if (selectedEvent.textContent.includes('Code In The Dark')) {
                window.location.href = 'register-pages/register-citd.html';
            } else if (selectedEvent.textContent.includes('Quick Think')) {
                window.location.href = 'register-pages/register-qt.html';
            }
        }
    });
});
