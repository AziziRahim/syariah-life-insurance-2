import "../../../css/user-profile.css";

const UserProfilePage = () => {
    const user = {
        id: "USR-2025-001",
        name: "dummy",
        email: "dummy@dummy.com",
        phone: "+62 812-xxxx-xxxx",
        dob: "12 Jan 1998",
        motherName: "Siti Aminah",
        height: "175 cm",
        weight: "70 kg",
        status: "Active",
        lastLogin: "2 jam lalu",
        device: {
            browser: "Chrome",
            os: "Windows",
            ip: "103.xxx.xxx.12",
            location: "Jakarta, Indonesia",
        },
        activities: ["Login dari Chrome", "Update profile", "Logout"],
    };

    return (
        <div className="profile-page">
            <div className="profile-layout">
                {/* LEFT - BIG PROFILE */}
                <div className="profile-card">
                    <div className="profile-header">
                        <img
                            src="https://i.pravatar.cc/120"
                            alt="avatar"
                            className="profile-avatar"
                        />

                        <div>
                            <h2 className="profile-name">{user.name}</h2>
                            <p className="profile-email">{user.email}</p>
                            <span className="profile-status">
                                {user.status}
                            </span>
                        </div>
                    </div>

                    <div className="profile-info-grid">
                        <Info label="User ID" value={user.id} />
                        <Info label="Phone Number" value={user.phone} />
                        <Info label="Date of Birth" value={user.dob} />
                        <Info label="Mother Name" value={user.motherName} />
                        <Info label="Height" value={user.height} />
                        <Info label="Weight" value={user.weight} />
                    </div>
                    <div className="profile-actions">
                        <button className="btn-edit">Edit Profile</button>

                        <button
                            className="btn-delete"
                            onClick={() => {
                                if (
                                    confirm(
                                        "Yakin mau hapus akun? Aksi ini tidak bisa dibatalkan."
                                    )
                                ) {
                                    // call delete API
                                }
                            }}
                        >
                            Delete Akun
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="profile-side">
                    <div className="side-card">
                        <p className="side-title">Last Login</p>

                        <h4 className="last-login-time">{user.lastLogin}</h4>

                        <div className="device-info">
                            <p>
                                {user.device.browser} · {user.device.os}
                            </p>
                            <p>IP: {user.device.ip}</p>
                            <p>{user.device.location}</p>
                        </div>

                        <button className="danger-link">
                            Logout device ini
                        </button>
                    </div>

                    <div className="side-card">
                        <p className="side-title">Last Activity</p>
                        <ul className="activity-list">
                            {user.activities.map((a, i) => (
                                <li key={i}>{a}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-header">
                        <h3>Recent Payment</h3>
                        <button className="link-btn">Lihat Semua</button>
                    </div>

                    <div className="payment-list">
                        <div className="payment-item success">
                            <span>Jan 2025</span>
                            <span>Rp 250.000</span>
                            <span className="status">Berhasil</span>
                        </div>

                        <div className="payment-item success">
                            <span>Des 2024</span>
                            <span>Rp 250.000</span>
                            <span className="status">Berhasil</span>
                        </div>

                        <div className="payment-item pending">
                            <span>Nov 2024</span>
                            <span>Rp 250.000</span>
                            <span className="status">Pending</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Info = ({ label, value }: any) => (
    <div className="profile-info-item">
        <span className="info-label">{label}</span>
        <span className="info-value">{value}</span>
    </div>
);

export default UserProfilePage;
