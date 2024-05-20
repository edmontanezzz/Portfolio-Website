//menu bar
function toggleMenu() {
    var menuItemsContainer = document.querySelector('.menu-items-container');
    var menuOverlay = document.querySelector('.menu-overlay');

    menuItemsContainer.classList.toggle('show');
    menuOverlay.classList.toggle('show');

document.querySelectorAll('.menu-items a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionID = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionID);

        section.scrollIntoView({
            behavior: 'smooth'
        });

        document.querySelector('.menu-items-container').classList.remove('show');
        document.querySelector('.menu-overlay').classList.remove('show');
    });
});
}


window.addEventListener('load', function() {
    var modal = document.getElementById('custom-modal');
    var closeButton = document.getElementsByClassName('close')[0];

    // Display the modal
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;

    // Show footer only when scrolled to the very bottom of the page
    if (scrollPosition + windowHeight >= documentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});


function displayRandomFact() {
    var facts = [ "This photo was taken on a family vacation to Mexico in Puerto Vallarta, I love traveling to new places and being by the beach (its my favorite place)!"];
    var randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
}

document.addEventListener("DOMContentLoaded", function() {
    var scrollDownArrow = document.getElementById('scrollDownArrow');

    scrollDownArrow.addEventListener('click', function() {
        var aboutSection = document.getElementById('me');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var heroSection = document.querySelector('.hero-section');
        var meSection = document.getElementById('me');
        var scrollDownArrow = document.getElementById('scrollDownArrow');

        var scrollPosition = window.scrollY;

        if (scrollPosition > meSection.offsetTop - window.innerHeight) {
            heroSection.classList.add('small');
            scrollDownArrow.style.display = 'none'; // Hide the scroll-down arrow
        } else {
            heroSection.classList.remove('small');
            scrollDownArrow.style.display = 'block'; // Show the scroll-down arrow
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var heroSection = document.querySelector('.animate-me');

    setTimeout(function() {
        heroSection.classList.add('show');
    }, 500); // Delay the animation to let other elements load first
});


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } 
