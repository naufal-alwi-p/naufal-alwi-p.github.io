// Splide
const splide = new Splide('.splide', {
    type: 'loop'
});

splide.mount();

// Particle JS Set
const container1 = document.querySelector('#profile-section');
const box_profile = document.querySelector('.self-profile');
const box_particle = document.querySelector('#particle');
const height = window.innerHeight - 56;

const container1_height = getCssValuePx(getComputedStyle(container1).height);

function getCssValuePx(property) {
    return Number(property.slice(0, -2));
}

if (container1_height < height) {
    container1.style.height = height + "px";

    box_profile.style.height = height + "px";

    box_particle.style.height = height + "px";
} else {
    box_profile.style.height = container1_height + "px";

    box_particle.style.height = container1_height + "px";
}

// Particle JS
particlesJS.load('particle', '/script/homepage/particle_js/settings.json');

// AOS
AOS.init({
    once: true,
    delay: 500,
    duration: 1500
});

// Year
const yearElement = document.querySelector('.self-year');

yearElement.textContent = (new Date).getFullYear();