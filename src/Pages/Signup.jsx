import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "nutriUser",
      JSON.stringify(user)
    );

    alert("Account Created Successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>🥗 NutriAI</h1>

        <h2>Create Account</h2>

        <form onSubmit={signup}>

          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Sign Up
          </button>

        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;