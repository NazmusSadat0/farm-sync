import { useNavigate } from "react-router-dom";

function Accepted() {
  const navigate = useNavigate();

  const handleDashboard = () => {

    // Request has finished.
    sessionStorage.removeItem(
      "operatorRequest"
    );

    sessionStorage.removeItem(
      "currentResponse"
    );

    navigate("/operator");
  };

  return (
    <div className="container">

      <div className="status-card">

        <div className="success-circle">
          ✓
        </div>

        <h2>
          অভিনন্দন!
        </h2>

        <p>
          আপনি ম্যানেজারের সিদ্ধান্ত
          গ্রহণ করেছেন।
        </p>

        <p className="secondary-message">
          নির্ধারিত যন্ত্রপাতি সংগ্রহ করুন।
        </p>

        <button
          className="btn"
          onClick={handleDashboard}
        >
          ড্যাশবোর্ডে ফিরে যান
        </button>

      </div>

    </div>
  );
}

export default Accepted;