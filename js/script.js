const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
   navbarMenu.classList.toggle("active");
   overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
   navbarMenu
      .querySelector(".menu-dropdown.active .submenu")
      .removeAttribute("style");
   navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
   if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      e.preventDefault();
      const menuDropdown = e.target.parentElement;

      // If Dropdown is Expanded, then Collapse It
      if (menuDropdown.classList.contains("active")) {
         collapseSubMenu();
      } else {
         // Collapse Existing Expanded Dropdown
         if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
         }

         // Expanded the New Dropdown
         menuDropdown.classList.add("active");
         const subMenu = menuDropdown.querySelector(".submenu");
         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
   }
};

// Fixed Resize Window Function
const resizeWindow = () => {
   if (window.innerWidth > 992) {
      if (navbarMenu.classList.contains("active")) {
         toggleMenu();
      }
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
         collapseSubMenu();
      }
   }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);



 // Get all modal openers
 var modalOpeners = document.querySelectorAll(".openModal");

 // Get all modals
 var modals = document.querySelectorAll(".modal");

 // Get all close buttons
 var closeButtons = document.querySelectorAll(".close");

 // Loop through each modal opener
 modalOpeners.forEach(function(opener) {
     opener.onclick = function() {
         var targetModal = document.getElementById(opener.getAttribute('data-target'));
         targetModal.style.display = "flex"; // Show the modal
     }
 });

 // Loop through each close button
 closeButtons.forEach(function(closeButton) {
     closeButton.onclick = function() {
         modals.forEach(function(modal) {
             modal.style.display = "none"; // Hide all modals
         });
     }
 });

 // Close the modal if the user clicks outside of the modal content
 window.onclick = function(event) {
     modals.forEach(function(modal) {
         if (event.target == modal) {
             modal.style.display = "none"; // Hide the modal
         }
     });
 }