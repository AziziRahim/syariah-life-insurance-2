import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", total: 10 },
  { day: "Tue", total: 18 },
  { day: "Wed", total: 12 },
  { day: "Thu", total: 22 },
  { day: "Fri", total: 30 },
];

const InvoiceBarChart = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h6 className="mb-3">Tagihan Masuk per Hari</h6>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#6610f2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InvoiceBarChart;
