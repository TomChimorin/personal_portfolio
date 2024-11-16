document.addEventListener('DOMContentLoaded', function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Select all content sections
    const sections = document.querySelectorAll('section');

    // Hide all content sections except the first one
    sections.forEach((section, index) => {
        if (index > 0) {
            section.style.display = 'none';
        }
    });

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Hide all sections and then display the target section
            sections.forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(targetId).style.display = 'block';
        });
    });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  var content = coll[i].nextElementSibling;
  content.style.display = "none";
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function circleTrail(location) {
  document.addEventListener('DOMContentLoaded', function () {
      // Array of section IDs
      const sectionIds = ['home-section', 'about-section', 'anime-section', 'hobbies-section', 'contact-section'];

      // Add a click event listener to the navigation links
      document.querySelectorAll('nav ul li a').forEach(link => {
          link.addEventListener('click', function () {
              // Get the href attribute of the clicked link
              const targetId = this.getAttribute('href').substring(1);

              // Check which section is clicked and set the location accordingly
              if (targetId === 'home-section') {
                  location = '#home-section';
              } else if (targetId === 'about-section') {
                  location = '#about-section';
              } else if (targetId === 'anime-section') {
                  location = '#anime-section';
              } else if (targetId === 'hobbies-section') {
                  location = '#hobbies-section';
              } else if (targetId === 'contact-section') {
                  location = '#contact-section';
              }

              // Your code to run when the user clicks on a section link
              console.log(`You clicked on the ${targetId} section!`);
              console.log(`Applying circle trail to ${location}`);
              
              // Call the animateCircles function with the updated location
              animateCircles(location);
          });
      });



  const coords = {x: 0, y: 0};
  const circles = document.querySelectorAll(location + ' .circle');


circles.forEach(function (circle){
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;

});
});



function animateCircles(){

  let x = coords.x;
  let y = coords.y;  

  circles.forEach(function (circle, index) {

    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / 10;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
  requestAnimationFrame(animateCircles);
}

animateCircles();
}


function openHobby(evt, hobbyName) {
  var i, hobbyContent, tabHobbies;

  // Hide all content
  hobbyContent = document.getElementsByClassName("hobbyContent");
  for (i = 0; i < hobbyContent.length; i++) {
    hobbyContent[i].style.display = "none";
  }

  // Remove the 'active' class from all tabs
  tabHobbies = document.getElementsByClassName("tabHobbies");
  for (i = 0; i < tabHobbies.length; i++) {
    tabHobbies[i].className = tabHobbies[i].className.replace(" active", "");
  }

  // Show the clicked tab's content and mark the button as active
  document.getElementById(hobbyName).style.display = "block";
  evt.currentTarget.className += " active";
}



