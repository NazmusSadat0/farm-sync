import { useNavigate } from "react-router-dom";

function ManagerProblems() {
  const navigate = useNavigate();

  // Temporary frontend data.
  // Later this will come from backend/database.
  const problems = [
    {
      id: 1,
      operator: "জনাব এক্স",
      problem: "জমি চাষের জন্য একটি ট্রাক্টর প্রয়োজন",
      requestType: "যন্ত্রপাতির অনুরোধ",
      status: "অপেক্ষমাণ",
    },
    {
      id: 2,
      operator: "জনাব ওয়াই",
      problem: "ফসলের জন্য স্প্রেয়ার প্রয়োজন",
      requestType: "যন্ত্রপাতির অনুরোধ",
      status: "অপেক্ষমাণ",
    },
    {
      id: 3,
      operator: "জনাব জেড",
      problem: "সেচের জন্য যন্ত্রপাতি প্রয়োজন",
      requestType: "যন্ত্রপাতির অনুরোধ",
      status: "অপেক্ষমাণ",
    },
  ];

  return (
    <div className="manager-page">

      {/* Header */}
      <div className="manager-header">
        <div>
          <p className="manager-small-title">
            ফার্মসিঙ্ক
          </p>

          <h1>সমস্যা ও অনুরোধ</h1>

          <p className="manager-subtitle">
            অপারেটরদের জমা দেওয়া সমস্যাগুলো পর্যালোচনা করুন
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

        <button className="manager-nav-active">
          সমস্যা
        </button>

        <button>
          নতুন
        </button>

      </div>

      {/* Main Content */}
      <div className="manager-problem-container">

        <div className="problem-page-heading">

          <div>
            <h2>অপেক্ষমাণ সমস্যা</h2>

            <p>
              সমাধান দেওয়ার জন্য একটি সমস্যা নির্বাচন করুন
            </p>
          </div>

          <div className="problem-count">
            {problems.length} টি সমস্যা
          </div>

        </div>

        <div className="manager-problem-list">

          {problems.map((item) => (

            <div
              className="manager-problem-card"
              key={item.id}
              onClick={() =>
                navigate(
                  `/manager/problem/${item.id}`,
                  {
                    state: {
                      problem: item,
                    },
                  }
                )
              }
            >

              <div className="problem-number">
                {item.id}
              </div>

              <div className="problem-information">

                <div className="problem-top-row">

                  <h3>
                    {item.operator}
                  </h3>

                  <span className="pending-badge">
                    {item.status}
                  </span>

                </div>

                <p>
                  {item.problem}
                </p>

                <span className="request-type">
                  {item.requestType}
                </span>

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

export default ManagerProblems;