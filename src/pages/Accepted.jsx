import { useNavigate } from "react-router-dom";

function Accepted() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="status-card">

        <div className="success-circle">
          ✓
        </div>

        <h2>Congratulations!</h2>

        <p>
          Your equipment request has been accepted.
        </p>

        <p className="secondary-message">
          Please receive your equipment.
        </p>

        <button
          className="btn"
          onClick={() => navigate("/operator")}
        >
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default Accepted;