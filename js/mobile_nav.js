!function(){"use strict";var t=document.getElementsByTagName("body")[0],e=document.getElementById("mobile-nav-toggle"),n=document.getElementById("mobile-nav-dimmer"),o="mobile-nav-on";e&&(e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t.classList.toggle(o)}),n.addEventListener("click",function(e){t.classList.contains(o)&&(e.preventDefault(),t.classList.remove(o))}))}();