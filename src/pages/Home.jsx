import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">

        <h1>Welcome to</h1>
        <h2>FarmSync</h2>

        <p className="subtitle">
          Smart equipment management for modern farms
        </p>

        <button
          className="btn"
          onClick={() => navigate("/operator")}
        >
          Log in as Operator
        </button>

        <button
          className="btn"
          onClick={() => navigate("/manager")}
        >
          Log in as Manager
        </button>

      </div>
    </div>
  );
}

export default Home;