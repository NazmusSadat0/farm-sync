import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Operator from "./pages/Operator";
import ReportProblem from "./pages/ReportProblem";
import NewReport from "./pages/NewReport";

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
    </Routes>
  );
}

export default App;