const allH2Elements = document.querySelectorAll("h2")
const allH3Elements = document.querySelectorAll('h3');
// this loops the h3 elements
allH2Elements.forEach(h2 => {
    // adding the event listener for the click event
    h2.style.fontWeight = "bold";
})
allH3Elements.forEach(h3 => {
    // adding the event listener for the click event
    h3.style.fontWeight = "bold";
})






$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

const elementIds = ['about-h2', 'projects-h2', 'resume-h2', 'contact-h2'];

elementIds.forEach((id) => {
    window.addEventListener('scroll', () => {
        scrollCallback(id);
    });
});

function scrollCallback(id) {
    const element = document.getElementById(id);
    const scrollPosition = window.scrollY;
    const elementPosition = element.offsetTop;

    if (scrollPosition > elementPosition - window.innerHeight / 2) {
        element.classList.add('animate');
    }
}