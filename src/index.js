// count time user spends on page and display fantasy euro value
// target 514 euros, {gainsInSeconds} is gained per second
const gainsInSeconds = 0.00019830246;
const outputTarget = document.getElementById("profit");

let gains = 0;

const incomeTicker = setInterval(() => {
  gains += gainsInSeconds;

  outputTarget.innerHTML = `${gains} euros`;
}, 1000);
