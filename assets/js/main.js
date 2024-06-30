/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button');
const searchClose = document.getElementById('search-close');
const searchContent = document.getElementById('search-content');

// search show
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search');
    })
}

// search hide
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search');
    })
}


/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close');
const loginContent = document.getElementById('login-content');

// Login show
if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login');
    })
}

// Login hide
if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login');
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);


/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestmonials = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink.classList.add('active-link');
        } else {
            sectionLink.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');

// Define the class names for the dark theme and the icon change
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Retrieve previously selected theme and icon from localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Function to get the current theme: 'dark' or 'light'
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// Function to get the current icon: 'ri-moon-line' or 'ri-sun-line'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// If a theme was previously selected, apply it
if (selectedTheme) {
    // Apply the dark theme if previously selected
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    // Apply the corresponding icon if previously selected
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Add an event listener to the theme button to toggle the theme
themeButton.addEventListener('click', () => {
    // Toggle the dark theme class on the body
    document.body.classList.toggle(darkTheme);
    // Toggle the icon theme class on the button
    themeButton.classList.toggle(iconTheme);

    // Save the current theme and icon to localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


/*=============== SCROLL REVEAL ANIMATION ===============*/

// Initialize ScrollReveal with a set of default options
const sr = ScrollReveal({
    origin: 'top',       // Animation will start from the top
    distance: '60px',    // Elements will move 60px during the animation
    duration: 2500,      // Animation duration is set to 2500ms (2.5 seconds)
    delay: 400,          // Initial delay before animation starts is 400ms
    reset: false         // Animations will not reset once they have been revealed
});

// Reveal the specified elements with the default settings
sr.reveal(`.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer`);

// Reveal elements with additional delay
sr.reveal(`.home__images`, { delay: 600 }); // Adds an extra 200ms to the default delay

// Reveal services cards with a staggered interval
sr.reveal(`.services__card`, { interval: 100 }); // Each card will be revealed 100ms after the previous one

// Reveal discount data with a custom origin
sr.reveal(`.discount__data`, { origin: 'left' }); // Animation will start from the left

// Reveal discount images with a different custom origin
sr.reveal(`.discount__images`, { origin: 'right' }); // Animation will start from the right
