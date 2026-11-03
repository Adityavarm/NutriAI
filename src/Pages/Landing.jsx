import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">

      <nav>
        <h2>🥗 NutriAI</h2>

        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup" className="nav-btn">
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="hero">

        <h1>
          Eat Better.
          <br />
          Combine Smarter. 🥗
        </h1>

        <p>
          NutriAI helps you understand healthy
          food combinations and make better
          nutrition choices.
        </p>

        <Link to="/signup" className="main-btn">
          Get Started
        </Link>

      </div>

    </div>
  );
}

export default Landing;