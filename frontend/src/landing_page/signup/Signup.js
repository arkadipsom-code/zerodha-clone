import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isSignup, setIsSignup] = useState(false); // Toggle state
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Track database response errors

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear old errors

    // Choose target endpoint dynamically
    const endpoint = isSignup ? "signup" : "login";
    const payload = isSignup
      ? { email, username, password }
      : { email, password };

    try {
      const response = await fetch(`http://localhost:3002/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        // If successful, take them directly into our beautiful dashboard!
        navigate("/dashboard");
      } else {
        // If user already exists or password is wrong, show the backend message
        setErrorMessage(data.message);
      }
    } catch (err) {
      setErrorMessage("Network error connecting to authentication servers.");
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: "450px" }}>
      <div className="card p-4 shadow-sm border-0 bg-white">
        <h3 className="fw-bold text-center mb-4">
          {isSignup ? "Create Account" : "Login"}
        </h3>

        {/* Error Feedback Banner */}
        {errorMessage && (
          <div className="alert alert-danger p-2 small text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-3">
              <label className="form-label small text-muted">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label small text-muted">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label small text-muted">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-2">
          <span className="text-muted small">
            {isSignup ? "Already have an account?" : "New to the platform?"}{" "}
            <button
              className="btn btn-link p-0 small pb-1"
              onClick={() => {
                setIsSignup(!isSignup);
                setErrorMessage("");
              }}
            >
              {isSignup ? "Login here" : "Sign up here"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
