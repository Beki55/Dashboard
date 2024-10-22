// src/components/PerformancePieChart.js

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PerformancePieChart = ({ performanceData }) => {
  // Data for the pie chart
  const data = {
    labels: performanceData.map((lead) => lead.leadName), // Labels from lead names
    datasets: [
      {
        data: performanceData.map((lead) => lead.performanceMetric), // Data from performance metrics
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to be resized without maintaining aspect ratio
    plugins: {
      legend: {
        position: "bottom", // Move legend to the bottom for better fit
        labels: {
          boxWidth: 10, // Adjusts the width of the legend box
          padding: 15, // Adds padding between legend items
        },
      },
      title: {
        display: true,
        text: "Lead Performance Metrics",
        font: {
          size: 16, // Adjust the title font size
        },
      },
    },
  };

  return (
    <div className="p-4 border rounded-lg bg-white w-full max-w-3xl mx-auto">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Performance Metrics
      </h3>
      <div className="h-[450px]">
        {" "}
        {/* Set a height for the chart container */}
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformancePieChart;
