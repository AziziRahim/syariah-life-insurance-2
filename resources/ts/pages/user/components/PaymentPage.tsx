import "../../../../css/payment.css";

type Props = {
  data: any;
  onBack: () => void;
};

const PaymentPage = ({ data, onBack }: Props) => {
  return (
    <div className="container py-4">
      {/* HEADER */}
      <div className="text-center mb-4">
        <h4 className="mb-1">Pembayaran Kontribusi Pertama</h4>
        <p className="text-muted">
          Pembayaran ini digunakan untuk mengaktifkan polis asuransi Anda
        </p>
      </div>

      <div className="row justify-content-center">
        {/* LEFT – SUMMARY */}
        <div className="col-lg-5 mb-4">
          <div className="card shadow-sm p-4 h-100">
            <h6 className="mb-3">Ringkasan Pembayaran</h6>

            <div className="mb-2">
              <small className="text-muted">Produk</small>
              <div className="fw-semibold">{data.insuranceType || "-"}</div>
            </div>

            <div className="mb-2">
              <small className="text-muted">Nama Peserta</small>
              <div className="fw-semibold">{data.fullName || "-"}</div>
            </div>

            <div className="mb-2">
              <small className="text-muted">Uang Pertanggungan</small>
              <div className="fw-semibold">
                Rp {data.coverageAmount.toLocaleString("id-ID")}
              </div>
            </div>

            <hr />

            <div className="mb-2">
              <small className="text-muted">Kontribusi Bulanan</small>
              <div className="fs-4 fw-bold text-success">
                Rp {(data.coverageAmount / 1000).toLocaleString("id-ID")}
              </div>
            </div>

            <small className="text-muted">
              * Nilai bersifat estimasi dan mengikuti ketentuan polis
            </small>
          </div>
        </div>

        {/* RIGHT – PAYMENT METHOD */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4">
            <h6 className="mb-3">Pilih Metode Pembayaran</h6>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="payment-card active">
                  <h6 className="mb-1">Virtual Account</h6>
                  <small className="text-muted">
                    BCA, Mandiri, BRI
                  </small>
                </div>
              </div>

              <div className="col-md-6">
                <div className="payment-card">
                  <h6 className="mb-1">QRIS</h6>
                  <small className="text-muted">
                    Semua e-wallet & bank
                  </small>
                </div>
              </div>

              <div className="col-md-6">
                <div className="payment-card">
                  <h6 className="mb-1">E-Wallet</h6>
                  <small className="text-muted">
                    GoPay, OVO, DANA
                  </small>
                </div>
              </div>

              <div className="col-md-6">
                <div className="payment-card disabled">
                  <h6 className="mb-1">Kartu Kredit</h6>
                  <small className="text-muted">
                    Akan segera tersedia
                  </small>
                </div>
              </div>
            </div>

            <button className="btn btn-success w-100 mt-4">
              Bayar Sekarang
            </button>

            <div className="text-center mt-3">
              <button
                className="btn btn-link text-decoration-none"
                onClick={onBack}
              >
                ← Kembali ke hasil simulasi
              </button>
            </div>

            <p className="text-muted mt-3" style={{ fontSize: 12 }}>
              Dengan melanjutkan pembayaran, Anda menyetujui syarat dan ketentuan
              yang berlaku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;