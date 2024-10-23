import { useState } from "react";
import PerformanceMetrics from "./PerformanceMetrics";
import SalesDataChart from "./SalesDataChart";
import LeadManagement from "./LeadManagement";
import dummyLeadsData from "../DummyData"; // Import dummy data
import LineChart from "../charts/LineChart";
import { FaChartLine, FaDollarSign, FaUserCheck, FaMapMarkerAlt } from "react-icons/fa";
import MetricsCard from "./Metrics";
// import ErrorBoundary from "./ErrorBoundary";

const Dashboard = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  // Handling when a lead is clicked
  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
    setShowLeadModal(true);
  };

  // Closing the modal
  const closeModal = () => {
    setShowLeadModal(false);
    setSelectedLead(null);
  };

  // Calculate total sales, average performance, average conversion rate, and unique regions
  const totalSales = dummyLeadsData.reduce(
    (acc, lead) => acc + (lead.sales || 0),
    0
  );
  const averagePerformance = (
    dummyLeadsData.reduce((acc, lead) => acc + (lead.performanceMetric || 0), 0) /
    dummyLeadsData.length
  ).toFixed(2);
  const averageConversionRate = (
    dummyLeadsData.reduce((acc, lead) => acc + (lead.conversionRate || 0), 0) /
    dummyLeadsData.length
  ).toFixed(2);
  const uniqueRegions = new Set(dummyLeadsData.map((lead) => lead.region)).size;

  return (
    <>
      <h1 className="text-2xl font-bold p-6">EzyMetrics Dashboard</h1>

      {/* <ErrorBoundary> */}
        {/* Metrics Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <MetricsCard
            icon={<div className="text-green-500 text-3xl"><FaDollarSign /></div>}
            title="Total Sales"
            value={`$${totalSales}`}
          />
          <MetricsCard
            icon={<div className="text-blue-500 text-3xl"><FaChartLine /></div>}
            title="Average Performance"
            value={`${averagePerformance}%`}
          />
          <MetricsCard
            icon={<div className="text-yellow-500 text-3xl"><FaUserCheck /></div>}
            title="Average Conversion Rate"
            value={`${averageConversionRate}%`}
          />
          <MetricsCard
            icon={<div className="text-red-500 text-3xl"><FaMapMarkerAlt /></div>}
            title="Total Unique Regions"
            value={uniqueRegions}
          />
        </div>

        {/* Sales Performance Charts Section */}
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">Sales Performance Over Time</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <SalesDataChart />
            </div>
            <div className="flex-1">
              <LineChart />
            </div>
          </div>
        </div>

        {/* Lead Management and Performance Section */}
        <div className="flex flex-col lg:flex-row p-6 gap-6">
          {/* Lead Management Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">Lead Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyLeadsData.map((lead) => (
                <div
                  key={lead.leadID}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  onClick={() => handleLeadClick(lead)}
                >
                  <h3 className="font-bold text-lg">{lead.leadName}</h3>
                  <p className="text-gray-600">{lead.email}</p>
                  <p className="text-gray-600">Status: {lead.leadStatus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics Section */}
          <div className="flex-1">
            <PerformanceMetrics performanceData={dummyLeadsData} />
          </div>
        </div>

        {/* Lead Management Modal */}
        {showLeadModal && (
          <LeadManagement lead={selectedLead} onClose={closeModal} />
        )}
      {/* </ErrorBoundary> */}
    </>
  );
};

export default Dashboard;
