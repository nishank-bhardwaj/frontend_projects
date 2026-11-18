// Module 1: user registration
import { log, wait } from "./logger.js";

// default parameter + rest parameter
export const buildUser = (name = "Guest", email = "none@example.com", ...skills) => {
  var accountType = "standard";   // var  -> function scoped
  let status = "pending";         // let  -> block scoped, reassignable
  const id = Date.now();          // const -> cannot be reassigned
  const joinedOn = new Date().toLocaleDateString();

  // object literal extensions: shorthand properties, computed key, method shorthand
  const field = "accountType";
  return {
    id, name, email, skills, status, joinedOn,
    [field]: accountType,
    summary() { return `${this.name} <${this.email}>`; }
  };
};

// Promise-based "database save" with a callback fired on completion
export const saveUser = (user, onSaved) =>
  new Promise((resolve) => {
    log("  [async] saving user... (2s)");
    setTimeout(() => {
      const saved = { ...user, status: "active" };   // spread copies + overrides
      onSaved(saved);                                  // callback function
      resolve(saved);
    }, 2000);
  });

export const registerUser = async (name, email, skills, onSaved) => {
  log("Step 1: building user object (synchronous)");
  const user = buildUser(name, email, ...skills);      // spread array into rest
  log(`  created -> ${user.summary()}`);
  log("Step 2: waiting for save...");
  await wait(300);
  return saveUser(user, onSaved);
};
