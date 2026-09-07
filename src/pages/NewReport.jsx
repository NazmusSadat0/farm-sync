import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewReport() {
  const navigate = useNavigate();

  const [problem, setProblem] = useState("");
  const [equipment, setEquipment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      problem,
      equipment,
    };

    console.log(data);

    navigate("/operator/submitted");
  };

  return (
    <div className="container">
      <form
        className="form-card"
        onSubmit={handleSubmit}
      >
        <h2>ফর্মটি পূরণ করুন</h2>

        <label>সমস্যা</label>

        <input
          type="text"
          placeholder="সমস্যাটি লিখুন"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
        />

        <label>যন্ত্রপাতি</label>

        <select
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          required
        >
          <option value="">
            যন্ত্রপাতি নির্বাচন করুন
          </option>

          <option value="Tractor">
            ট্র্যাক্টর
          </option>

          <option value="Plough">
            লাঙ্গল / হাল
          </option>

          <option value="Disc-Harrow">
            ডিস্ক হ্যারো
          </option>

          <option value="Seed-Drill">
            বীজ বোনার যন্ত্র
          </option>

          <option value="Cultivator">
            আবাদকারী
          </option>

          <option value="Agricultural-Sprayer">
            কৃষি স্প্রে মেশিন
          </option>

          <option value="Tractor-Mounted-Sprayer">
            ট্র্যাক্টরে সংযোজিত কীটনাশক ছিটানোর যন্ত্র
          </option>

          <option value="Sprinkler-Irrigation">
            স্প্রিঙ্কলার সেচ
          </option>

          <option value="Power-Tiller">
            জমি চাষের পাওয়ার টিলার
          </option>

          <option value="Soil-Testing-Kit">
            মাটি পরীক্ষার কিট
          </option>
        </select>

        <button
          className="btn"
          type="submit"
        >
          জমা দিন
        </button>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/operator")}
        >
          ফিরে যান
        </button>
      </form>
    </div>
  );
}

export default NewReport;