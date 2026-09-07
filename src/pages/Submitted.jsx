import { useNavigate } from "react-router-dom";

function Submitted() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="status-card">

        <div className="success-circle">
          ✓
        </div>

        <h2>আপনার সমস্যাটি জমা দেওয়া হয়েছে।</h2>

        <p>
          শীঘ্রই আপনাকে জানানো হবে।
        </p>

        <button
          className="btn"
          onClick={() => navigate("/operator")}
        >
          ড্যাশবোর্ডে ফিরে যান
        </button>

      </div>
    </div>
  );
}

export default Submitted;