// src/components/ReportGenerationPage.js

import { useState } from "react";
import jsPDF from "jspdf";
import { CSVLink } from "react-csv";
import dummyLeadsData from "../DummyData"; // Import your dummy data

const ReportGenerationPage = () => {
  const [reportData] = useState(dummyLeadsData);

  // Generate PDF report
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Analytics Report", 20, 20);
    doc.text(`Total Leads: ${reportData.length}`, 20, 30);
    doc.text(`Average Performance: ${(
      reportData.reduce((acc, lead) => acc + lead.performanceMetric, 0) /
      reportData.length
    ).toFixed(2)}%`, 20, 40);
    doc.save("analytics_report.pdf");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Report Generation</h2>
      <div className="flex justify-between mb-4">
        <button
          onClick={generatePDF}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate PDF Report
        </button>
        <CSVLink
          data={reportData}
          filename={"analytics_report.csv"}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Download CSV Report
        </CSVLink>
      </div>
    </div>
  );
};

export default ReportGenerationPage;
