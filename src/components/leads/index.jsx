import { useState } from "react";
import {
  FaDollarSign,
  FaChartLine,
  FaUserCheck,
  FaMapMarkerAlt,
} from "react-icons/fa";
import dummyLeadsData from "../DummyData";
import MetricsCard from "../dashboard/Metrics";
import Modal from "./Modal"; // Import the Modal component
import LineChart from "../charts/LineChart"; // Import the LineChart component
import AnalyticsPage from "../analytics";

const LeadMetrics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const totalSales = dummyLeadsData.reduce((acc, lead) => acc + lead.sales, 0);
  const averagePerformance = (
    dummyLeadsData.reduce((acc, lead) => acc + lead.performanceMetric, 0) / dummyLeadsData.length
  ).toFixed(2);
  const averageConversionRate = (
    dummyLeadsData.reduce((acc, lead) => acc + lead.conversionRate, 0) / dummyLeadsData.length
  ).toFixed(2);
  const uniqueRegions = new Set(dummyLeadsData.map((lead) => lead.region)).size;

  const handleCardClick = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">
        Lead Management Dashboard
      </h1>
      <p className="mb-6 text-gray-600">
        Monitor your lead performance and metrics to optimize your sales strategy. 
        View detailed lead information and performance below.
      </p>

      {/* Metrics Section using Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricsCard
          icon={<div className="text-green-600 text-3xl"><FaDollarSign /></div>}
          title="Total Sales"
          value={`$${totalSales}`}
          description="The total revenue generated from all leads."
        />
        <MetricsCard
          icon={<div className="text-blue-600 text-3xl"><FaChartLine /></div>}
          title="Average Performance"
          value={`${averagePerformance}%`}
          description="The average performance metric of leads."
        />
        <MetricsCard
          icon={<div className="text-yellow-500 text-3xl"><FaUserCheck /></div>}
          title="Average Conversion Rate"
          value={`${averageConversionRate}%`}
          description="The average percentage of leads converted to customers."
        />
        <MetricsCard
          icon={<div className="text-red-600 text-3xl"><FaMapMarkerAlt /></div>}
          title="Total Unique Regions"
          value={uniqueRegions}
          description="The number of unique regions from which leads originate."
        />
      </div>

      {/* Flexbox for LineChart and Leads Overview Side by Side */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Line Chart Section */}
        <div className="flex-1 w-full lg:w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Performance</h2>
          <LineChart className="h-[300px]" />
          <AnalyticsPage />
        </div>

        {/* Lead Summary Table */}
        <div className="flex-1 w-full lg:w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Lead Summary</h2>
          <p className="mb-4 text-gray-600">Overview of lead details including regions, performance, and conversion rates.</p>
          
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-2 font-semibold text-gray-800">Lead Name</th>
                <th className="text-left p-2 font-semibold text-gray-800">Region</th>
                <th className="text-left p-2 font-semibold text-gray-800">Performance</th>
                <th className="text-left p-2 font-semibold text-gray-800">Conversion Rate</th>
              </tr>
            </thead>
            <tbody>
              {dummyLeadsData.map((lead) => (
                <tr key={lead.leadID} className="border-b hover:bg-gray-50">
                  <td className="p-2 text-gray-700">{lead.leadName}</td>
                  <td className="p-2 text-gray-700">{lead.region}</td>
                  <td className="p-2 text-gray-700">{lead.performanceMetric}%</td>
                  <td className="p-2 text-gray-700">{lead.conversionRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leads Overview Section */}
      <div className="bg-white p-4 mt-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Leads Overview</h2>
        <p className="mb-6 text-gray-600">
          Click on a lead below for detailed insights and performance metrics.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {dummyLeadsData.map((lead) => (
            <div
              key={lead.leadID}
              className="cursor-pointer border p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-500 hover:text-white transition-shadow duration-200"
              onClick={() => handleCardClick(lead)}
            >
              <h3 className="text-lg font-bold text-gray-800 hover:text-white">
                {lead.leadName}
              </h3>
              <p className="text-gray-700">{lead.leadSource}</p>
              <p className="text-gray-500">{lead.leadStatus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lead={selectedLead}
      />
    </div>
  );
};

export default LeadMetrics;
