import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [secretWord, setSecretWord] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    secretWord?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!secretWord) {
      newErrors.secretWord = "Secret word is required";
    } else if (secretWord.length < 4) {
      newErrors.secretWord = "Secret word must be at least 4 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const payload = { email, secretWord };
      console.log("Forgot password payload:", payload);

      // SIMULATE API CALL
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: call backend API
      // example: POST /api/forgot-password
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: 420 }}>
        <h4 className="text-center mb-2 fw-semibold">Lupa Password</h4>
        <p className="text-center small text-muted mb-4">
          Masukan alamat email dan Secret Word pada Form
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Secret Word</label>
            <input
              type="text"
              className={`form-control ${errors.secretWord ? "is-invalid" : ""}`}
              placeholder="Your secret word"
              value={secretWord}
              onChange={(e) => setSecretWord(e.target.value)}
            />
            {errors.secretWord && (
              <div className="invalid-feedback">{errors.secretWord}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                />
                Verifying...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center mt-3">
            <NavLink to="/login" className={"small text-decoration none"}>
                ← Back to Login
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
