import { useLocation, useNavigate, Navigate } from "react-router-dom";
import "../../../../css/payment.css";

const BillingConfirmPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* =======================
     DATA DARI PAGE SEBELUMNYA
  ======================= */
  const state = location.state as {
    policy?: {
      policyNo: string;
      productName: string;
      participantName: string;
    };
    invoices?: {
      month: string;
      amount: number;
      status: "OVERDUE" | "UNPAID";
    }[];
    paymentMethod?: string;
  };

  // 🔐 GUARD: tidak boleh lompat step
  if (!state?.invoices || state.invoices.length === 0) {
    return <Navigate to="/user/payment" replace />;
  }

  const POLICY = state.policy ?? {
    policyNo: "POL-2025-001",
    productName: "Asuransi Kebajikan",
    participantName: "Deeno",
  };

  const INVOICES = state.invoices;
  const PAYMENT_METHOD = state.paymentMethod ?? "Virtual Account";

  const totalAmount = INVOICES.reduce(
    (sum, inv) => sum + inv.amount,
    0
  );

  const handleConfirm = () => {
    navigate("/user/payment/submit", {
      state: {
        confirmed: true,
        policy: POLICY,
        invoices: INVOICES,
        paymentMethod: PAYMENT_METHOD,
        totalAmount,
      },
    });
  };

  return (
    <div className="container py-4">
      {/* HEADER */}
      <div className="text-center mb-4">
        <h4 className="mb-1">Konfirmasi Pembayaran</h4>
        <p className="text-muted">
          Pastikan kembali detail pembayaran sebelum melanjutkan
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* POLICY INFO */}
          <div className="card shadow-sm p-4 mb-4">
            <h6 className="mb-3">Informasi Polis</h6>

            <div className="row">
              <div className="col-md-4">
                <small className="text-muted">No Polis</small>
                <div className="fw-semibold">{POLICY.policyNo}</div>
              </div>

              <div className="col-md-4">
                <small className="text-muted">Produk</small>
                <div className="fw-semibold">{POLICY.productName}</div>
              </div>

              <div className="col-md-4">
                <small className="text-muted">Nama Peserta</small>
                <div className="fw-semibold">{POLICY.participantName}</div>
              </div>
            </div>
          </div>

          {/* INVOICE LIST */}
          <div className="card shadow-sm p-4 mb-4">
            <h6 className="mb-3">Tagihan yang Akan Dibayar</h6>

            {INVOICES.map((inv, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center border rounded p-3 mb-2"
              >
                <div>
                  <div className="fw-semibold">{inv.month}</div>
                  <small className="text-muted">
                    Status:{" "}
                    {inv.status === "OVERDUE"
                      ? "Lewat Jatuh Tempo"
                      : "Belum Dibayar"}
                  </small>
                </div>

                <div className="fw-semibold">
                  Rp {inv.amount.toLocaleString("id-ID")}
                </div>
              </div>
            ))}
          </div>

          {/* PAYMENT METHOD & TOTAL */}
          <div className="card shadow-sm p-4 mb-4">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <small className="text-muted">Metode Pembayaran</small>
                <div className="fw-semibold">{PAYMENT_METHOD}</div>
              </div>

              <div className="col-md-6 text-md-end">
                <small className="text-muted">Total Dibayar</small>
                <div className="fs-4 fw-bold">
                  Rp {totalAmount.toLocaleString("id-ID")}
                </div>
              </div>
            </div>

            <div className="alert alert-warning mt-3 mb-0">
              Dengan melanjutkan, Anda menyetujui pembayaran kontribusi sesuai
              ketentuan polis yang berlaku.
            </div>
          </div>

          {/* ACTION */}
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <button
              className="btn btn-outline-secondary px-4"
              onClick={() => navigate("/user/payment")}
            >
              Kembali
            </button>

            <button
              className="btn btn-success px-4"
              onClick={handleConfirm}
            >
              Konfirmasi & Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingConfirmPage;
