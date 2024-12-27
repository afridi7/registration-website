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


function enable_loader(){
    document.getElementsByClassName("wrapper")[0].style.filter = "blur(3px)";
    document.getElementsByClassName("loader")[0].style.display = "block";
}
function disable_loader(){
    document.getElementsByClassName("wrapper")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("loader")[0].style.display = "none";
}
function submitForm(){
// Define the parameters
var evob = document.getElementById("event-name")
const event_name = evob.innerHTML;
var cob = document.getElementsByName("College")[0]
const college = cob.value;
var eob=  document.getElementsByName("Email")[0]
const email =eob.value;
var mob=  document.getElementsByName("Phone")[0]
const mobile = mob.value;
var cousceob= document.getElementsByClassName("selected")[0]
const course = cousceob.innerText;
var participant1ob = document.getElementById("Participant1");
var participant2ob = document.getElementById("Participant2");
var participant3ob = document.getElementById("Participant3");
var participant4ob = document.getElementById("Participant4");
const participant1 = participant1ob.value;
const participant2 = participant2ob?participant2ob.value:"";
const participant3 = participant3ob?participant3ob.value:"";
const participant4 = participant4ob?participant4ob.value:"";
// Construct the URL with parameters
const url = `https://script.google.com/macros/s/AKfycbwakhuqL62V7dsL3QCnFkqBcyFUGANn_IEE2x_mw3mHVPEafxKw21-erwJekRmIK7x1/exec?event=${encodeURIComponent(event_name)}&college=${encodeURIComponent(college)}&email=${encodeURIComponent(email)}&mobile=${encodeURIComponent(mobile)}&participant1=${encodeURIComponent(participant1)}&participant2=${encodeURIComponent(participant2)}&participant3=${encodeURIComponent(participant3)}&participant4=${encodeURIComponent(participant4)}&course=${encodeURIComponent(course)}`;
// console.log(url);
// Make the GET request
enable_loader()
fetch(url,{
    redirect: "follow",
    method: "GET",
  })
  .then(response => response.json())  // Assuming the response is JSON
  .then(data => {
    disable_loader()
    // console.log("Success:", data);
    if(data.status=="failed"){
        alert("Missing Fields")
    }
    else{
        alert("Form Submitted Successfully")
        evob.value = "";
        cob.value ="";
        eob.value ="";
      participant1ob.value="";
       participant2ob.value="";
       participant3ob.value="";
      participant4ob.value="";
      mob.value="";
    }
    
      // Handle the response data
  })
  .catch(error => {
    console.error("Error:", error);  // Handle any errors
    disable_loader()
    alert("Failed! Try Again")
  });


}