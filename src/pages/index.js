import "./index.css";

// function createObserver(elements, animations, visibility, delay, delayAdd) {
//   let observer;

//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: visibility,
//   };

//   elements.forEach((element) => {
//     observer = new IntersectionObserver(handleIntersect, options);
//     observer.observe(element);
//   });

//   function handleIntersect(entries, observer) {
//     entries.forEach((entry) => {
//       console.log(entry);
//       if (entry.isIntersecting) {
//         setTimeout(() => {
//           animations.forEach((animation) => {
//             entry.target.classList.add(animation);
//           });
//           observer.unobserve(entry.target);
//         }, delay);
//       }
//       delay += delayAdd;
//     });
//   }
// }

// let title = document.querySelectorAll(".intro__title");
// createObserver(title, ["animUp"], 1.0, 100, 0);

// let categories = document.querySelectorAll(".header__category");
// createObserver(categories, ["animDown"], 1.0, 100, 1000);

let timer = 0;
let intersectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      setTimeout(function(){ entry.target.classList.add('animDown'); }, timer);
      timer += 50;
      intersectionObserver.unobserve(entry.target);
      setTimeout(function(){ timer = 0 }, 1000);
    }
  });
});

document.querySelectorAll('.header__category').forEach(element => {
  intersectionObserver.observe(element);
});

intersectionObserver.observe(document.querySelector('.intro__title'));
intersectionObserver.observe(document.querySelector('.intro__subtitle'));
intersectionObserver.observe(document.querySelector('.about__title'));

document.querySelectorAll('.about__text').forEach(element => {
  intersectionObserver.observe(element);
});