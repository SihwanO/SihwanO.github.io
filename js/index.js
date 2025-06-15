const aboutTitle = document.querySelector(".about-title");
const skillTitle = document.querySelector(".skill-title");
const portfolioTitle = document.querySelector(".portfolio-title");
// const aboutup = document.querySelector(".about-content img");
// var line = ['about-line', 'skill-line', 'portfolio-line'];
// const sectiocnLine = document.querySelector(line);

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("about-title")) {
                entry.target.classList.add("show");
            }
            if (entry.target.classList.contains("skill-title")) {
                entry.target.classList.add("show");
            }
            if (entry.target.classList.contains("portfolio-title")) {
                entry.target.classList.add("show");
            }
        }
    });
}, { 
    threshold: 0.6, 
});

observer.observe(aboutTitle);
observer.observe(skillTitle);
observer.observe(portfolioTitle);