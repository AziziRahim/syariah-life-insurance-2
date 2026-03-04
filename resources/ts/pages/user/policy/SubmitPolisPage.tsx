import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../../css/ajukan-polis.css";
import { generatePolisPDF } from "../../../utils/generatePolisPDF";

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

const SubmitPolisPage = () => {
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

    const handlePrint = () => {
        window.print();
    };

    const handleDownloadPDF = async () => {
        try {
            await generatePolisPDF({
                nama: data.fullName,
                nomorPolis: "POL-" + Date.now(),
                tanggalLahir: data.dob,
                masaPerlindungan: `${data.duration} Tahun`,
                manfaat: "Santunan meninggal dunia",
            });
        } catch (error) {
            console.error("Gagal generate PDF:", error);
            alert("Gagal membuat PDF sertifikat");
        }
    };

    return (
        <div className="ajukan-polis-page">
            <div className="polis-card polis-result">

                <div className="result-icon">✅</div>

                <h3 className="fw-bold mb-1">
                    Pengajuan Polis Berhasil
                </h3>

                <p className="text-muted mb-4 text-center">
                    Berikut adalah ringkasan data pengajuan polis Anda.
                    Silakan simpan sebagai bukti.
                </p>

                {/* ===== DATA POLIS ===== */}
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

                {/* ===== ACTIONS ===== */}
                <div className="result-actions">
                    <button
                        className="btn-outline"
                        onClick={handlePrint}
                        type="button"
                    >
                        🖨️ Print
                    </button>

                    <button
                        className="btn-outline"
                        onClick={handleDownloadPDF}
                        type="button"
                    >
                        📄 Download PDF
                    </button>
                </div>

                <button
                    className="btn-submit mt-4"
                    onClick={() =>
                        navigate("/user/ajukan-polis", { replace: true })
                    }
                >
                    Kembali ke Ajukan Polis
                </button>
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

export default SubmitPolisPage;
