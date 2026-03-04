import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 210 },
  { day: "Wed", users: 180 },
  { day: "Thu", users: 260 },
  { day: "Fri", users: 320 },
];

const UserLoginChart = () => {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h6 className="mb-3">User Login Trend</h6>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#0d6efd"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserLoginChart;
