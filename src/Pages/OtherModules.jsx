function OtherModules({ type }) {

  const user = JSON.parse(
    localStorage.getItem("nutriUser")
  );


  if (type === "meals") {

    return (
      <div>

        <h1>🍽️ Healthy Meal Suggestions</h1>

        <div className="simple-card">

          <h2>🌅 Breakfast</h2>

          <p>
            🥣 Oats + 🍌 Banana
          </p>

          <p>
            A simple healthy breakfast option.
          </p>

        </div>


        <div className="simple-card">

          <h2>☀️ Lunch</h2>

          <p>
            🍚 Rice + 🥣 Dal + 🥦 Vegetables
          </p>

          <p>
            A balanced meal combination.
          </p>

        </div>

      </div>
    );

  }


  if (type === "nutrition") {

    return (
      <div>

        <h1>📊 Nutrition Overview</h1>

        <div className="nutrition-simple">

          <div>
            🔥
            <h2>1250</h2>
            <p>Calories</p>
          </div>

          <div>
            🥩
            <h2>65g</h2>
            <p>Protein</p>
          </div>

          <div>
            🍞
            <h2>150g</h2>
            <p>Carbs</p>
          </div>

        </div>

      </div>
    );

  }


  if (type === "profile") {

    return (
      <div>

        <h1>👤 My Profile</h1>

        <div className="simple-card">

          <h2>
            {user?.name}
          </h2>

          <p>
            📧 {user?.email}
          </p>

          <p>
            🎯 Goal: Healthy Eating
          </p>

        </div>

      </div>
    );

  }

}

export default OtherModules;