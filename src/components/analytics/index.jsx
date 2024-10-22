// src/components/AnalyticsPage.js

import { Pie } from "react-chartjs-2";
import dummyLeadsData from "../DummyData"; // Import your dummy data

const AnalyticsPage = () => {
  // Data for pie chart
  const data = {
    labels: dummyLeadsData.map((lead) => lead.leadName),
    datasets: [
      {
        data: dummyLeadsData.map((lead) => lead.performanceMetric),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow w-[700px]">
      <h2 className="text-lg font-bold mb-4">Analytics Overview</h2>
      <div className="h-96">

      <Pie data={data} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
