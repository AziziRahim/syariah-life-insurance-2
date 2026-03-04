import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* Dummy data */
const data = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 65 },
  { month: "Mar", value: 30 },
  { month: "Apr", value: 80 },
  { month: "Mei", value: 55 },
  { month: "Jun", value: 70 },
];

const UsageChartPlaceholder = () => {
  return (
    <div className="row g-4 mb-4">
      {/* LINE CHART */}
      <div className="col-md-8">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <h5 className="fw-semibold mb-3">
              Pembayaran & Pemakaian (Bulanan)
            </h5>

            {/* RECHARTS LINE CHART */}
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* DONUT (MASIH DUMMY) */}
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body text-center">
            <h5 className="fw-semibold mb-4">Ringkasan Manfaat</h5>

            <div className="dummy-donut mx-auto mb-3">
              <span>25%</span>
            </div>

            <ul className="list-unstyled text-muted small mb-0">
              <li>✔ Digunakan: 3x</li>
              <li>✔ Sisa: 9x</li>
              <li>✔ Total: 12x</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageChartPlaceholder;
