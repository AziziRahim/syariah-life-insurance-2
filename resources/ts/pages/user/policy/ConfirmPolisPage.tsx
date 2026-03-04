import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../../css/ajukan-polis.css";

type AjukanPolisForm = {
    product: string;
    fullName: string;
    nik: string;
    dob: string;
    gender: string;
    phone: string;
    email: string;
    contribution: number;
    duration: string;
};

const formatRupiah = (value: number) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(value);

const ConfirmPolisPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state as AjukanPolisForm | null;

    // 🔒 Guard: tidak boleh akses langsung
    useEffect(() => {
        if (!data) {
            navigate("/user/ajukan-polis", { replace: true });
        }
    }, [data, navigate]);

    if (!data) return null;

    const handleConfirm = () => {
        navigate("/user/polis/submit", {
            state: data,
            replace: true,
        });
    };



    return (
        <div className="ajukan-polis-page">
            <div className="polis-card">

                {/* 🔙 Modern Back Header */}
                <div className="confirm-header">
                    <button
                        type="button"
                        className="btn-back"
                        onClick={() => navigate(-1)}
                    >
                        <span className="back-icon">←</span>
                        <span>Kembali</span>
                    </button>
                </div>

                <h3 className="fw-bold mb-1">Konfirmasi Pengajuan Polis</h3>
                <p className="text-muted mb-4">
                    Pastikan data berikut sudah benar
                </p>

                <div className="confirm-list">
                    <ConfirmItem label="Produk" value={data.product} />
                    <ConfirmItem label="Nama Lengkap" value={data.fullName} />
                    <ConfirmItem label="NIK" value={data.nik} />
                    <ConfirmItem label="Tanggal Lahir" value={data.dob} />
                    <ConfirmItem
                        label="Jenis Kelamin"
                        value={data.gender === "male" ? "Laki-laki" : "Perempuan"}
                    />
                    <ConfirmItem label="No. HP" value={data.phone} />
                    <ConfirmItem label="Email" value={data.email} />
                    <ConfirmItem
                        label="Kontribusi Bulanan"
                        value={formatRupiah(data.contribution)}
                    />
                    <ConfirmItem
                        label="Durasi Polis"
                        value={`${data.duration} Tahun`}
                    />
                </div>

                <div className="confirm-actions">
                    <button
                        className="btn-submit"
                        onClick={handleConfirm}
                    >
                        Konfirmasi & Kirim
                    </button>
                </div>
            </div>
        </div>
    );
};

const ConfirmItem = ({
                         label,
                         value,
                     }: {
    label: string;
    value: string;
}) => (
    <div className="confirm-item">
        <span className="label">{label}</span>
        <span className="value">{value}</span>
    </div>
);

export default ConfirmPolisPage;
