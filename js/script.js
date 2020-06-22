  // Funzione topscroll

// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
    },15);
}

// ResizeBar Function

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.paddingTop = "0px";
    document.getElementById("header").style.paddingBottom = "0px";
  } else {
    document.getElementById("header").style.paddingTop = "20px";
    document.getElementById("header").style.paddingBottom = "20px";
  }

  mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  portfolio = document.getElementById("portfolio");
  portfolio.classList.remove("active");
  about = document.getElementById("about");
  about.classList.remove("active");
  contact = document.getElementById("contact");
  contact.classList.remove("active");

  if (document.body.scrollTop > 2059 || document.documentElement.scrollTop > 2059) {
    contact.classList.add("active");
} else if (document.body.scrollTop > 1481 || document.documentElement.scrollTop > 1481) {
    about.classList.add("active");
} else if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    portfolio.classList.add("active");
  }
}

// (function() {
//   'use strict';
//
//   var section = document.querySelectorAll(".section-spy");
//   var sections = {};
//   var i = 0;
//
//   Array.prototype.forEach.call(section, function(e) {
//     sections[e.id] = e.offsetTop;
//   });
//
//   window.onscroll = function() {
//     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
//
//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector('.active').setAttribute('class', ' ');
//         document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
//       }
//     }
//   };
// })();
