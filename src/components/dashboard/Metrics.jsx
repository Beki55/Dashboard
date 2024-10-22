
const MetricsCard = ({ icon, title, value }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded shadow-md w-full">
      <div className="text-3xl mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
