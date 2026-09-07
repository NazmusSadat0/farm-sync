import { useNavigate } from "react-router-dom";

function Accepted() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="status-card">

        <div className="success-circle">
          ✓
        </div>

        <h2>অভিনন্দন!</h2>

        <p>
          আপনার যন্ত্রপাতির অনুরোধ গ্রহণ করা হয়েছে।
        </p>

        <p className="secondary-message">
          অনুগ্রহ করে আপনার যন্ত্রপাতি গ্রহণ করুন।
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

export default Accepted;