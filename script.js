// script.js

// Get modal element
var modal = document.getElementById('myModal');

// Get button that opens the modal
var btn = document.getElementById('signinBtn');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display ='none';
    }
}
// Get modal elements

// Get modal elements
var modal = document.getElementById('myModal');
var registerModal = document.getElementById('registerModal');
var adminModal = document.getElementById('adminModal');
var memberModal = document.getElementById('memberModal');

// Get button elements
var signinBtn = document.getElementById('signinBtn');
var registerBtn = document.getElementById('registerBtn');

// Get the <span> elements that close the modals
var closeModalElements = document.getElementsByClassName('close');

// Function to close modal with fade-out effect
function closeModal(modalElement) {
    modalElement.classList.add('fade-out');
    setTimeout(function() {
        modalElement.style.display = 'none';
        modalElement.classList.remove('fade-out');}, 500); // Match this duration with the animation duration in CSS
}

// Open modals when clicking the respective buttons
signinBtn.onclick = function() {
    modal.style.display = 'block';
}

registerBtn.onclick = function() {
    registerModal.style.display = 'block';
}

// Open modals based on form input
document.querySelector("#signInForm input[value='Admin']").onclick = function(event) {
    event.preventDefault();
    closeModal(modal);
    setTimeout(function() {
        adminModal.style.display = 'block';}, 500);
}

document.querySelector("#signInForm input[value='Member']").onclick = function(event) {
    event.preventDefault();
    closeModal(modal);
    setTimeout(function() {
        memberModal.style.display = 'block';}, 500);
}

// Open the registration modal when the "Register" button in the sign-in modal is clicked
document.querySelector("#signInForm input[value='Register']").onclick = function(event) {
    event.preventDefault();
    closeModal(modal);
    setTimeout(function() {
        registerModal.style.display = 'block';}, 500);
}

// Close modals when the user clicks on <span> (x)
Array.from(closeModalElements).forEach(function(element) {
    element.onclick = function() {
        closeModal(modal);
        closeModal(registerModal);
        closeModal(adminModal);
        closeModal(memberModal);
    }
});

// Close modals when clicking anywhere outside of them
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal(modal);
    } else if (event.target === registerModal) {
        closeModal(registerModal);
    } else if (event.target === adminModal) {
        closeModal(adminModal);
    } else if (event.target === memberModal) {
        closeModal(memberModal);
    } else if (event.target === sidebar) {
        closeSidebar();
    }
}

// Sidebar functionality
var sidebar = document.getElementById('sidebar');
var menuBtn = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');

// Function to open the sidebar
function openSidebar() {
    sidebar.style.width = '250px'; // Set sidebar width to 250px
}

// Function to close the sidebar
function closeSidebar() {
    sidebar.style.width = '0'; // Set sidebar width to 0 to close
}

// When the user clicks the menu button, open the sidebar
menuBtn.onclick = openSidebar;

// When the user clicks the close button (x), close the sidebar
closeBtn.onclick = closeSidebar;

// When the user clicks anywhere outside of the sidebar, close it
window.onclick = function(event) {
    if (event.target !== sidebar && !sidebar.contains(event.target) && event.target !== menuBtn) {
        closeSidebar();
    }
};
const wrapper = document.querySelector('.wrapper');

// Listen for keydown event
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        wrapper.scrollBy({ left: 250, behavior: 'smooth' }); // Scroll right by 250px
    }
    if (event.key === 'ArrowLeft') {
        wrapper.scrollBy({ left: -250, behavior: 'smooth' }); // Scroll left by 250px
    }
});




