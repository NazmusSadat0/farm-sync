import { useState } from "react";
import { useNavigate } from "react-router-dom";

// It will be worked as Update section

function ReportProblem() {

  const navigate = useNavigate();

  const [problem, setProblem] = useState("");
  const [equipment, setEquipment] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      problem,
      equipment,
      duration,
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

        <label>Update/Request</label>

        <input
          type="text"
          value={problem}
          onChange={(e) =>
            setProblem(e.target.value)
          }
          required
        />

        <label>Equipment</label>

        <select
          value={equipment}
          onChange={(e) =>
            setEquipment(e.target.value)
          }
          required
        >
          <option value="">
            Select Equipment
          </option>

          <option>
            Tractor-01
          </option>

          <option>
            Pump-03
          </option>

          <option>
            Harvester-02
          </option>

          <option>
            Sprayer-01
          </option>
        </select>

        <label>Duration</label>

        <input
          type="text"
          placeholder="2 Hours"
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
          required
        />

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

export default ReportProblem;