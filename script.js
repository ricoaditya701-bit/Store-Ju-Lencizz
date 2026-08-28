// ========================================
// HAMBURGER MENU
// ========================================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");


// Ketika hamburger diklik
hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});



// ========================================
// CLOSE MENU SETELAH LINK DIKLIK
// ========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});



// ========================================
// NAVBAR SHADOW SAAT SCROLL
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});



// ========================================
// ANIMASI MUNCUL SAAT SCROLL
// ========================================

const cards = document.querySelectorAll(
    ".product-card, .feature-card, .contact-card"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});