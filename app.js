// Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// All items 
const title = document.querySelector(".title");
const image = document.querySelector(".me img");
const portfolio = document.querySelector(".Portfolio");
const heading = document.querySelector(".info h2");
const description = document.querySelector(".info h3");
const projects = document.querySelector(".projects");

//Moving animation effect 
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//pop in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "all 0.5s ease-out";
    //pop out items
    image.style.transition = "all 1.5s ease-out"
    title.style.transform = "translateZ(150px)";
    image.style.transform = "translateZ(50px) rotate(360deg)";
    portfolio.style.transform = "translateZ(70px)";
    heading.style.transform = "translateZ(110px)";
    description.style.transform = "translateZ(100px)";
    projects.style.transform = "translateZ(120px)";
});

// Pop back
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //pop back items
    title.style.transform = "translateZ(0px)";
    image.style.transform = "translateZ(0px) rotate(0deg)";
    portfolio.style.transform = "translateZ(0px)";
    heading.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    projects.style.transform = "translateZ(0px)";
});