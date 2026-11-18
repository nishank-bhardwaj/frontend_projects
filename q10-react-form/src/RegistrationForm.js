import React, { useState } from "react";
import InputField from "./InputField";

function RegistrationForm({ title }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sent, setSent] = useState(false);

  // one helper that updates a field and hides the old result
  const bind = (setter) => (e) => {
    setter(e.target.value);
    setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="card shadow-sm p-4 form-card">
      <h2 className="text-center mb-3">{title}</h2>

      <form onSubmit={onSubmit}>
        <InputField label="Name" type="text" value={name} onChange={bind(setName)} />
        {name && <p className="text-primary">Hello, {name}!</p>}
        <InputField label="Email" type="email" value={email} onChange={bind(setEmail)} />
        <InputField label="Password" type="password" value={password} onChange={bind(setPassword)} />
        <button className="btn btn-success w-100" type="submit">Submit</button>
      </form>

      {sent && (
        <div className="alert alert-info mt-4 mb-0">
          <h5>Submitted Details</h5>
          <p className="mb-1">Name: {name}</p>
          <p className="mb-1">Email: {email}</p>
          <p className="mb-0">Password: {"•".repeat(password.length)}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
