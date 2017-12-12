const FEATHRED = document.querySelector(".featured-image");
const THEIMAGE = FEATHRED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

FEATHRED.appendChild(captionElement);

THEIMAGE.setAttribute('alt','');
