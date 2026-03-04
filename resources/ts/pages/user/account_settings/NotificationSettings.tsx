const NotificationSettings = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-header fw-semibold">
        Pengaturan Notifikasi
      </div>

      <div className="card-body">
        {[
          "Email Notifikasi",
          "WhatsApp Reminder",
          "Notifikasi Promo",
        ].map((label, index) => (
          <div
            key={index}
            className="form-check form-switch mb-3"
          >
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked
            />
            <label className="form-check-label">
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
