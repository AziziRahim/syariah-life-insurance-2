type Props = {
  step: number;
  total: number;
};

const Stepper = ({ step, total }: Props) => {
  const percent = Math.round((step / total) * 100);

  return (
    <div className="card p-3">
      <div className="d-flex justify-content-between mb-2">
        <strong>Simulasi Asuransi</strong>
        <span>{step} / {total}</span>
      </div>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default Stepper;
