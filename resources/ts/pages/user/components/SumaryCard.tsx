type Props = {
  data: any;
};

const SummaryCard = ({ data }: Props) => {
  const estimatedPremium = data.coverageAmount
    ? Math.round(data.coverageAmount / 1000)
    : 0;

  return (
    <div className="card shadow-sm p-3 sticky-top">
      <h6>Ringkasan Simulasi</h6>
      <hr />

      <p><strong>Produk:</strong> {data.insuranceType || "-"}</p>
      <p><strong>Nama:</strong> {data.fullName || "-"}</p>
      <p><strong>Uang Pertanggungan:</strong></p>
      <p className="fw-bold">
        Rp {data.coverageAmount.toLocaleString("id-ID")}
      </p>

      <div className="alert alert-success mt-3">
        Estimasi Kontribusi<br />
        <strong>Rp {estimatedPremium.toLocaleString("id-ID")} / bulan</strong>
      </div>
    </div>
  );
};

export default SummaryCard;
