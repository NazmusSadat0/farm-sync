import { useNavigate } from "react-router-dom";

function Operator() {
  const navigate = useNavigate();

  const equipment = [
    {
      name: "ট্র্যাক্টর ",
      status: "Working",
    },
    {
      name: "লাঙ্গল / হাল  ",
      status: "Problem",
    },
    {
      name: "ডিস্ক হ্যারো",
      status: "Working",
    },
    {
      name: " বীজ বোনার যন্ত্র",
      status: "Problem",
    },
    {
        name: "আবাদকারী",
        status: "Working"
    },
    {
        name: "কৃষি স্প্রে মেশিন",
        status: "Working",
    },
    {
        name: "ট্র্যাক্টরে সংযোজিত কীটনাশক ছিটানোর যন্ত্র",
        status: "Working"
    },
    {
        name: "স্প্রিঙ্কলার সেচ",
        status: "Working"
    },
    {
        name: " জমি চাষের পাওয়ার টিলার",
        status: "Problem"
    }, 
    {
        name: "মাটি পরীক্ষার কীট",
        status: "Working"
    }
  ];

  return (
    <div className="container">
      <div className="dashboard">

        <div className="tabs">
          <button className="tab">Dashboard</button>

          <button
            className="tab"
            onClick={() =>
              navigate("/operator/report")
            }
          >
            Update
          </button>

          <button className="tab">
            New
          </button>
        </div>

        <div className="equipment-list">

          {equipment.map((item, index) => (
            <div
              key={index}
              className="equipment-item"
            >
              <span>{item.name}</span>

              <span
                className={
                  item.status === "Working"
                    ? "working"
                    : "problem"
                }
              >
                {item.status}
              </span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Operator;