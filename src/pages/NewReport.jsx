import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewReport() {
  const navigate = useNavigate();

  const [problem, setProblem] = useState("");
  const [equipment, setEquipment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      problem,
      equipment,
    };

    console.log(data);

    navigate("/operator/submitted");
  };

  return (
    <div className="container">
      <form
        className="form-card"
        onSubmit={handleSubmit}
      >
        <h2>Please Fill Up The Form</h2>

        <label>Problem</label>

        <input
          type="text"
          placeholder="Enter the problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
        />

        <label>Equipment</label>

        <select
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          required
        >
          <option value="">
            Select Equipment
          </option>

          <option value="Tractor-01">
            Tractor-01
          </option>

          <option value="Pump-03">
            Pump-03
          </option>

          <option value="Harvester-02">
            Harvester-02
          </option>

          <option value="Sprayer-01">
            Sprayer-01
          </option>
        </select>

        <button
          className="btn"
          type="submit"
        >
          Submit
        </button>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/operator")}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default NewReport;