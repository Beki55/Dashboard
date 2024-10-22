const LeadManagement = ({ lead, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-bold mb-2">{lead.leadName}</h2> {/* Update lead.name to lead.leadName */}
        <p>
          <span className="font-bold">Email:</span> {lead.email || "Not available"} {/* Assuming email is part of the lead data */}
        </p>
        <p>
          <span className="font-bold">Status: </span>
          {lead.leadStatus}
        </p>
        <p>
          <span className="font-bold">Source: </span>
          {lead.leadSource}
        </p>
        <p>
          <span className="font-bold">Performance Metric: </span>
          {lead.performanceMetric}%
        </p>
        <p>
          <span className="font-bold">Sales: </span>
          ${lead.sales.toLocaleString()} {/* Formatting sales amount */}
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LeadManagement;
