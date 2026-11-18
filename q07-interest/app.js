import { simpleInterest, totalAmount } from "./calc.js";
import { showResult, showError } from "./view.js";

const read = (id) => parseFloat(document.getElementById(id).value);

document.getElementById("go").addEventListener("click", () => {
  const [principal, rate, years] = ["p", "r", "t"].map(read);

  if ([principal, rate, years].some((n) => Number.isNaN(n) || n <= 0)) {
    return showError("Enter positive numbers in all three fields.");
  }
  const interest = simpleInterest(principal, rate, years);
  showResult({ principal, interest, total: totalAmount(principal, interest) });
});
