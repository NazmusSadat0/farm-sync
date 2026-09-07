import { useNavigate } from "react-router-dom";

function Reviewing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="status-card">

        <div className="waiting-circle">
          ...
        </div>

        <h2>Your problem is being reviewed again.</h2>

        <p>
          Please wait for the manager's next decision.
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

export default Reviewing;