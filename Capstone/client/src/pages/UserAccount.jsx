import React, { useState, useEffect } from "react";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://127.0.0.1:27017/api/users/${
      isSignup ? "signup" : "signin"
    }`;

    const bodyData = isSignup
      ? {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      : { email: formData.email, password: formData.password };

    try {
      await fetch("http://127.0.0.1:27017/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setMessage(data.message);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: "50px" }}>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Sign out</button>
        </>
      ) : (
        <>
          <h2>{isSignup ? "Signup" : "Signin"}</h2>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">{isSignup ? "Signup" : "Signin"}</button>
          </form>
          <button
            onClick={() => setIsSignup(!isSignup)}
            style={{ marginTop: 10 }}
          >
            Switch to {isSignup ? "Signin" : "Signup"}
          </button>
        </>
      )}
      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
}
