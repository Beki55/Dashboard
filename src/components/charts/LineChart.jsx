import { Line } from 'react-chartjs-2';
import dummyLeadsData from '../DummyData';

const lineData = {
  labels: dummyLeadsData.map((lead) => lead.date),
  datasets: [
    {
      label: 'Sales Over Time',
      data: dummyLeadsData.map((lead) => lead.sales),
      fill: false,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
    },
  ],
};

const LineChart = () => (
  <div className="bg-white p-4 rounded shadow mt-4 w-full max-w-md mx-auto"> {/* Responsive container */}
    <h2 className="text-lg font-bold mb-4">Line Chart</h2>
    <div style={{ position: 'relative', height: '300px' }}> {/* Fixed height for the chart */}
      <Line data={lineData} options={{
        responsive: true,
        maintainAspectRatio: false,
      }} />
    </div>
  </div>
);

export default LineChart;
