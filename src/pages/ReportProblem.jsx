import { useState } from "react";

function ReportProblem() {

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

    alert("Problem Submitted");
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
        />

        <label>Equipment</label>

        <select
          value={equipment}
          onChange={(e) =>
            setEquipment(e.target.value)
          }
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
        />

        <button
          className="btn"
          type="submit"
        >
          Submit
        </button>

      </form>

    </div>
  );
}

export default ReportProblem;