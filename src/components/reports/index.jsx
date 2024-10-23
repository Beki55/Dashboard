import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import dummyLeadsData from '../DummyData'; // Adjust the import path as needed

const ReportGeneration = () => {
  const [reportMetrics, setReportMetrics] = useState({
    totalLeads: 0,
    totalSales: 0,
    conversionRate: 0,
    averageResponseTime: 0,
  });

  useEffect(() => {
    const totalLeads = dummyLeadsData.length;
    const totalSales = dummyLeadsData.reduce((sum, lead) => sum + lead.sales, 0);
    const conversionRate = (dummyLeadsData.filter(lead => lead.leadStatus === 'Closed').length / totalLeads) * 100;
    const averageResponseTime = 2.5;

    setReportMetrics({
      totalLeads,
      totalSales,
      conversionRate,
      averageResponseTime,
    });
  }, []);

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [10000, 15000, 12000, 20000, 18000, 25000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const [reportType, setReportType] = useState('PDF');

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const handleGenerateReport = () => {
    if (reportType === 'PDF') {
      const doc = new jsPDF();
      doc.text('Report Generation', 14, 10);
      doc.text(`Total Leads: ${reportMetrics.totalLeads}`, 14, 20);
      doc.text(`Total Sales: $${reportMetrics.totalSales}`, 14, 30);
      doc.text(`Conversion Rate: ${reportMetrics.conversionRate.toFixed(2)}%`, 14, 40);
      doc.text(`Average Response Time: ${reportMetrics.averageResponseTime} hrs`, 14, 50);
      doc.text('Sales Trends (Last 6 Months):', 14, 60);

      // Prepare sales data for the table
      const salesData = [
        { Month: 'Jan', Sales: 10000 },
        { Month: 'Feb', Sales: 15000 },
        { Month: 'Mar', Sales: 12000 },
        { Month: 'Apr', Sales: 20000 },
        { Month: 'May', Sales: 18000 },
        { Month: 'Jun', Sales: 25000 },
      ];

      doc.autoTable({
        head: [['Month', 'Sales']],
        body: salesData.map(item => [item.Month, item.Sales]),
        startY: 70,
      });

      doc.save('report.pdf');
    } else {
      // Generate CSV report
      const csvData = [
        ['Metric', 'Value'],
        ['Total Leads', reportMetrics.totalLeads],
        ['Total Sales', reportMetrics.totalSales],
        ['Conversion Rate', `${reportMetrics.conversionRate.toFixed(2)}%`],
        ['Average Response Time', `${reportMetrics.averageResponseTime} hrs`],
        ['Sales Trends (Last 6 Months)', ''],
      ];

      const salesData = [
        { Month: 'Jan', Sales: 10000 },
        { Month: 'Feb', Sales: 15000 },
        { Month: 'Mar', Sales: 12000 },
        { Month: 'Apr', Sales: 20000 },
        { Month: 'May', Sales: 18000 },
        { Month: 'Jun', Sales: 25000 },
      ];

      // Append sales data to CSV
      csvData.push(['Month', 'Sales']);
      salesData.forEach(item => {
        csvData.push([item.Month, item.Sales]);
      });

      const csvContent = csvData.map(row => row.join(',')).join('\n');

      // Create a Blob and trigger download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'report.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="report-section p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Report Generation</h1>
      <p className="text-gray-600 mb-4">
        This section allows you to generate reports based on your analytics data. Select the report type, review key metrics, and visualize trends to make informed decisions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-500 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-white">Total Leads</h3>
          <p className="text-2xl font-bold text-white">{reportMetrics.totalLeads}</p>
          <p className="text-slate-200">Total number of leads generated.</p>
        </div>
        <div className="p-4 bg-blue-500 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-white">Total Sales</h3>
          <p className="text-2xl font-bold text-white">${reportMetrics.totalSales}</p>
          <p className="text-slate-200">Total revenue generated from leads.</p>
        </div>
        <div className="p-4 bg-blue-500 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-white">Conversion Rate</h3>
          <p className="text-2xl font-bold text-white">{reportMetrics.conversionRate.toFixed(2)}%</p>
          <p className="text-slate-200">Percentage of leads converted to sales.</p>
        </div>
        <div className="p-4 bg-blue-500 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-white">Avg Response Time</h3>
          <p className="text-2xl font-bold text-white">{reportMetrics.averageResponseTime} hrs</p>
          <p className="text-slate-200">Average time taken to respond to leads.</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sales Trends (Last 6 Months)</h2>
        <Bar data={barChartData} options={barChartOptions} />
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Generate Your Report</h2>
        <p className="text-gray-600 mb-2">Select the type of report you wish to generate:</p>
        <select
          className="p-2 border border-gray-300 rounded mb-4"
          value={reportType}
          onChange={handleReportTypeChange}
        >
          <option value="PDF">PDF</option>
          <option value="CSV">CSV</option>
        </select>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleGenerateReport}
          >
            Generate Report
          </button>
        </div>
        <p className="mt-4 text-gray-500">
          Click the button above to generate a report based on the current analytics data. The report will include key metrics, sales trends, and other relevant information.
        </p>
      </div>
    </div>
  );
};

export default ReportGeneration;
