var form = document.querySelector(".main-form");
var inputs = document.querySelectorAll(".inputField");
var output = document.querySelector(".output");
var gif = document.querySelector(".gif");

let costPrice = 0;
let quant = 0;
let currentPrice = 0;

form?.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  var html = document.documentElement;
  html.scrollTop += 200;
  costPrice = Number(inputs[0].value);
  quant = Number(inputs[1].value);
  currentPrice = Number(inputs[2].value);
  if (currentPrice === costPrice) {
    output.innerHTML = `Even-Steven!😇 Niether a gain, nor a loss`;

    gif.innerHTML =
      '<img src="https://media.giphy.com/media/PjaTjG8ct5cNOtjjZg/giphy.gif" style="display: block; margin: 1.5rem auto 1rem; max-width: 300px; max-height: 300px; border-radius: 10px;">';
  } else if (currentPrice > costPrice) {
    let profit = (currentPrice - costPrice) * quant;
    const profitPerCent = (profit/ (costPrice * quant)) * 100

    output.innerHTML = `Congratulations!🥳 You gained ${profitPerCent.toFixed(2)}%. Your total profit is ₹${profit}`;

    gif.innerHTML =
      '<img src="https://media.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.gif" style="display: block; margin: 1.5rem auto 1rem; max-width: 300px; max-height: 300px; border-radius: 10px;">';
  } else {
    let loss = (costPrice - currentPrice) * quant;
    const lossPercent = (loss/ (costPrice * quant)) * 100
    output.innerHTML = `Oh No!😦 You lost ${lossPercent.toFixed(2)}%. Your total loss is ₹${loss}`;

    gif.innerHTML =
      '<img src="https://media.giphy.com/media/W0c3xcZ3F1d0EYYb0f/giphy.gif" style="display: block; margin: 1.5rem auto 1rem; max-width: 300px; max-height: 300px; border-radius: 10px;">';
  }
}