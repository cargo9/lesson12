
// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });


// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });


// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// document.addEventListener("keydown", event => {
//   console.log("key:", event.key);
//   console.log("code: ", event.code);
// });


// document.addEventListener("keydown", event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyC") {
//     console.log("«Ctrl + c» or «Command + s» combo");
//   }
// });

document.addEventListener("keydown", event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === "KeyC") {
    console.log("ти натиснув Ctrl + c"); 
  }
})

document.addEventListener("keydown", event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === "KeyV") {
    console.log("ти натиснув Ctrl + v"); 
    alert("ти натиснув Ctrl + v")
  }
})