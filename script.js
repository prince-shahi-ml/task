document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-responsive');
  
    toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  });


$('.match-schedule').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 8000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
})

$('.team-wrapper').owlCarousel({
    margin: 16,
    nav: false,
    dots: true,
    slideTransition: 'linear',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        },
        1200: {
            items: 7
        }
    }
})