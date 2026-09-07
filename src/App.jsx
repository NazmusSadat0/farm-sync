import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Operator from "./pages/Operator";
import ReportProblem from "./pages/ReportProblem";
import NewReport from "./pages/NewReport";
import Submitted from "./pages/Submitted";
import OperatorDecision from "./pages/OperatorDecision";
import Accepted from "./pages/Accepted";
import Reviewing from "./pages/Reviewing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/operator" element={<Operator />} />
      <Route path="/operator/report" element={<ReportProblem />} />
      <Route
        path="/operator/new"
        element={<NewReport />}
      />
      <Route
        path="/operator/submitted"
        element={<Submitted />}
      />

      <Route
        path="/operator/decision"
        element={<OperatorDecision />}
      />

      <Route
        path="/operator/accepted"
        element={<Accepted />}
      />

      <Route
        path="/operator/reviewing"
        element={<Reviewing />}
      />
    </Routes>
  );
}

export default App;