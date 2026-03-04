const ProfileSettings = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-header fw-semibold">
        Profil Akun
      </div>

      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control" defaultValue="Deeno" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value="deeno@mail.com"
              disabled
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">No HP</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Tanggal Lahir</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        <div className="mt-4 text-end">
          <button className="btn btn-primary">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
