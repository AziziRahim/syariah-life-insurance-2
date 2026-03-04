import { useState } from "react";
import "../../../../css/payment.css";
import { useNavigate } from "react-router-dom";

/* =======================
   DUMMY DATA (INLINE)
======================= */
const POLICY = {
  policyNo: "POL-2025-001",
  productName: "Asuransi Kebajikan",
  participantName: "Deeno",
  status: "Tertunggak",
};

const INVOICES = [
  {
    id: "INV-001",
    month: "Januari 2025",
    amount: 350000,
    status: "OVERDUE",
  },
  {
    id: "INV-002",
    month: "Februari 2025",
    amount: 350000,
    status: "UNPAID",
  },
  {
    id: "INV-003",
    month: "Maret 2025",
    amount: 350000,
    status: "PAID",
  },
];

const BillingPaymentPage = () => {
  const navigate = useNavigate();

  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("VA");

  const toggleInvoice = (id: string) => {
    setSelectedInvoices(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const selectedInvoiceObjects = INVOICES.filter(inv =>
    selectedInvoices.includes(inv.id)
  );

  const totalAmount = selectedInvoiceObjects.reduce(
    (sum, inv) => sum + inv.amount,
    0
  );

  /* =======================
     GO TO CONFIRM PAGE
  ======================= */
  const handleContinue = () => {
    navigate("/user/payment/confirm", {
      state: {
        policy: {
          policyNo: POLICY.policyNo,
          productName: POLICY.productName,
          participantName: POLICY.participantName,
        },
        invoices: selectedInvoiceObjects.map(inv => ({
          month: inv.month,
          amount: inv.amount,
          status: inv.status,
        })),
        paymentMethod:
          paymentMethod === "VA"
            ? "Virtual Account"
            : paymentMethod === "QRIS"
            ? "QRIS"
            : "E-Wallet",
      },
    });
  };

  return (
    <div className="container py-4">
      {/* HEADER */}
      <div className="mb-4">
        <h4 className="mb-1">Bayar Kontribusi Bulanan</h4>
        <p className="text-muted">
          Pembayaran kontribusi untuk menjaga keberlangsungan perlindungan polis
        </p>
      </div>

      <div className="row">
        {/* LEFT – POLICY & INVOICE */}
        <div className="col-lg-7 mb-4">
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
                <small className="text-muted">Status Polis</small>
                <div className="fw-semibold">{POLICY.status}</div>
              </div>
            </div>
          </div>

          {/* INVOICE LIST */}
          <div className="card shadow-sm p-4">
            <h6 className="mb-3">Daftar Tagihan</h6>

            {INVOICES.map(inv => (
              <div
                key={inv.id}
                className={`d-flex align-items-center justify-content-between border rounded p-3 mb-2 ${
                  inv.status === "OVERDUE" ? "border-warning-subtle" : ""
                }`}
              >
                <div className="d-flex align-items-center gap-3">
                  <input
                    type="checkbox"
                    disabled={inv.status === "PAID"}
                    checked={selectedInvoices.includes(inv.id)}
                    onChange={() => toggleInvoice(inv.id)}
                  />

                  <div>
                    <div className="fw-semibold">{inv.month}</div>
                    <small className="text-muted">
                      Rp {inv.amount.toLocaleString("id-ID")}
                    </small>
                  </div>
                </div>

                <span
                  className={`badge ${
                    inv.status === "OVERDUE"
                      ? "bg-warning-subtle text-warning"
                      : inv.status === "UNPAID"
                      ? "bg-secondary-subtle text-secondary"
                      : "bg-success-subtle text-success"
                  }`}
                >
                  {inv.status === "OVERDUE"
                    ? "Lewat Jatuh Tempo"
                    : inv.status === "UNPAID"
                    ? "Belum Dibayar"
                    : "Lunas"}
                </span>
              </div>
            ))}

            <p className="text-muted mt-3" style={{ fontSize: 13 }}>
              Disarankan membayar tagihan dengan status{" "}
              <strong>Lewat Jatuh Tempo</strong> terlebih dahulu.
            </p>
          </div>
        </div>

        {/* RIGHT – TOTAL & PAYMENT */}
        <div className="col-lg-5">
          <div className="card shadow-sm p-4">
            <h6 className="mb-3">Ringkasan Pembayaran</h6>

            <div className="mb-3">
              <small className="text-muted">Total Dibayar</small>
              <div className="fs-4 fw-bold">
                Rp {totalAmount.toLocaleString("id-ID")}
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="mb-3">
              <h6 className="mb-2">Metode Pembayaran</h6>

              <div
                className={`payment-card mb-2 ${
                  paymentMethod === "VA" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("VA")}
              >
                <strong>Virtual Account</strong>
                <div className="text-muted" style={{ fontSize: 13 }}>
                  BCA, Mandiri, BRI
                </div>
              </div>

              <div
                className={`payment-card mb-2 ${
                  paymentMethod === "QRIS" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("QRIS")}
              >
                <strong>QRIS</strong>
                <div className="text-muted" style={{ fontSize: 13 }}>
                  Semua e-wallet & bank
                </div>
              </div>

              <div
                className={`payment-card mb-2 ${
                  paymentMethod === "EWALLET" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("EWALLET")}
              >
                <strong>E-Wallet</strong>
                <div className="text-muted" style={{ fontSize: 13 }}>
                  GoPay, OVO, DANA
                </div>
              </div>
            </div>

            <button
              onClick={handleContinue}
              className="btn btn-success w-100"
              disabled={selectedInvoices.length === 0}
            >
              Lanjut ke Konfirmasi
            </button>

            <button className="btn btn-link w-100 mt-2 text-decoration-none">
              ← Kembali ke Dashboard
            </button>

            <p className="text-muted mt-3" style={{ fontSize: 12 }}>
              Anda akan diminta untuk melakukan konfirmasi sebelum pembayaran
              diproses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPaymentPage;
