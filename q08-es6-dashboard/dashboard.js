// Module 2: dashboard loading
import { log, wait } from "./logger.js";

export const loadDashboard = async (user) => {
  log("Step 4: loading dashboard... (1.5s)");
  await wait(1500);

  // destructuring with rename + default value
  const { name, email, status, skills: [firstSkill = "n/a"] } = user;

  const box = document.getElementById("dash");
  box.hidden = false;
  box.innerHTML = `
    <h2>Welcome, ${name}!</h2>
    <p>Email: ${email}</p>
    <p>Status: <b>${status}</b></p>
    <p>Top skill: ${firstSkill}</p>
    <p>All skills: ${user.skills.join(", ") || "none"}</p>`;
  log("Step 5: dashboard displayed");
};
