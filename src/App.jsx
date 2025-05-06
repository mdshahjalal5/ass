import { useEffect, useState } from "react";
import Doctors from "./components/Doctors";
import ServiceSummary from "./components/ServiceSummary";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  return (
    <section className="mt-10">
      <Home />
    </section>
  );
};

export default App;
