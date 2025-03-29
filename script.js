// =============================================
// SPLASH SCREEN
// =============================================
  window.addEventListener('load', function() {
    setTimeout(function() {
        const splash = document.getElementById('splash-screen');
        splash.classList.add('splash-hidden');
        
        
        setTimeout(function() {
            document.getElementById('website-content').style.display = 'block';
        }, 1000); 
    }, 3000); 
});

// =============================================
// HAMBURGER NAVBAR
// =============================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// =============================================
// DYNAMIC TEXT ANIMATION
// =============================================
const texts = ["I'm Ubaid Khan", "I'm a Frontend Developer", "I Love Coding"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeText() {
if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

document.getElementById("dynamic-text").textContent = letter;
            
if (letter.length === currentText.length) {
    setTimeout(() => {
    count++;
    index = 0;
                }, 2000);
            }
            setTimeout(typeText, 120);
        }

        typeText();


// =============================================
// CODE EDITOR ANIMATION
// =============================================
const code = `function welcome() {\n  console.log("Hello World!");\n  console.log("Welcome to my portfolio");\n}\n\nwelcome();`;
let charIndex = 0;
let codeElement = document.getElementById("code-editor");

function typeCode() {
    codeElement.textContent = code.slice(0, charIndex);
    charIndex++;

if (charIndex > code.length) {
    setTimeout(() => {
    codeElement.textContent = '';
    charIndex = 0;
                }, 3000);
            }
        }

setInterval(typeCode, 100);

// =============================================
// SKILLS ANIMATE PROGRESS BARS ON SCROLLS
// =============================================
const skillCards = document.querySelectorAll('.skill-card');

const animateProgressBars = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            const experience = entry.target.getAttribute('data-experience');
            progressBar.style.width = `${experience}%`;
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateProgressBars, {
    threshold: 0.5
});

skillCards.forEach(card => {
    observer.observe(card);
});


// =============================================
// PROJECTS CARD ANIMATION
// =============================================
const projectCards = document.querySelectorAll('.project-card');

const animateCards = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const cardObserver = new IntersectionObserver(animateCards, {
    threshold: 0.1
});

projectCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
});


// =============================================
// TESTIMONIAL SECTION
// =============================================
const testimonialCards = document.querySelectorAll('.testimonial-card');

const animateTestimonials = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const testimonialObserver = new IntersectionObserver(animateTestimonials, {
    threshold: 0.1
});

testimonialCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    testimonialObserver.observe(card);
});


// =============================================
// DARK MODE TOGGLE
// =============================================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check local storage for theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    updateToggleIcon(currentTheme);
}

darkModeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateToggleIcon(isDark ? 'light' : 'dark');
});

function updateToggleIcon(theme) {
    const icon = darkModeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    darkModeToggle.style.transform = theme === 'dark' ? 'rotate(180deg)' : 'rotate(0)';
}

// Initialize icon
updateToggleIcon(localStorage.getItem('theme') || 'light');


// =============================================
// BACK TO TOP BUTTON
// =============================================
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// =============================================
// EMAIL DATA SENDING TO EMAIL.JS
// =============================================
(function() {
    emailjs.init("EOGxQ2uocw5tAIF7o"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };

    // Send email using EmailJS
    emailjs.send("service_61bdxod", "template_h7wjpbi", formData)
      .then(() => {
        alert('Message sent successfully!');
        this.reset();
      }, (error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
      });
  });
