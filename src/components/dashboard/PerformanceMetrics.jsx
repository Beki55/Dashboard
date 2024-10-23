// src/components/PerformancePieChart.js

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { useEffect, useRef } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PerformancePieChart = ({ performanceData }) => {
  const chartRef = useRef(null);

  const data = {
    labels: performanceData.map(lead => lead.leadName),
    datasets: [
      {
        data: performanceData.map(lead => lead.performanceMetric),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Lead Performance Metrics',
      },
    },
  };

  useEffect(() => {
    // Cleanup function to destroy the chart instance
    return () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.chartInstance;
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Performance Metrics</h3>
      <Pie ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default PerformancePieChart;
