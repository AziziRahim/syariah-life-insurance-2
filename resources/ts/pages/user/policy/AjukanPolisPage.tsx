import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../css/ajukan-polis.css";

type AjukanPolisForm = {
    product: string;
    fullName: string;
    nik: string;
    dob: string;
    gender: string;
    phone: string;
    email: string;
    contribution: string; // SIMPAN ANGKA MURNI
    duration: string;
    agreement: boolean;
};

const formatRupiah = (value: string) => {
    if (!value) return "";
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(Number(value));
};

const AjukanPolisPage = () => {
    // ✅ FIX PENTING
    const navigate = useNavigate();

    const [form, setForm] = useState<AjukanPolisForm>({
        product: "",
        fullName: "",
        nik: "",
        dob: "",
        gender: "",
        phone: "",
        email: "",
        contribution: "",
        duration: "",
        agreement: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const target = e.target;
        const name = target.name;

        if (target instanceof HTMLInputElement && target.type === "checkbox") {
            setForm((prev) => ({
                ...prev,
                [name]: target.checked,
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: target.value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            ...form,
            contribution: Number(form.contribution),
        };

        // ✅ NAVIGATE KE CONFIRM PAGE
        navigate("/user/polis/confirm", {
            state: payload,
        });
    };

    return (
        <div className="ajukan-polis-page">
            <div className="polis-card">
                <h3 className="fw-bold mb-1">Ajukan Polis</h3>
                <p className="text-muted mb-4">
                    Lengkapi data di bawah untuk mengajukan polis asuransi
                </p>

                <form onSubmit={handleSubmit} autoComplete="off">
                    {/* PRODUK */}
                    <div className="form-group">
                        <label>Produk Asuransi</label>
                        <select
                            name="product"
                            value={form.product}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Pilih Produk --</option>
                            <option value="kebajikan">Asuransi Kebajikan</option>
                            <option value="pembiayaan">Asuransi Pembiayaan</option>
                        </select>
                    </div>

                    {/* DATA DIRI */}
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Nama Lengkap</label>
                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>NIK</label>
                            <input
                                type="text"
                                name="nik"
                                value={form.nik}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Tanggal Lahir</label>
                            <input
                                type="date"
                                name="dob"
                                value={form.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Jenis Kelamin</label>
                            <select
                                name="gender"
                                value={form.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">-- Pilih --</option>
                                <option value="male">Laki-laki</option>
                                <option value="female">Perempuan</option>
                            </select>
                        </div>
                    </div>

                    {/* KONTAK */}
                    <div className="form-grid">
                        <div className="form-group">
                            <label>No. HP</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* DETAIL POLIS */}
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Kontribusi Bulanan</label>
                            <input
                                type="text"
                                name="contribution"
                                value={formatRupiah(form.contribution)}
                                onChange={(e) => {
                                    const raw = e.target.value.replace(/\D/g, "");
                                    setForm((prev) => ({
                                        ...prev,
                                        contribution: raw,
                                    }));
                                }}
                                placeholder="Rp 0"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Durasi Polis</label>
                            <select
                                name="duration"
                                value={form.duration}
                                onChange={handleChange}
                                required
                            >
                                <option value="">-- Pilih --</option>
                                <option value="1">1 Tahun</option>
                                <option value="5">5 Tahun</option>
                                <option value="10">10 Tahun</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={form.agreement}
                            onChange={handleChange}
                            required
                        />
                        <span>Saya menyetujui syarat & ketentuan yang berlaku</span>
                    </div>

                    <button className="btn-submit" type="submit">
                        Ajukan Polis
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AjukanPolisPage;
