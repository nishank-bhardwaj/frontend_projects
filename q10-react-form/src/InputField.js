import React from "react";

function InputField({ label, type, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <input
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Your ${label.toLowerCase()}`}
      />
    </div>
  );
}

export default InputField;
