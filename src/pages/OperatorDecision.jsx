import { useNavigate } from "react-router-dom";

function OperatorDecision() {
  const navigate = useNavigate();

  const savedRequest =
    sessionStorage.getItem("operatorRequest");

  const savedResponse =
    sessionStorage.getItem("currentResponse");

  const request = savedRequest
    ? JSON.parse(savedRequest)
    : null;

  const response = savedResponse
    ? JSON.parse(savedResponse)
    : null;

  if (!request || !response) {
    return (
      <div className="container">

        <div className="status-card">

          <h2>
            কোনো সক্রিয় অনুরোধ পাওয়া যায়নি।
          </h2>

          <button
            className="btn"
            onClick={() =>
              navigate("/operator")
            }
          >
            ড্যাশবোর্ডে ফিরে যান
          </button>

        </div>

      </div>
    );
  }

  const handleAccept = () => {
    navigate("/operator/accepted");
  };

  const handleReject = () => {
    navigate("/operator/reviewing");
  };

  return (
    <div className="container">

      <div className="decision-card">

        <p className="decision-label">
          ম্যানেজারের সিদ্ধান্ত
        </p>

        <h2>
          যন্ত্রপাতি বরাদ্দ
        </h2>

        <p className="decision-text">
          আপনার অনুরোধ পর্যালোচনা করা হয়েছে।
          নিচের যন্ত্রপাতিটি আপনার জন্য
          প্রস্তাব করা হয়েছে।
        </p>

        <div className="decision-details">

          <div>
            <span>যন্ত্রপাতি</span>

            <strong>
              {response.equipment}
            </strong>
          </div>


          {/* Problem request হলে Duration দেখাবে */}
          {request.type === "problem" &&
            response.duration && (

              <div>
                <span>
                  ব্যবহারের সময়কাল
                </span>

                <strong>
                  {response.duration}
                </strong>
              </div>

            )}


          <div>
            <span>পরামর্শ</span>

            <strong>
              {response.suggestion}
            </strong>
          </div>

        </div>

        <h3>
          আপনি কি এই সিদ্ধান্ত গ্রহণ করবেন?
        </h3>

        <div className="decision-buttons">

          <button
            className="accept-btn"
            onClick={handleAccept}
          >
            হ্যাঁ
          </button>

          <button
            className="reject-btn"
            onClick={handleReject}
          >
            না
          </button>

        </div>

      </div>

    </div>
  );
}

export default OperatorDecision;