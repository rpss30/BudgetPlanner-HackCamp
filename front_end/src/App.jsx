import "./App.css";
// React Dom Router
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Planner from "./pages/planner/Planner";
import Goal from "./pages/goal/Goal";
import Tips from "./pages/tips/Tips";
import Result from "./pages/result/Result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/goal" element={<Goal />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
