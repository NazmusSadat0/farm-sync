import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ManagerNew() {
  const navigate = useNavigate();

  const [solvedNewRequests] = useState(() => {
    return JSON.parse(
      localStorage.getItem("solvedNewRequests")
    ) || [];
  });

  // Temporary frontend data.
  // Later this will come from Operator -> New through backend.
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

  return (
    <div className="manager-page">

      {/* Header */}
      <div className="manager-header">
        <div>
          <p className="manager-small-title">
            FARMSYNC
          </p>

          <h1>নতুন অনুরোধ</h1>

          <p className="manager-subtitle">
            অপারেটরদের নতুন যন্ত্রপাতির অনুরোধ পর্যালোচনা করুন
          </p>
        </div>

        <div className="manager-role">
          ম্যানেজার
        </div>
      </div>

      {/* Navigation */}
      <div className="manager-nav">

        <button
          onClick={() => navigate("/manager")}
        >
          ড্যাশবোর্ড
        </button>

        <button
          onClick={() => navigate("/manager/problems")}
        >
          সমস্যা
        </button>

        <button className="manager-nav-active">
          নতুন
        </button>

      </div>

      {/* Main Content */}
      <div className="manager-problem-container">

        <div className="problem-page-heading">

          <div>
            <h2>নতুন অনুরোধের তালিকা</h2>

            <p>
              সিদ্ধান্ত দেওয়ার জন্য একটি অনুরোধ নির্বাচন করুন
            </p>
          </div>

          <div className="problem-count">
            {newRequests.length} টি অনুরোধ
          </div>

        </div>

        <div className="manager-problem-list">

          {newRequests.map((item) => (

            <div
              className="manager-problem-card"
              key={item.id}
              onClick={() => navigate(`/manager/new/${item.id}`)}
            >

              <div className="problem-number">
                {item.id}
              </div>

              <div className="problem-information">

                <div className="problem-top-row">

                  <h3>
                    {item.operator}
                  </h3>

                  <span className={solvedNewRequests.includes(item.id) ? "solved-badge" : "pending-badge"}>
                    {solvedNewRequests.includes(item.id) ? "সফল হয়েছে" : item.status}
                  </span>

                </div>

                <p>
                  {item.problem}
                </p>


              </div>

              <div className="problem-arrow">
                →
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ManagerNew;
