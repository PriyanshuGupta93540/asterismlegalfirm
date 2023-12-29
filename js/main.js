(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

// if (window.location.href.endsWith(".html")) {
//     history.pushState({}, null, window.location.href.replace(".html", ""));
//   }


  
//   DISCLAIMER 

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if the disclaimer has been accepted before
    const disclaimerAccepted = localStorage.getItem('disclaimerAccepted');
    const disclaimerOverlay = document.querySelector('.disclaimer-overlay');
  
    // If the disclaimer has not been accepted, show the modal
    if (!disclaimerAccepted) {
      disclaimerOverlay.style.display = 'flex';
    }
  
    // Handle click on "I Accept" button
    document.getElementById('acceptButton').addEventListener('click', function() {
      // Set a flag in local storage to indicate that the disclaimer has been accepted
      localStorage.setItem('disclaimerAccepted', 'true');
      
      // Hide the modal
      disclaimerOverlay.style.display = 'none';
    });
  });
  


////////////////////////////////////// API INTEGRATION ///////////////////////////////

// SUBMIT FORM

// script.js

// script.js

console.log('Script loaded!');

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);

    // Convert formData to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Make a POST request to the API endpoint
    fetch('http://localhost:8080/api/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // You can add code here to handle success, such as showing a success message to the user.

        alert('We got your message! We will get back to you soon');
       

        // Reset the form
        event.target.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        // You can add code here to handle errors, such as showing an error message to the user.
    });
}