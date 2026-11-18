// Module 2: everything that touches the DOM output
const box = document.getElementById("output");

export const showResult = ({ principal, interest, total }) => {
  box.className = "";
  box.innerHTML = `Interest: ₹${interest.toFixed(2)}<br>Total amount: ₹${total.toFixed(2)}`;
};

export const showError = (text) => {
  box.className = "error";
  box.textContent = text;
};
