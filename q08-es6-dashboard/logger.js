// tiny helper so messages show on the page AND in the console
export const log = (message) => {
  console.log(message);
  document.getElementById("logs").textContent += message + "\n";
};
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
