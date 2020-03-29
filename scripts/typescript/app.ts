console.log("Logged in as user");

const button = document.querySelector("button")!; // the ! mark tells typescript that I know for sure that a button will populate on the dom.

function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "Way to go you."));
}
