import "../../css/registration.css";
import React from "react";
import { useState } from "react";
import { register } from "../api";
import { useNotification } from "../../ts/components/notifications";
import { NavLink } from "react-router-dom";



type Props = {
    fullName: string;
    motherName: string;
    gender: string;
    phoneNumber?: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    secretWord: string;
    dateOfBirth: string;
};

const RegistrationAccount = () => {
    const { notify } = useNotification();
    const [formData, setFormData] = useState<Props>({
        fullName: "",
        motherName: "",
        gender: "",
        phoneNumber: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
        secretWord: "",
        dateOfBirth: "",
    });

    const [errors, setErrors] = useState<{
        fullName?: string;
        motherName?: string;
        gender?: string;
        emailAddress?: string;
        password?: string;
        confirmPassword?: string;
        secretWord?: string;
        dateOfBirth?: string;
    }>({});


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => {
            const newErrors = { ...prev };

            if (name === "fullName") {
                newErrors.fullName = value.trim()
                    ? undefined
                    : "Full name is required";
            }

            if (name === "motherName") {
                newErrors.motherName = value.trim()
                    ? undefined
                    : "Mother name is required";
            }

            if (name === "password") {
                newErrors.password = value.trim()
                    ? undefined
                    : "Password is required";
            }
            if (name === "confirmPassword") {
                newErrors.confirmPassword =
                    value === formData.password
                        ? undefined
                        : "Passwords do not match";
            } else if (name === "confirmPassword" && !value.trim()) {
                newErrors.confirmPassword = "Confirm password is required";
            }

            if (name === "secretWord") {
                newErrors.secretWord = value.trim()
                    ? undefined
                    : "Secret word is required";
            }

            if (name === "dateOfBirth") {
                newErrors.dateOfBirth = value.trim()
                    ? undefined
                    : "Date of birth is required";
            }

            if (name === "emailAddress") {
                if (!value.trim()) {
                    newErrors.emailAddress = "Email is required";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors.emailAddress = "Invalid email format";
                } else {
                    newErrors.emailAddress = undefined;
                }
            }

            return newErrors;
        });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const finalErrors = {
            fullName: formData.fullName.trim() ? undefined : "Full name is required",
            motherName: formData.motherName.trim() ? undefined : "Mother name is required",
            emailAddress: formData.emailAddress.trim() ? undefined : "Email is required",
            password: formData.password.trim() ? undefined : "Password is required",
            confirmPassword:
                formData.confirmPassword === formData.password
                    ? undefined
                    : "Passwords do not match",
            secretWord: formData.secretWord.trim() ? undefined : "Secret word is required",
            dateOfBirth: formData.dateOfBirth.trim() ? undefined : "Date of birth is required",
        };

        setErrors(finalErrors);

        if (Object.values(finalErrors).some(Boolean)) return;

        try {
            await register({
                fullName: formData.fullName,
                motherName: formData.motherName,
                gender: formData.gender || "M",
                phoneNumber: formData.phoneNumber || null,
                emailAddress: formData.emailAddress,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                secretWord: formData.secretWord,
                dateOfBirth: formData.dateOfBirth,
            });

            setFormData({
                fullName: "",
                motherName: "",
                gender: "",
                phoneNumber: "",
                emailAddress: "",
                password: "",
                confirmPassword: "",
                secretWord: "",
                dateOfBirth: "",
            });

            setErrors({});
            notify("Registrasi berhasil, silakan login", "success");
        } catch (error: any) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            } else {
                notify("Registrasi gagal", "error");
                console.error(error);
            }
        }
    };


    return (
        <>
            <div className="register-container">
                <div className="register-image">
                    <img
                        src="/assets/registration-element.png"
                        alt="Register Illustration"
                    />
                </div>

                <div className="register-form">
                    <h2>Buat Akun Baru</h2>
                    <p>Daftar sekarang untuk mencoba aplikasi kami!</p>

                    <form onSubmit={onSubmit}>
                        <label className="form-label">Nama Lengkap</label>
                        <input
                            type="text"
                            name="fullName"
                            onChange={handleChange}
                            placeholder="Full Name"
                            value={formData.fullName}
                            required
                        />
                        {errors.fullName && (
                            <small className="text-danger">
                                {errors.fullName}
                            </small>
                        )}
                        <label className="form-label">Mother Name</label>
                        <input
                            type="text"
                            name="motherName"
                            onChange={handleChange}
                            placeholder="Mother Name"
                            value={formData.motherName}
                            required
                        />
                        {errors.motherName && (
                            <small className="text-danger">
                                {errors.motherName}
                            </small>
                        )}
                        <div className="mb-3">
                            <label className="form-label">Jenis Kelamin</label>

                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-person"></i>
                                </span>

                                <select
                                    name="gender"
                                    required
                                    onChange={handleChange}
                                    className="form-select"
                                    value={formData.gender}
                                >
                                    <option value="" disabled>
                                        Select gender
                                    </option>
                                    <option value="M">Pria</option>
                                    <option value="F">Wanita</option>
                                </select>
                            </div>
                        </div>
                        {errors.gender && (
                            <small className="text-danger">
                                {errors.gender}
                            </small>
                        )}
                        <label className="form-label">Nomor Telephone</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            onChange={handleChange}
                            placeholder="Phone Number (Optional)"
                            value={formData.phoneNumber}
                        />
                        <label className="form-label">Alamat Email</label>
                        <input
                            type="email"
                            name="emailAddress"
                            onChange={handleChange}
                            placeholder="Email Address"
                            value={formData.emailAddress}
                            required
                        />
                        {errors.emailAddress && (
                            <small className="text-danger">
                                {errors.emailAddress}
                            </small>
                        )}
                        <label className="form-label">Kata Sandi</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            value={formData.password}
                            required
                        />
                        {errors.password && (
                            <small className="text-danger">
                                {errors.password}
                            </small>
                        )}
                        <label className="form-label">Ulang Kata Sandi</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            required
                        />
                        {errors.confirmPassword && (
                            <small className="text-danger">
                                {errors.confirmPassword}
                            </small>
                        )}
                        <label className="form-label">Secret Word</label>
                        <input
                            type="text"
                            name="secretWord"
                            onChange={handleChange}
                            placeholder="Secret Word"
                            value={formData.secretWord}
                            required
                        />
                        {errors.secretWord && (
                            <small className="text-danger">
                                {errors.secretWord}
                            </small>
                        )}
                        <label className="form-label">Tanggal Lahir</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Date of Birth"
                            value={formData.dateOfBirth}
                        ></input>
                        {errors.dateOfBirth && (
                            <small className="text-danger">
                                {errors.dateOfBirth}
                            </small>
                        )}
                        <button type="submit">Register</button>
                    </form>

                    <span className="login-text">
                        Sudah punya akun? <NavLink to={"/login"}>Login</NavLink>
                    </span>
                </div>
            </div>
        </>
    );
};

export default RegistrationAccount;
