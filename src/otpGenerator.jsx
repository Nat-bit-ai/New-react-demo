import React, { useState } from "react";

function OTPGenerator() {
  const [otp, setOtp] = useState("");

  // Function to generate a 6-digit OTP
  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000); // ensures 6 digits
    setOtp(newOtp.toString());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>6-Digit OTP Generator</h1>
      <p style={{ fontSize: "24px", margin: "20px 0" }}>
        {otp || "Click Generate to get OTP"}
      </p>
      <button
        onClick={generateOTP}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none"
        }}
      >
        Generate OTP
      </button>
    </div>
  );
}

export default OTPGenerator;