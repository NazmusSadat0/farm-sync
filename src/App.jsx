import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Operator from "./pages/Operator";
import ReportProblem from "./pages/ReportProblem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/operator" element={<Operator />} />
      <Route path="/operator/report" element={<ReportProblem />} />
    </Routes>
  );
}

export default App;