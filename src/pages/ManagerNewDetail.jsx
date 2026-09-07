import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ManagerNewDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Same dummy requests as ManagerNew.jsx
  const newRequests = [
    {
      id: 1,
      operator: "Mr. X",
      problem: "নতুন ট্রাক্টর প্রয়োজন",
      requestType: "New Equipment Request",
      status: "অপেক্ষমাণ",
    },
    {
      id: 2,
      operator: "Mr. Y",
      problem: "নতুন স্প্রেয়ার প্রয়োজন",
      requestType: "New Equipment Request",
      status: "অপেক্ষমাণ",
    },
    {
      id: 3,
      operator: "Mr. Z",
      problem: "নতুন সেচ যন্ত্র প্রয়োজন",
      requestType: "New Equipment Request",
      status: "অপেক্ষমাণ",
    },
  ];

  // Find request using URL id
  const requestData = newRequests.find(
    (request) => request.id === Number(id)
  );

  const [equipment, setEquipment] = useState("");
  const [suggestion, setSuggestion] = useState("");

  // If invalid request id
  if (!requestData) {
    return (
      <div className="manager-page">
        <div className="status-card">
          <h2>অনুরোধটি পাওয়া যায়নি</h2>

          <button
            className="btn"
            onClick={() => navigate("/manager/new")}
          >
            ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!equipment || !suggestion.trim()) {
      alert("সব তথ্য পূরণ করুন");
      return;
    }

    // Get solved New requests
    const solvedNewRequests =
      JSON.parse(
        localStorage.getItem("solvedNewRequests")
      ) || [];

    // Add current request
    if (!solvedNewRequests.includes(requestData.id)) {
      solvedNewRequests.push(requestData.id);
    }

    // Save solved status
    localStorage.setItem(
      "solvedNewRequests",
      JSON.stringify(solvedNewRequests)
    );

    console.log("Manager New Decision:", {
      requestId: requestData.id,
      operator: requestData.operator,
      problem: requestData.problem,
      equipment,
      suggestion,
    });

    navigate("/manager/new");
  };

  return (
    <div className="manager-page">

      {/* Header */}
      <div className="manager-header">
        <div>
          <p className="manager-small-title">
            FARMSYNC
          </p>

          <h1>নতুন অনুরোধের সমাধান</h1>

          <p className="manager-subtitle">
            অপারেটরের অনুরোধ পর্যালোচনা করে সিদ্ধান্ত দিন
          </p>
        </div>

        <div className="manager-role">
          ম্যানেজার
        </div>
      </div>

      <div className="problem-detail-layout">

        {/* LEFT SIDE */}
        <div className="problem-statement-card">

          <div className="problem-detail-label">
            নতুন অনুরোধ
          </div>

          <h2>Request Statement</h2>

          <div className="operator-info">
            <span>অপারেটর</span>

            <strong>
              {requestData.operator}
            </strong>
          </div>

          <div className="problem-statement-box">
            <p>
              {requestData.problem}
            </p>
          </div>

          <button
            type="button"
            className="manager-back-button"
            onClick={() => navigate("/manager/new")}
          >
            ← ফিরে যান
          </button>

        </div>


        {/* RIGHT SIDE */}
        <form
          className="manager-solution-card"
          onSubmit={handleSubmit}
        >

          <div className="problem-detail-label">
            আপনার সিদ্ধান্ত
          </div>

          <h2>সমাধান দিন</h2>

          <p className="solution-description">
            অপারেটরের জন্য উপযুক্ত যন্ত্রপাতি ও
            প্রয়োজনীয় নির্দেশনা নির্বাচন করুন।
          </p>


          <div className="manager-form-group">
            <label>যন্ত্রপাতি</label>

            <select
              value={equipment}
              onChange={(e) =>
                setEquipment(e.target.value)
              }
            >
              <option value="">
                যন্ত্রপাতি নির্বাচন করুন
              </option>

              <option value="ট্রাক্টর">
                ট্রাক্টর
              </option>

              <option value="লাঙল">
                লাঙল
              </option>

              <option value="ডিস্ক হ্যারো">
                ডিস্ক হ্যারো
              </option>

              <option value="সিড ড্রিল">
                সিড ড্রিল
              </option>

              <option value="প্ল্যান্টার">
                প্ল্যান্টার
              </option>

              <option value="ন্যাপস্যাক স্প্রেয়ার">
                ন্যাপস্যাক স্প্রেয়ার
              </option>

              <option value="বুম স্প্রেয়ার">
                বুম স্প্রেয়ার
              </option>

              <option value="ড্রিপ / স্প্রিংকলার সেচ">
                ড্রিপ / স্প্রিংকলার সেচ
              </option>

              <option value="কালটিভেটর">
                কালটিভেটর
              </option>

              <option value="থ্রেশার">
                থ্রেশার
              </option>
            </select>
          </div>


          {/* New section has NO Duration */}


          <div className="manager-form-group">
            <label>পরামর্শ</label>

            <textarea
              placeholder="অপারেটরের জন্য আপনার পরামর্শ লিখুন..."
              value={suggestion}
              onChange={(e) =>
                setSuggestion(e.target.value)
              }
            />
          </div>

          <button
            className="manager-submit-solution"
            type="submit"
          >
            সিদ্ধান্ত জমা দিন
          </button>

        </form>

      </div>
    </div>
  );
}

export default ManagerNewDetail;