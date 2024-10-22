import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import dummyLeadsData from '../DummyData';
import { Chart as ChartJS } from 'chart.js/auto';

const PieChart = () => {
  const pieData = {
    labels: [...new Set(dummyLeadsData.map(lead => lead.region))],
    datasets: [
      {
        data: dummyLeadsData.reduce((acc, lead) => {
          const index = acc.labels.indexOf(lead.region);
          acc.data[index] += lead.sales;
          return acc;
        }, { labels: [...new Set(dummyLeadsData.map(lead => lead.region))], data: new Array(5).fill(0) }).data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  useEffect(() => {
    return () => {
      // Cleanup: destroy the chart instance when the component unmounts
      ChartJS.instances.forEach(instance => instance.destroy());
    };
  }, []);

  return (
    <div>
      <h2>Sales by Region</h2>
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
