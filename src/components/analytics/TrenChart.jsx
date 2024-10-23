import { Line } from 'react-chartjs-2'; // Ensure you have installed chart.js and react-chartjs-2

function TrendChart() {
      // Sample data for the line chart (Monthly Leads Trend)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Leads',
        data: [30, 50, 40, 60, 80, 90],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  return (
    <>
      {/* Monthly Leads Trend Chart */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Monthly Leads Trend
        </h2>
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
    </>
  );
}

export default TrendChart;
