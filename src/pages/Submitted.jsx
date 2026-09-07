import { useNavigate } from "react-router-dom";

function Submitted() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="status-card">

        <div className="success-circle">
          ✓
        </div>

        <h2>Your problem is submitted.</h2>

        <p>
          You will be notified soon.
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

export default Submitted;