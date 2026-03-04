type KpiItem = {
  label: string;
  value: string | number;
};

const data: KpiItem[] = [
  { label: "User Login Today", value: 324 },
  { label: "Invoice Masuk", value: 58 },
  { label: "Payment Pending", value: 12 },
  { label: "Payment Success", value: 41 },
  { label: "Revenue Today", value: "Rp 4,2jt" },
];

const KpiCards = () => {
  return (
    <div className="row g-3 mb-4">
      {data.map((item) => (
        <div className="col-md-2" key={item.label}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">{item.label}</small>
              <h4 className="mt-1 fw-semibold">{item.value}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;
