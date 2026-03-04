import { useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import "../../../../css/payment.css";

const BillingSubmitPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* =======================
     DATA DARI CONFIRM PAGE
  ======================= */
  const state = location.state as {
    confirmed?: boolean;
    policy?: {
      policyNo: string;
      productName: string;
      participantName: string;
    };
    invoices?: {
      month: string;
      amount: number;
      status: string;
    }[];
    paymentMethod?: string;
    totalAmount?: number;
  };

  // 🔐 GUARD: tidak boleh akses langsung
  if (!state?.confirmed || !state?.invoices) {
    return <Navigate to="/user/payment" replace />;
  }

  /* =======================
     SIMULATE PAYMENT PROCESS
  ======================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      // dummy result: 80% success
      const isSuccess = Math.random() > 0.2;

      navigate("/user/payment/result", {
        replace: true,
        state: {
          status: isSuccess ? "SUCCESS" : "FAILED",
          policy: state.policy,
          invoices: state.invoices,
          paymentMethod: state.paymentMethod,
          totalAmount: state.totalAmount,
          paidAt: new Date().toISOString(),
        },
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, state]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <div className="card shadow-sm p-5">
            {/* ICON / LOADING */}
            <div className="mb-4">
              <div className="spinner-border text-success" role="status" />
            </div>

            <h5 className="mb-2">Memproses Pembayaran</h5>
            <p className="text-muted mb-4">
              Mohon tunggu, sistem sedang memproses pembayaran kontribusi Anda.
            </p>

            {/* PAYMENT INFO */}
            <div className="border rounded p-3 mb-3 text-start">
              <div className="mb-2">
                <small className="text-muted">No Polis</small>
                <div className="fw-semibold">{state.policy?.policyNo}</div>
              </div>

              <div className="mb-2">
                <small className="text-muted">Metode Pembayaran</small>
                <div className="fw-semibold">{state.paymentMethod}</div>
              </div>

              <div>
                <small className="text-muted">Total Dibayar</small>
                <div className="fw-bold fs-5">
                  Rp {state.totalAmount?.toLocaleString("id-ID")}
                </div>
              </div>
            </div>

            <p className="text-muted" style={{ fontSize: 13 }}>
              Jangan menutup atau menyegarkan halaman ini sampai proses selesai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSubmitPage;
