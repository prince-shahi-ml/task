// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".slider");
//     const prevBtn = document.querySelector(".prev-btn");
//     const nextBtn = document.querySelector(".next-btn");
//     const cards = document.querySelectorAll(".match-card");

//     let currentIndex = 1; // Start at the first actual card
//     const firstClone = cards[0].cloneNode(true); // Clone first card
//     const lastClone = cards[cards.length - 1].cloneNode(true); // Clone last card

//     // Add clones to slider
//     slider.appendChild(firstClone);
//     slider.insertBefore(lastClone, slider.firstChild);

//     const updateSlider = () => {
//         const slideWidth = cards[0].offsetWidth;
//         slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     };

//     // Initialize slider position to the first card
//     updateSlider();

//     const handleNext = () => {
//         const slideWidth = cards[0].offsetWidth;
//         if (currentIndex >= cards.length) {
//             // Reset to first card (seamlessly)
//             currentIndex = 1;
//             slider.style.transition = "none";
//             slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//             setTimeout(() => {
//                 slider.style.transition = "transform 0.5s ease-in-out";
//             });
//         } else {
//             currentIndex++;
//             updateSlider();
//         }
//     };

//     const handlePrev = () => {
//         const slideWidth = cards[0].offsetWidth;
//         if (currentIndex <= 0) {
//             // Reset to last card (seamlessly)
//             currentIndex = cards.length;
//             slider.style.transition = "none";
//             slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//             setTimeout(() => {
//                 slider.style.transition = "transform 0.5s ease-in-out";
//             });
//         } else {
//             currentIndex--;
//             updateSlider();
//         }
//     };

//     prevBtn.addEventListener("click", handlePrev);
//     nextBtn.addEventListener("click", handleNext);

//     // Adjust slider on window resize
//     window.addEventListener("resize", updateSlider);
// });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
})