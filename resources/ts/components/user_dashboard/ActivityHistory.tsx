import React, { useState } from "react";

type HistoryItem = {
  date: string;
  type: string;
  description: string;
  status: string;
  badge: "success" | "warning" | "danger";
};

const historyData: HistoryItem[] = [
  { date: "12 Jan 2025", type: "Pembayaran", description: "Kontribusi Bulanan", status: "Success", badge: "success" },
  { date: "02 Feb 2025", type: "Klaim", description: "Rawat Jalan", status: "Diproses", badge: "warning" },
  { date: "15 Feb 2025", type: "Pembayaran", description: "Kontribusi Bulanan", status: "Success", badge: "success" },
  { date: "10 Mar 2025", type: "Klaim", description: "Rawat Inap", status: "Success", badge: "success" },
  { date: "20 Mar 2025", type: "Pembayaran", description: "Kontribusi Bulanan", status: "Success", badge: "success" },
  { date: "05 Apr 2025", type: "Klaim", description: "Obat Jalan", status: "Diproses", badge: "warning" },
  { date: "18 Apr 2025", type: "Pembayaran", description: "Kontribusi Bulanan", status: "Success", badge: "success" },
];

const ITEMS_PER_PAGE = 5;

const ActivityHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(historyData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = historyData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="fw-semibold mb-3">Riwayat Aktivitas</h5>

        <div className="table-responsive">
          <table className="table table-borderless align-middle">
            <thead className="text-muted small">
              <tr>
                <th>Tanggal</th>
                <th>Jenis</th>
                <th>Deskripsi</th>
                <th className="text-end">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, i) => (
                <tr key={i}>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td className="text-end">
                    <span
                      className={`badge bg-${item.badge} ${
                        item.badge === "warning" ? "text-dark" : ""
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <nav className="d-flex justify-content-end mt-3">
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prev
                </button>
              </li>

              {Array.from({ length: totalPages }).map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default ActivityHistory;
