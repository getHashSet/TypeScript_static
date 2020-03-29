"use strict";
console.log('Sending...');
const button = document.querySelector('button'); // the ! mark tells typescript that I know for sure that a button will populate on the dom.
button.addEventListener("click", () => {
    console.log("clicked");
});
