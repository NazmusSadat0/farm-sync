import { useNavigate } from "react-router-dom";

function OperatorDecision() {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/operator/accepted");
  };

  const handleNo = () => {
    navigate("/operator/reviewing");
  };

  return (
    <div className="container">
      <div className="decision-card">

        <p className="decision-label">
          Manager Decision
        </p>

        <h2>Equipment Request Approved</h2>

        <p className="decision-text">
          Dear Operator,
        </p>

        <p className="decision-text">
          Your request has been reviewed and an
          equipment request has been granted.
        </p>

        <div className="decision-details">

          <div>
            <span>Equipment</span>
            <strong>Tractor-01</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>Approved</strong>
          </div>

        </div>

        <h3>Do you accept it?</h3>

        <div className="decision-buttons">

          <button
            className="accept-btn"
            onClick={handleYes}
          >
            Yes
          </button>

          <button
            className="reject-btn"
            onClick={handleNo}
          >
            No
          </button>

        </div>

      </div>
    </div>
  );
}

export default OperatorDecision;