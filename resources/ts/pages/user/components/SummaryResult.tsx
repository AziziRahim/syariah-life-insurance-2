type Props = {
  data: any;
  onReset: () => void;
  onPayment: () => void;
  onDownload: () => void;
};

const StepFinal = ({ data, onReset, onPayment, onDownload }: Props) => {
  return (
    <div className="text-center">
      <h4 className="mb-2">Hasil Simulasi Asuransi</h4>
      <p className="text-muted mb-4">
        Berikut ringkasan hasil simulasi berdasarkan data yang Anda input
      </p>

      {/* SUMMARY CARD */}
      <div className="card shadow-sm p-4 mb-4 text-start">
        <h6 className="mb-3">Ringkasan Simulasi</h6>

        <div className="row mb-2">
          <div className="col-md-6">
            <strong>Produk</strong>
            <p>{data.insuranceType || "-"}</p>
          </div>
          <div className="col-md-6">
            <strong>Nama</strong>
            <p>{data.fullName || "-"}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <strong>Jenis Kelamin</strong>
            <p>{data.gender || "-"}</p>
          </div>
          <div className="col-md-6">
            <strong>Uang Pertanggungan</strong>
            <p className="fw-bold">
              Rp {data.coverageAmount.toLocaleString("id-ID")}
            </p>
          </div>
        </div>

        <hr />

        <div className="alert alert-success mb-0">
          <strong>Estimasi Kontribusi Bulanan</strong>
          <div style={{ fontSize: 20 }}>
            Rp {(data.coverageAmount / 1000).toLocaleString("id-ID")}
          </div>
          <small className="text-muted">
            * Nilai ini bersifat estimasi dan dapat berubah sesuai ketentuan polis
          </small>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
        <button className="btn btn-outline-primary px-4" onClick={onDownload}>
          Download Hasil
        </button>

        <button className="btn btn-success px-4" onClick={onPayment}>
          Lanjut ke Pembayaran
        </button>
      </div>

      <button
        className="btn btn-link mt-4 text-decoration-none"
        onClick={onReset}
      >
        ← Kembali ke Awal Simulasi
      </button>
    </div>
  );
};

export default StepFinal;
