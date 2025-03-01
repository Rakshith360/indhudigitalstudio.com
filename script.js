document.addEventListener('DOMContentLoaded', () => {
    const stickyBtn = document.querySelector('.sticky-btn');

    // Sticky Button Animation
    stickyBtn.addEventListener('mouseover', () => {
        stickyBtn.style.transform = 'scale(1.2)';
    });

    stickyBtn.addEventListener('mouseout', () => {
        stickyBtn.style.transform = 'scale(1)';
    });
});
  
// FAQ Toggle Script
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        // Toggle active class
        faqItem.classList.toggle('active');

        // Collapse other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});
// Select all flower items
const flowerItems = document.querySelectorAll('.flower-item');

// Add click or touch interaction
flowerItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the bloom effect
        item.classList.toggle('bloom');

        // Remove bloom effect from other flowers
        flowerItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('bloom');
            }
        });
    });
});
// No JavaScript is required for the basic animation, but you can enhance it.
// This example allows you to add interactivity by scaling the flower when clicked.

document.querySelector('.flower').addEventListener('click', function () {
    this.classList.add('flower-grow');
    setTimeout(() => this.classList.remove('flower-grow'), 1000);
  });
  
 // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const sun = document.querySelector('.sun');
    const sky = document.querySelector('.sky');

    // Animate the sun rising
    setTimeout(() => {
        sun.style.transition = 'bottom 5s ease-out';
        sun.style.bottom = '50%'; // Move the sun up

        // Change the sky color to daytime after sun rises
        setTimeout(() => {
            sky.style.background = 'linear-gradient(to top, #87CEEB, #fffbdb)'; // Daytime gradient
        }, 3000); // Delay to match sun's rise
    }, 500); // Initial delay before animation starts
});
document.addEventListener('DOMContentLoaded', () => {
    const bus = document.querySelector('.bus');

    // Restart the animation on click
    bus.addEventListener('click', () => {
        bus.style.animation = 'none'; // Reset animation
        setTimeout(() => {
            bus.style.animation = ''; // Restart animation
        }, 10);
    });
});
 
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
 
 
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open'); // Animate the toggle button
        navLinks.classList.toggle('active'); // Slide in/out the menu
    });
 

    // Path to the sound file
    const soundPath = "https://res.cloudinary.com/dbnx1enhn/video/upload/v1732182775/indu_digital_stuido_d1ultl.mp3"; // Replace with your file path

    // Preload the sound
    const clickSound = new Audio(soundPath);

    // Add event listener to all clickable elements
    document.querySelectorAll('.clickable').forEach(element => {
        element.addEventListener('click', () => {
           
            clickSound.currentTime = 0; // Reset sound to the start
            clickSound.play();
        });
    });

    // Handle errors (for unsupported browsers or missing audio files)
    clickSound.addEventListener('error', () => {
        console.error("Audio file failed to load.");
    });
 
 // Trigger confetti when the page loads
 window.onload = function () {
    const duration = 5000; // Confetti duration in milliseconds
    const end = Date.now() + duration;

    (function frame() {
        // Emit random confetti bursts
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        // Continue the animation until the duration ends
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
};
function randomColor() {
    const colors = ['#FFC107', '#FF5722', '#4CAF50', '#2196F3', '#9C27B0'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
    const wrapper = document.getElementById('confettiWrapper');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = randomColor();

        wrapper.appendChild(confetti);
 
        // Remove confetti after animation
        setTimeout(() => {
            wrapper.removeChild(confetti);
        }, 5000);
    }
}

// Trigger the confetti animation on page load
window.onload = createConfetti;
document.addEventListener("DOMContentLoaded", () => {
    const duration = 5000; // Confetti duration in milliseconds
    const end = Date.now() + duration;

    (function frame() {
        // Emit random confetti bursts
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        // Continue the animation until the duration ends
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
});
document.addEventListener("DOMContentLoaded", () => {
    const curtains = document.querySelector('.curtain');
    const content = document.getElementById('content');

    setTimeout(() => {
        // Hide the curtains after the animation
        curtains.style.display = 'none';
        // Show the content
        content.style.display = 'block';
    }, 2000); // Matches the animation duration in CSS
});
// Custom smooth scroll function
function smoothScroll(target, duration, easingFunction) {
    const start = window.scrollY;
    const end = target.offsetTop - document.querySelector('nav').offsetHeight; // Account for fixed nav bar
    const change = end - start;
    const startTime = performance.now();
  
    // Easing functions (you can add more for more options)
    const easing = easingFunction || easeInOutQuad;
  
    function animateScroll(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / duration;
  
      // Calculate the position based on the easing function
      const scrollPosition = start + change * easing(progress);
      window.scrollTo(0, scrollPosition);
  
      // Continue animation if not finished
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, end); // Ensure it ends exactly at the target position
      }
    }
  
    // Start the animation
    requestAnimationFrame(animateScroll);
  }
  
  // Easing function for smooth scrolling
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  
  // Attach smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      smoothScroll(target, 2000, easeInOutQuad); // 1000ms for duration
    });
  });
  
 
 

  
  




// clear the cache storage and data from user after clicking ok 
if (confirm('"మీ భద్రత మరియు సురక్షితత కోసం మీ బ్రౌజర్ డేటాను క్లియర్ చేయాలనుకుంటున్నారా?" ?')) {
    localStorage.clear();
    sessionStorage.clear();
    // Clear cookies or other data if needed
  }

  // Trusted script content as a string
  const trustedScript = 'console.log("This is a trusted script!")';

  // Create a function dynamically using new Function()
  function runScript() {
      try {
          // Dynamically create a function and execute it
          const dynamicFunction = new Function(trustedScript);
          dynamicFunction();
      } catch (error) {
          console.error('Error executing dynamic function:', error);
      }
  }
  document.addEventListener("contextmenu",
    function (event) {
        event.preventDefault();
        alert("Right-click is disabled.");
    
    }
  );
  
 

  
  document.cookie = "sessionToken=abc123; Secure; HttpOnly; SameSite=Strict";

  
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const userEmail = document.getElementById('email').value;
  if (!isValidEmail(userEmail)) {
       
  }
  
 
    
  
  let debounceTimeout;
  document.getElementById('submit').addEventListener('click', function() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      // Send the form request
    }, 500);
  });
  
 

// Instead, use:
alert("An error occurred, please try again later.");

 
 
