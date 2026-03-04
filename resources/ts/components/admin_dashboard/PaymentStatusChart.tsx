import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Success", value: 41 },
  { name: "Pending", value: 12 },
  { name: "Failed", value: 5 },
];

const COLORS = ["#198754", "#ffc107", "#dc3545"];

const PaymentStatusChart = () => {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body text-center">
        <h6 className="mb-3">Payment Status</h6>
        <PieChart width={260} height={260}>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        <div className="d-flex justify-content-center gap-3 mt-2">
          {data.map((d, i) => (
            <small key={d.name}>
              <span
                style={{
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  background: COLORS[i],
                  marginRight: 6,
                }}
              />
              {d.name}
            </small>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusChart;
