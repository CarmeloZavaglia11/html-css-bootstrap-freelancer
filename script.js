window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.paddingTop = "0px";
    document.getElementById("header").style.paddingBottom = "0px";
  } else {
    document.getElementById("header").style.paddingTop = "20px";
    document.getElementById("header").style.paddingBottom = "20px";
  }
}
