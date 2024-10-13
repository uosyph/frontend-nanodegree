/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// Start of Global Variables
const navBar = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
// End of Global Variables


// Begin Build Navigation Function
function buildNav() {
  sections.forEach(section => {
    const navButton = document.createElement('li');
    navButton.insertAdjacentHTML("afterbegin",
      `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`
    );
    navList.appendChild(navButton);

    // Attach scroll behavior to the nav button
    scrollBehavior(navButton.querySelector('a'), section);
  });
}

// Invoke the function to build the navigation menu
buildNav();
// End Build Navigation Function


// Begin Scroll Behavior Function
function scrollBehavior(navButton, section) {
  navButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  });
}
// End Scroll Behavior Function


// Begin Set Active Section Function
function activeSection() {
  const navActive = document.querySelectorAll(".menu__link");

  sections.forEach((section, i) => {
    // Get the bounding rectangle for each section
    const sectionBond = section.getBoundingClientRect();

    // Check if the section is within the viewport & add/remove classes correspondingly
    if (sectionBond.top <= 380 && sectionBond.bottom >= 350) {
      section.classList.add("your-active-class");
      navActive[i].classList.add("active_button");
    } else {
      section.classList.remove("your-active-class");
      navActive[i].classList.remove("active_button");
    }
  });
}
// End Set Active Section Function


// Begin Toggle NavBar Function
function toggleNavBar() {
  let userScroll;

  header.style.cssText = 'opacity: 1; transition: ease 0.3s;';

  // Clear timeout to avoid multiple executions during scroll
  window.clearTimeout(userScroll);

  // Set timeout to hide the NavBar after scrolling ends
  userScroll = setTimeout(function () {
    header.style.cssText = 'opacity: 0; transition: ease 0.3s;';
  }, 6000);
}
// End Toggle NavBar Function


// Begin Scroll Event Listener
window.addEventListener('scroll', (event) => {
  activeSection(); // Update active section highlighting
  toggleNavBar();  // Toggle NavBar visibility based on scroll activity
});
// End Scroll Event Listener


// Begin Go Up Button
// Create the div element for the button
footer.insertAdjacentHTML("beforebegin", `<div id="return_top" style="cursor: pointer;">↑</div>`);

// Scroll to the top of the page on button click
document.getElementById("return_top").addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// End Go Up Button
