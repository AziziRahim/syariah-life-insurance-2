type Props = {
  data: any;
  onChange: (data: any) => void;
};

const INFO_ITEMS = [
  { label: "Rate Konstant", percent: "±40%" },
  { label: "Rate Berat Badan", percent: "±20%" },
  { label: "Rate Perokok", percent: "±10%" },
];

const StepThree = ({ data, onChange }: Props) => {
  return (
    <>
      <h5 className="mb-3">Uang Pertanggungan</h5>

      <input
        type="range"
        className="form-range"
        min={10000000}
        max={1000000000}
        step={10000000}
        value={data.coverageAmount}
        onChange={e =>
          onChange({ coverageAmount: Number(e.target.value) })
        }
      />

      <div className="fw-bold mb-4">
        Rp {data.coverageAmount.toLocaleString("id-ID")}
      </div>

      {/* INFORMASI SAJA */}
      <div className="card border-info-subtle p-3 bg-light">
        <h6 className="mb-2">Informasi Komposisi Manfaat</h6>
        <p className="mb-3" style={{ fontSize: 13 }}>
          Persentase di bawah ini bersifat <strong>informasi umum</strong> dan
          tidak memengaruhi hasil simulasi. Pembagian manfaat aktual mengikuti
          ketentuan polis yang berlaku.
        </p>

        <ul className="mb-0 ps-3">
          {INFO_ITEMS.map((item, index) => (
            <li key={index} className="mb-1">
              {item.label} <span className="text-muted">({item.percent})</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StepThree;
