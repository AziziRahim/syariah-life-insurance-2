import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type ReportKey =
  | "activity_log"
  | "payment"
  | "profile"
  | "login_history"
  | "policy_submission";

const reportTypes: {
  key: ReportKey;
  title: string;
  desc: string;
  icon: string;
}[] = [
  {
    key: "activity_log",
    title: "Log Aktivitas",
    desc: "Riwayat aktivitas pengguna",
    icon: "bi-activity",
  },
  {
    key: "payment",
    title: "Riwayat Pembayaran",
    desc: "Invoice & transaksi pembayaran",
    icon: "bi-credit-card",
  },
  {
    key: "profile",
    title: "Data Diri",
    desc: "Informasi data peserta",
    icon: "bi-person-vcard",
  },
  {
    key: "login_history",
    title: "Login History",
    desc: "Riwayat login & device",
    icon: "bi-shield-lock",
  },
  {
    key: "policy_submission",
    title: "Pengajuan Polis",
    desc: "Status hasil pengajuan polis",
    icon: "bi-file-earmark-check",
  },
];

const DownloadReportUserPage = () => {
  const [selectedReport, setSelectedReport] =
    useState<ReportKey | null>(null);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleDownload = () => {
    if (!selectedReport) return;

    console.log({
      report: selectedReport,
      startDate,
      endDate,
      format: "PDF",
    });

    alert("Download PDF (dummy)");
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="mb-4">
        <h4 className="fw-bold">Unduh Laporan</h4>
        <p className="text-muted mb-0">
          Pilih jenis laporan yang ingin diunduh (PDF)
        </p>
      </div>

      {/* Report Type */}
      <div className="row g-3">
        {reportTypes.map((item) => (
          <div key={item.key} className="col-md-4">
            <div
              className={`card h-100 shadow-sm ${
                selectedReport === item.key
                  ? "border-primary"
                  : "border-light"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedReport(item.key)}
            >
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <i className={`bi ${item.icon} fs-3 text-primary`} />
                  <div>
                    <h6 className="fw-semibold mb-1">
                      {item.title}
                    </h6>
                    <small className="text-muted">
                      {item.desc}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter */}
      {selectedReport && (
        <div className="card mt-4 shadow-sm">
          <div className="card-body">
            <h6 className="fw-semibold mb-3">
              Filter Laporan
            </h6>

            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">
                  Tanggal Mulai
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) =>
                    setStartDate(e.target.value)
                  }
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">
                  Tanggal Akhir
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={endDate}
                  onChange={(e) =>
                    setEndDate(e.target.value)
                  }
                />
              </div>

              <div className="col-md-4 d-flex align-items-end">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleDownload}
                >
                  <i className="bi bi-download me-2"></i>
                  Unduh PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadReportUserPage;
