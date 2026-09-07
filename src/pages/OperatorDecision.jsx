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
          ম্যানেজারের সিদ্ধান্ত
        </p>

        <h2>যন্ত্রপাতির অনুরোধ অনুমোদিত হয়েছে</h2>

        <p className="decision-text">
          প্রিয় অপারেটর,
        </p>

        <p className="decision-text">
          আপনার অনুরোধ পর্যালোচনা করে যন্ত্রপাতির অনুরোধ অনুমোদন করা হয়েছে।
        </p>

        <div className="decision-details">

          <div>
            <span>যন্ত্রপাতি</span>
            <strong>ট্রাক্টর-০১</strong>
          </div>

          <div>
            <span>অবস্থা</span>
            <strong>অনুমোদিত</strong>
          </div>

        </div>

        <h3>আপনি কি এটি গ্রহণ করতে চান?</h3>

        <div className="decision-buttons">

          <button
            className="accept-btn"
            onClick={handleYes}
          >
            হ্যাঁ
          </button>

          <button
            className="reject-btn"
            onClick={handleNo}
          >
            না
          </button>

        </div>

      </div>
    </div>
  );
}

export default OperatorDecision;