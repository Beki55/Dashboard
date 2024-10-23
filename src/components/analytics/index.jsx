import 'chart.js/auto'; // Chart.js auto import
import TrendChart from './TrenChart';

const Analytics = () => {
  // Dummy Data for KPIs
  const totalLeads = 150;
  const conversionRate = 25; // in percentage
  const averageResponseTime = 2.5; // in hours
  const totalSales = 50000; // in dollars

  return (
    <div className="analytics-section p-4 md:p-6 lg:p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics Dashboard</h1>
      <p className="text-gray-600 mb-4">
        Welcome to the Analytics Dashboard. Here you can track key performance indicators (KPIs) related to your leads and sales. Monitor trends, assess performance, and make informed decisions.
      </p>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-500 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-white">Total Leads</h3>
          <p className="text-2xl font-bold text-white">{totalLeads}</p>
          <p className="text-slate-200">Total number of leads generated this month.</p>
        </div>
        <div className="p-4 bg-blue-500 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-white">Conversion Rate</h3>
          <p className="text-2xl font-bold text-white">{conversionRate}%</p>
          <p className="text-slate-200">Percentage of leads converted to sales.</p>
        </div>
        <div className="p-4 bg-blue-500 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-white">Average Response Time</h3>
          <p className="text-2xl font-bold text-white">{averageResponseTime} hrs</p>
          <p className="text-slate-200">Average time taken to respond to leads.</p>
        </div>
        <div className="p-4 bg-blue-500 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-white">Total Sales</h3>
          <p className="text-2xl font-bold text-white">${totalSales}</p>
          <p className="text-slate-200">Total revenue generated from all leads.</p>
        </div>
      </div>

      <TrendChart />

      {/* Lead Management Overview */}
      <div className="bg-blue-500 shadow rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Lead Management Overview</h2>
        <p className="text-slate-300 mb-2">View and manage your leads effectively:</p>
        <ul className="list-disc list-inside text-slate-300">
          <li>Track lead status and follow-up actions.</li>
          <li>Sort leads by source, status, or priority.</li>
          <li>Utilize filters to find specific leads quickly.</li>
        </ul>
        <p className="mt-4 text-slate-300">Stay on top of your leads to maximize conversions and sales!</p>
      </div>
    </div>
  );
};

export default Analytics;
