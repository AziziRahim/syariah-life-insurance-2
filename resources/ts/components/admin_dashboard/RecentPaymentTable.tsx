const data = [
  { user: "Ahmad", amount: "Rp 1.500.000", status: "Pending" },
  { user: "Siti", amount: "Rp 2.200.000", status: "Pending" },
];

const RecentPaymentTable = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h6 className="mb-3">Payment Request Terbaru</h6>

        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.user}</td>
                <td>{row.amount}</td>
                <td>
                  <span className="badge bg-warning">{row.status}</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-primary">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPaymentTable;
