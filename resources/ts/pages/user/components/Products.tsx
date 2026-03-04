type Props = {
  data: any;
  onChange: (data: any) => void;
};

const StepOne = ({ data, onChange }: Props) => {
  return (
    <div className="text-center">
      <h5 className="mb-2">Pilih Jenis Asuransi</h5>
      <p className="text-muted mb-4">
        Tentukan produk yang ingin disimulasikan
      </p>

      <div className="row justify-content-center">
        {["Asuransi Kebajikan", "Asuransi Pembiayaan"].map(type => (
          <div className="col-md-4 col-lg-3 mb-3" key={type}>
            <div
              className={`select-card h-100 d-flex align-items-center justify-content-center ${
                data.insuranceType === type ? "active" : ""
              }`}
              onClick={() => onChange({ insuranceType: type })}
            >
              <h6 className="mb-0">{type}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepOne;