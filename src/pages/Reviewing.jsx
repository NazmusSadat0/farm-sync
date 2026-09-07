import { useNavigate } from "react-router-dom";

function Reviewing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="status-card">

        <div className="waiting-circle">
          ...
        </div>

        <h2>আপনার সমস্যাটি আবার পর্যালোচনা করা হচ্ছে।</h2>

        <p>
          ম্যানেজারের পরবর্তী সিদ্ধান্তের জন্য অপেক্ষা করুন।
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

export default Reviewing;