import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

import "../../css/guest-serivces-page.css";

type FormData = {
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    dateOfBirth: string;
    age: string;
    periods: string | number;
    bodyHeight: string | number;
    bodyMass: string | number;
    smokerStatus: string;
    compensationAmount: number | "";
};

type SimulationResult = {
    calculateResultAmount: number;
};

const GuestServicesPage = () => {
    const [result, setResult] = useState<SimulationResult | null>(null);
    const MAX_DIGITS = 10;
    const MAX_AMOUNT = 1_000_000_000;
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
        age: "",
        periods: "",
        bodyHeight: "",
        bodyMass: "",
        smokerStatus: "",
        compensationAmount: "",
    });
    const formatRupiah = (value: number | string) => {
        if (!value) return "";
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(Number(value));
    };
    const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let rawValue = e.target.value.replace(/[^\d]/g, "");

        if (rawValue.length > MAX_DIGITS) {
            rawValue = rawValue.slice(0, MAX_DIGITS);
        }

        let numericValue = rawValue ? Number(rawValue) : 0;

        if (numericValue > MAX_AMOUNT) {
            numericValue = MAX_AMOUNT;
        }

        setFormData((prev) => ({
            ...prev,
            compensationAmount: numericValue || "",
        }));
    };

    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            ...formData,
            periods: Number(formData.periods),
            bodyHeight: Number(formData.bodyHeight),
            bodyMass: Number(formData.bodyMass),
        };

        try {
            const response = await api.post(
                "/calculatorForGuest",
                payload,
                { skipAuth: true }
            );

            setResult({
                calculateResultAmount: response.data.calculateResultAmount,
            });

            setSubmittedData(formData);
        } catch (err: any) {
            console.error(err.response?.data || err.message);
        }
    };

    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="contact-frame">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6 text-center object-cover">
                            <img
                                src="/assets/element-2.png"
                                alt="Contact illustration"
                                className="contact-image"
                            />
                        </div>

                        <div className="col-lg-6">
                            <h3>Get a Free Consultation</h3>
                            <p className="text-muted mb-4">
                                Tell us a bit about yourself and we’ll help you
                                choose the right protection.
                            </p>

                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-control"
                                        placeholder="Masukkan nama lengkap Anda"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Alamat Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Masukkan alamat email Anda"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Masukkan nomor telepon Anda"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Jenis Kelamin
                                    </label>
                                    <div className="d-flex gap-3">
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="gender"
                                                id="male"
                                                value="male"
                                                checked={
                                                    formData.gender === "male"
                                                }
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor="male"
                                                className="form-check-label"
                                            >
                                                Laki-laki
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="gender"
                                                id="female"
                                                value="female"
                                                checked={
                                                    formData.gender === "female"
                                                }
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor="female"
                                                className="form-check-label"
                                            >
                                                Perempuan
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Tanggal Lahir
                                    </label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        className="form-control"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Tinggi Badan
                                    </label>
                                    <input
                                        type="number"
                                        name="bodyHeight"
                                        className="form-control"
                                        placeholder="Dalam sentimeter (cm)"
                                        value={formData.bodyHeight}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Berat Badan
                                    </label>
                                    <input
                                        type="number"
                                        name="bodyMass"
                                        className="form-control"
                                        placeholder="Dalam kilogram (kg)"
                                        value={formData.bodyMass}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Apakah kamu merokok?
                                    </label>
                                    <div className="d-flex gap-3">
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="smokerStatus"
                                                id="smokerYes"
                                                value="yes"
                                                checked={
                                                    formData.smokerStatus ===
                                                    "yes"
                                                }
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor="smokerYes"
                                                className="form-check-label"
                                            >
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="smokerStatus"
                                                id="smokerNo"
                                                value="no"
                                                checked={
                                                    formData.smokerStatus ===
                                                    "no"
                                                }
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor="smokerNo"
                                                className="form-check-label"
                                            >
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Masa Pertanggungan Polis
                                    </label>
                                    <input
                                        type="number"
                                        name="periods"
                                        className="form-control"
                                        placeholder="Contoh: 10 tahun"
                                        value={formData.periods}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Santunan
                                    </label>
                                    <input
                                        type="text"
                                        name="compensationAmount"
                                        className="form-control"
                                        placeholder="Contoh: Rp 100.000.000"
                                        value={formatRupiah(
                                            formData.compensationAmount
                                        )}
                                        onChange={handleCurrencyChange}
                                    />
                                </div>
                                <small className="text-muted">
                                    Maksimal Rp{" "}
                                    {Number(MAX_AMOUNT).toLocaleString("id-ID")}
                                </small>
                                {submittedData ? (
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 fw-bold"
                                    >
                                        Perbarui Simulasi
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 fw-bold"
                                    >
                                        Kirim Simulasi
                                    </button>
                                )}
                            </form>
                            <div className="mt-4">
                                <h5 className="text-center fw-bold">
                                    Hasil Simulasi
                                </h5>

                                {submittedData ? (
                                    <div className="p-3 border rounded bg-light">
                                        <p>
                                            <span className="label-text fw-bold">
                                                Nama Lengkap:{" "}
                                            </span>
                                            {submittedData.fullName}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Alamat Email:{" "}
                                            </span>
                                            {submittedData.email}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Nomor Telepon:{" "}
                                            </span>
                                            {submittedData.phone}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Jenis Kelamin:{" "}
                                            </span>
                                            {submittedData.gender}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Tanggal Lahir:{" "}
                                            </span>
                                            {submittedData.dateOfBirth}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Umur:{" "}
                                            </span>
                                            {submittedData.age}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Tinggi Badan:{" "}
                                            </span>
                                            {submittedData.bodyHeight}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Berat Badan:{" "}
                                            </span>
                                            {submittedData.bodyMass}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Perkokok:{" "}
                                            </span>
                                            {submittedData.smokerStatus}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Masa Pertanggungan Polis:{" "}
                                            </span>
                                            {submittedData.periods}
                                        </p>
                                        <p>
                                            <span className="label-text fw-bold">
                                                Jumlah Kontribusi Pertanggungan:{" "}
                                            </span>
                                            {result
                                                ? formatRupiah(
                                                      result.calculateResultAmount
                                                  )
                                                : "Belum dihitung"}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-muted">
                                        Silakan kirim formulir untuk melihat
                                        hasil simulasi.
                                    </p>
                                )}
                            </div>
                            <div className="mt-4">
                                {submittedData ? (
                                    <div className="p-3 border rounded bg-light">
                                        <h5>
                                            Terima kasih telah menggunakan
                                            layanan simulasi kami.
                                        </h5>
                                        <p>
                                            Jika Anda tertarik dengan produk
                                            kami, Anda dapat mendaftarkan akun
                                            dan menghubungi agen kami untuk
                                            informasi lebih lanjut.
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate("/register-account")
                                            }
                                            className="btn btn-primary w-100 fw-bold"
                                        >
                                            Daftar Akun
                                        </button>
                                    </div>
                                ) : (
                                    <p className="text-muted">
                                        Silakan isi formulir dan kirimkan untuk
                                        melihat hasil di sini.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GuestServicesPage;
