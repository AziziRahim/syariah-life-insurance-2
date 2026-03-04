const SecuritySettings = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-header fw-semibold">
        Keamanan Akun
      </div>

      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Password Lama</label>
          <input type="password" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password Baru</label>
          <input type="password" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Konfirmasi Password</label>
          <input type="password" className="form-control" />
        </div>

        <div className="text-end">
          <button className="btn btn-warning">
            Update Password
          </button>
        </div>

        <hr />

        <div>
          <h6 className="fw-semibold">Login Terakhir</h6>
          <p className="mb-1">Chrome · Windows</p>
          <small className="text-muted">2 jam lalu</small>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
