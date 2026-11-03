import { useState } from "react";

function FoodAnalyzer() {

  const [food1, setFood1] = useState("");
  const [food2, setFood2] = useState("");
  const [result, setResult] = useState(null);

  const analyze = () => {

    if (!food1 || !food2) {
      alert("Please select two foods");
      return;
    }

    const combination =
      [food1, food2].sort().join("-");


    if (
      combination === "Dal-Rice"
    ) {

      setResult({
        status: "🟢 Healthy Combination",
        score: "85/100",
        message:
          "Rice and Dal provide a good balance of carbohydrates and protein."
      });

    }

    else if (
      combination === "Burger-Soft Drink"
    ) {

      setResult({
        status: "🔴 Not Recommended Frequently",
        score: "35/100",
        message:
          "This combination is high in calories, sugar and unhealthy fats."
      });

    }

    else {

      setResult({
        status: "🟡 Moderate Combination",
        score: "65/100",
        message:
          "This combination may be suitable depending on portion size."
      });

    }

  };


  return (
    <div>

      <h1>🥗 Food Combination Analyzer</h1>

      <p>
        Select two foods you want to eat together.
      </p>


      <div className="analyzer-box">

        <select
          value={food1}
          onChange={(e) =>
            setFood1(e.target.value)
          }
        >

          <option value="">
            Select Food 1
          </option>

          <option>Rice</option>
          <option>Dal</option>
          <option>Burger</option>
          <option>Soft Drink</option>
          <option>Apple</option>
          <option>Nuts</option>

        </select>


        <select
          value={food2}
          onChange={(e) =>
            setFood2(e.target.value)
          }
        >

          <option value="">
            Select Food 2
          </option>

          <option>Rice</option>
          <option>Dal</option>
          <option>Burger</option>
          <option>Soft Drink</option>
          <option>Apple</option>
          <option>Nuts</option>

        </select>


        <button onClick={analyze}>
          ✨ Analyze
        </button>

      </div>


      {result && (

        <div className="result-card">

          <h2>
            {result.status}
          </h2>

          <h1>
            {result.score}
          </h1>

          <p>
            {food1} + {food2}
          </p>

          <p>
            {result.message}
          </p>

        </div>

      )}

    </div>
  );
}

export default FoodAnalyzer;