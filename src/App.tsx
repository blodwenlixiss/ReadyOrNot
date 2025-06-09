import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Date from "./Date";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date" element={<Date />} />
      </Routes>
    </>
  );
}

export default App;
