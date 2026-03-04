import React from "react";

const summaryData = [
  { title: "Total Bayar", value: "12x", color: "primary" },
  { title: "Digunakan", value: "3x", color: "danger" },
  { title: "Sisa Manfaat", value: "9x", color: "success" },
  { title: "Status Polis", value: "ACTIVE", color: "secondary" },
];

const SummaryCards = () => {
  return (
    <div className="row g-4 mb-4">
      {summaryData.map((item, i) => (
        <div className="col-md-3" key={i}>
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <p className="text-muted mb-1">{item.title}</p>
              <h3 className={`fw-bold text-${item.color}`}>
                {item.value}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
