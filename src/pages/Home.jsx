import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">

        <h1>স্বাগতম</h1>
        <h2>FarmSync</h2>

        <p className="subtitle">
          আধুনিক খামারের জন্য স্মার্ট যন্ত্রপাতি ব্যবস্থাপনা
        </p>

        <button
          className="btn"
          onClick={() => navigate("/operator")}
        >
          অপারেটর হিসেবে লগ ইন করুন
        </button>

        <button
          className="btn"
          onClick={() => navigate("/manager")}
        >
          ম্যানেজার হিসেবে লগ ইন করুন
        </button>

      </div>
    </div>
  );
}

export default Home;