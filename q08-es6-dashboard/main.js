import { registerUser } from "./register.js";
import { loadDashboard } from "./dashboard.js";
import { log } from "./logger.js";

const btn = document.getElementById("submitBtn");

// callback invoked by the module once saving is finished
const onSaved = (u) => log(`Step 3 (callback): ${u.name} saved with status "${u.status}"`);

btn.addEventListener("click", async () => {
  const name = document.getElementById("uName").value.trim() || undefined; // undefined -> default param kicks in
  const email = document.getElementById("uMail").value.trim() || undefined;
  const skills = document.getElementById("uSkills").value.split(",").map((s) => s.trim()).filter(Boolean);

  btn.disabled = true;
  log("--- start ---");
  try {
    const user = await registerUser(name, email, skills, onSaved);
    await loadDashboard(user);
    log("--- done ---");
  } catch (err) {
    log("Error: " + err.message);
    btn.disabled = false;
  }

  // Sync vs async demo: this line runs BEFORE the awaited work above completes
});

log("Page ready (this prints immediately - synchronous code never waits for timers)");
setTimeout(() => log("setTimeout 0ms callback runs AFTER current sync code"), 0);
log("Last synchronous line of main.js");
