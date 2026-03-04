import { useLocation, Navigate, useNavigate } from "react-router-dom";
import "../../../../css/payment.css";

const BillingResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as {
    status?: "SUCCESS" | "FAILED";
    policy?: {
      policyNo: string;
      productName: string;
      participantName: string;
    };
    invoices?: {
      month: string;
      amount: number;
    }[];
    paymentMethod?: string;
    totalAmount?: number;
    paidAt?: string;
  };

  // 🔐 Guard
  if (!state?.status) {
    return <Navigate to="/user/payment" replace />;
  }

  const isSuccess = state.status === "SUCCESS";

  const handleDownloadReceipt = () => {
    // nanti: fetch PDF dari backend
    alert("Download receipt (dummy)");
  };

  return (
    <div className="container py-4">
      {/* HEADER */}
      <div className="text-center mb-4">
        <h4 className={`mb-1 ${isSuccess ? "text-success" : "text-danger"}`}>
          {isSuccess ? "Pembayaran Berhasil" : "Pembayaran Gagal"}
        </h4>
        <p className="text-muted">
          {isSuccess
            ? "Kontribusi telah diterima dan polis Anda tetap aktif"
            : "Pembayaran belum berhasil diproses. Silakan coba kembali."}
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* INFO */}
          <div className="card shadow-sm p-4 mb-4">
            <h6 className="mb-3">Informasi Pembayaran</h6>

            <div className="row mb-3">
              <div className="col-md-4">
                <small className="text-muted">No Polis</small>
                <div className="fw-semibold">
                  {state.policy?.policyNo}
                </div>
              </div>
              <div className="col-md-4">
                <small className="text-muted">Produk</small>
                <div className="fw-semibold">
                  {state.policy?.productName}
                </div>
              </div>
              <div className="col-md-4">
                <small className="text-muted">Nama Peserta</small>
                <div className="fw-semibold">
                  {state.policy?.participantName}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <small className="text-muted">Tanggal Pembayaran</small>
                <div className="fw-semibold">
                  {state.paidAt
                    ? new Date(state.paidAt).toLocaleString("id-ID")
                    : "-"}
                </div>
              </div>
              <div className="col-md-6">
                <small className="text-muted">Metode Pembayaran</small>
                <div className="fw-semibold">
                  {state.paymentMethod}
                </div>
              </div>
            </div>
          </div>

          {/* INVOICES */}
          <div className="card shadow-sm p-4 mb-4">
            <h6 className="mb-3">Tagihan</h6>

            {state.invoices?.map((inv, i) => (
              <div
                key={i}
                className="d-flex justify-content-between border rounded p-3 mb-2"
              >
                <div className="fw-semibold">{inv.month}</div>
                <div>Rp {inv.amount.toLocaleString("id-ID")}</div>
              </div>
            ))}

            <div className="d-flex justify-content-between align-items-center mt-3">
              <strong>Total</strong>
              <strong className="fs-5">
                Rp {state.totalAmount?.toLocaleString("id-ID")}
              </strong>
            </div>
          </div>

          {/* ACTION */}
          <div className="text-center">
            {isSuccess && (
              <button
                className="btn btn-outline-primary px-4 me-2"
                onClick={handleDownloadReceipt}
              >
                Download Receipt
              </button>
            )}

            <button
              className="btn btn-primary px-4"
              onClick={() => navigate("/user")}
            >
              Kembali ke Dashboard
            </button>

            {!isSuccess && (
              <div className="mt-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/user/payment")}
                >
                  Coba Bayar Ulang
                </button>
              </div>
            )}

            <p className="text-muted mt-3" style={{ fontSize: 12 }}>
              Bukti pembayaran ini bersifat sah dan dapat digunakan sebagai
              referensi administrasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingResultPage;
