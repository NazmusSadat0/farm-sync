import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomResponse } from "../utils/dummyResponse";

function Reviewing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {

      const savedRequest =
        sessionStorage.getItem(
          "operatorRequest"
        );

      const savedResponse =
        sessionStorage.getItem(
          "currentResponse"
        );

      if (!savedRequest) {
        navigate("/operator");
        return;
      }

      const request =
        JSON.parse(savedRequest);

      const currentResponse =
        savedResponse
          ? JSON.parse(savedResponse)
          : null;

      const nextResponse =
        getRandomResponse(
          request.type,
          currentResponse?.id ?? null
        );

      sessionStorage.setItem(
        "currentResponse",
        JSON.stringify(nextResponse)
      );

      navigate("/operator/decision");

    }, 5000);


    // Cleanup if user leaves page
    return () => {
      clearTimeout(timer);
    };

  }, [navigate]);

  return (
    <div className="container">

      <div className="status-card">

        <div className="waiting-circle">
          ...
        </div>

        <h2>
          আপনার অনুরোধটি পুনরায়
          পর্যালোচনা করা হচ্ছে।
        </h2>

        <p>
          অনুগ্রহ করে অপেক্ষা করুন।
          শীঘ্রই একটি নতুন সিদ্ধান্ত
          জানানো হবে।
        </p>

      </div>

    </div>
  );
}

export default Reviewing;