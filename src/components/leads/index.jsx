import { useState } from 'react';
import { FaDollarSign, FaChartLine, FaUserCheck, FaMapMarkerAlt } from 'react-icons/fa';
import dummyLeadsData from '../DummyData';
import MetricsCard from '../dashboard/Metrics';
import Modal from './Modal'; // Import the Modal component

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
  const uniqueRegions = new Set(dummyLeadsData.map(lead => lead.region)).size;

  const handleCardClick = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Lead Management Dashboard</h1>
      <p className="mb-6 text-gray-600">
        Monitor your lead performance and metrics to optimize your sales strategy. Click on any lead card to view detailed information.
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

      {/* Leads Overview Section using Flexbox */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Leads Overview</h2>
      <p className="mb-6 text-gray-600">
        Click on a lead below for detailed insights and performance metrics.
      </p>
      <div className="flex flex-col space-y-4">
        {dummyLeadsData.map((lead) => (
          <div 
            key={lead.leadID} 
            className="cursor-pointer border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
            onClick={() => handleCardClick(lead)}
          >
            <h3 className="text-lg font-bold text-gray-800">{lead.leadName}</h3>
            <p className="text-gray-700">{lead.leadSource}</p>
            <p className="text-gray-500">{lead.leadStatus}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} lead={selectedLead} />
    </div>
  );
};

export default LeadMetrics;
