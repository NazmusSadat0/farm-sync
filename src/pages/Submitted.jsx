import { useNavigate } from "react-router-dom";
import { getRandomResponse } from "../utils/dummyResponse";

function Submitted() {
  const navigate = useNavigate();

  const handleContinue = () => {
    const savedRequest =
      sessionStorage.getItem("operatorRequest");

    if (!savedRequest) {
      navigate("/operator");
      return;
    }

    const request = JSON.parse(savedRequest);

    const response = getRandomResponse(
      request.type
    );

    sessionStorage.setItem(
      "currentResponse",
      JSON.stringify(response)
    );

    navigate("/operator/decision");
  };

  return (
    <div className="container">

      <div className="status-card">

        <div className="success-circle">
          ✓
        </div>

        <h2>
          আপনার সমস্যা সফলভাবে জমা হয়েছে।
        </h2>

        <p>
          ম্যানেজারের সিদ্ধান্ত প্রস্তুত হলে
          নিচের বাটনে ক্লিক করুন।
        </p>

        <button
          className="btn"
          onClick={handleContinue}
        >
          সিদ্ধান্ত দেখুন
        </button>

      </div>

    </div>
  );
}

export default Submitted;