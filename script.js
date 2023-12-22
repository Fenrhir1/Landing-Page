const subscribeBtn = document.getElementById("subscribe-btn");
const containerDisplay = document.getElementById("container-display");
const hiddenSubscribe = document.getElementById("hidden-subscribe");
const hiddenSubscribeBtn = document.getElementById("hidden-btn");
const inputBox = document.getElementById("input-box");

function onButtonSubscribe() {
  let inputBoxValue = inputBox.value;
  if (inputBoxValue === "") {
    alert("Please enter your email address!");
  } else containerDisplay.style.display = "none";
  hiddenSubscribe.style.display = "flex";
  hiddenSubscribe.classList.add("slide-top");
}

function onButtonReturn() {
  containerDisplay.style.display = "";
  hiddenSubscribe.style.display = "none";
}

subscribeBtn.addEventListener("click", onButtonSubscribe);
hiddenSubscribeBtn.addEventListener("click", onButtonReturn);
