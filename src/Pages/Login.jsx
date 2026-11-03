import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {

    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("nutriUser")
    );

    if (!user) {
      alert("Please create an account first!");
      return;
    }

    if (
      user.email === email &&
      user.password === password
    ) {

      alert("Login Successful!");

      navigate("/dashboard");

    } else {

      alert("Invalid Email or Password");

    }

  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>🥗 NutriAI</h1>

        <h2>Welcome Back 👋</h2>

        <form onSubmit={login}>

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
            Login
          </button>

        </form>

        <p>
          New user?
          <Link to="/signup"> Create Account</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;