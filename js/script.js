var firstListItem = document.querySelector("ul li");

firstListItem.style.textTransform = "uppercase";
console.log(firstListItem);

var moreReasons = document.querySelector(".more-reasons");
moreReasons.style.fontSize = "2.5em";

var whyJS = document.querySelector(".intro h3");
whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';

var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector(".js-image img");
//console.log(mainImage);
mainImage.src = "img/js-code.png";
mainImage.alt = "Java code example";
