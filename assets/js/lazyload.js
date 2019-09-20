var path = window.location.pathname.split("/").pop();

let image;

if(path === 'index.html')
    image = '<img src="./assets/images/bbudronGlitch.png" class="glitchLogo" alt="bbudron logo" height=70px/>';
else
    image = '<img src="../assets/images/bbudronGlitch.png" class="glitchLogo" alt="bbudron logo" width="80%" height="80%"/>';

/*
let content = `<div class="hamburger button js-menu__toggle">
            <button class="button hamburger__button js-menu__toggle">
                <span class="hamburger__label">Open menu</span>
            </button>
        </div>
        <nav class="menu">
            <ul class="list menu__list">
                <li class="menu__group">
                    <p class="link menu__link">${image} is a Florida based graphic designer and web developer</p>
                </li>
                <li class="menu__group">
                    <p class="link menu__link">Contact Me:
                        <a href="mailto:bbudron@gmail.com">bbudron@gmail.com</a>
                    </p>
                    <p class="link menu__link">Socials:
                        <a href="https://www.instagram.com/bbudron/" target="_blank">Instagram</a>
                        <a href="https://www.twitter.com/bbbudron/" target="_blank">Twitter</a>
                    </p>
                </li>
            </ul>
        </nav>`


document.querySelector('footer').innerHTML = content;

(function(){
    'use strict';
  
    class Menu {
      constructor(settings) {
        this.nodeMenu = settings.nodeMenu;
        settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
      }
  
      toggle() {
        return this.nodeMenu.classList.toggle('js-menu_activated');
      }
    }
  
    let nodeMenu = document.querySelector('body');
    
    new Menu({
      nodeMenu: nodeMenu,
      nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
    });
  })();
*/


/*
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/



/*
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$(document.body).append('<div id="blurredContentFrame"><div id="blurredContent"></div></div>');

$('#blurredContentFrame').css({
  'width': $('#frostedBk').width(),
  'height': $('#frostedBk').height()
});

$('#content').clone().appendTo('#blurredContent');

sizeContent();
positionBlur();

function sizeContent() {
  $('#blurredContent').css({
    'width': $('#content').width(),
    'height': $('#content').height()
  });
}

function positionBlur() {
  var offset = $('#frostedBk').offset();
  $('#blurredContentFrame').css({
    'left': offset.left,
    'top': offset.top
  });
  $('#blurredContent').css({
    'left': -offset.left,
    'top': -offset.top
  });
}
*/



document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    console.log("this shit lit\n");
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})
