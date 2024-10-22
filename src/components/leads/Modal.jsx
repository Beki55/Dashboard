// Modal.jsx

const Modal = ({ isOpen, onClose, lead }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4">Lead Details</h2>
        <p><strong>Name:</strong> {lead.leadName}</p>
        <p><strong>Source:</strong> {lead.leadSource}</p>
        <p><strong>Status:</strong> {lead.leadStatus}</p>
        <p><strong>Performance Metric:</strong> {lead.performanceMetric}%</p>
        <p><strong>Conversion Rate:</strong> {lead.conversionRate}%</p>
        <p><strong>Sales:</strong> ${lead.sales}</p>
        <p><strong>Region:</strong> {lead.region}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
