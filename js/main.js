(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    // $(".header-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     items: 1,
    //     dotsData: true,
    // });
  
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;
let timer;

/* Show Slide Function */
function showSlide(i) {
  slides.forEach((slide, idx) => slide.classList.toggle('active', idx === i));
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === i));
}

/* Next/Prev Controls */
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

/* Auto Slide */
function startAuto() {
  timer = setInterval(nextSlide, 5000);
}
function stopAuto() {
  clearInterval(timer);
}

/* Event Listeners */
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAuto(); startAuto();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAuto(); startAuto();
});
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
    stopAuto(); startAuto();
  });
});

startAuto();


// ****home page about section start***********
document.addEventListener("mousemove", function(e) {
    document.querySelectorAll(".parallax-card").forEach(card => {
      const speed = card.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 200;
      const y = (window.innerHeight - e.pageY * speed) / 200;
      card.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });



// ***************home page animated counter css

  const counters = document.querySelectorAll('.counter');
  const speed = 150; // Animation speed

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target.toLocaleString() + "+";
        }
      };
      updateCount();
    });
  };

  // Run animation when section is visible
  const section = document.querySelector('.stats-section');
  let started = false;

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    if (!started && rect.top < window.innerHeight - 100) {
      animateCounters();
      started = true;
    }
  });


// *********home page animated counter*****


// ****spin the wheel**********
 
// ****spin the  wheel**********





 
})(jQuery);


