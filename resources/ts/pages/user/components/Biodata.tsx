type Props = {
  data: any;
  onChange: (data: any) => void;
};

const StepTwo = ({ data, onChange }: Props) => {
  return (
    <>
      <h5 className="mb-3">Data Pribadi</h5>

      <div className="mb-3">
        <label>Nama Lengkap</label>
        <input
          className="form-control"
          value={data.fullName}
          onChange={e => onChange({ fullName: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Alamat Email</label>
        <input
          className="form-control"
          value={data.fullName}
          onChange={e => onChange({ fullName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input
          className="form-control"
          value={data.fullName}
          onChange={e => onChange({ fullName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label>Jenis Kelamin</label>
        <select
          className="form-select"
          value={data.gender}
          onChange={e => onChange({ gender: e.target.value })}
        >
          <option value="">Pilih</option>
          <option value="male">Laki-laki</option>
          <option value="female">Perempuan</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Tanggal Lahir</label>
        <input
          className="form-control"
          value={data.fullName}
          onChange={e => onChange({ fullName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label>Tinggi Badan</label>
        <input
          className="form-control"
          value={data.fullName}
          onChange={e => onChange({ fullName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label>Berat Badan</label>
        <input
          className="form-control"
          value={data.fullName}
          onChange={e => onChange({ fullName: e.target.value })}
        />
      </div>
    </>
  );
};

export default StepTwo;
