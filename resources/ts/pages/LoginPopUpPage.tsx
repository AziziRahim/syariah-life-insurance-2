import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "../../css/login-page.css";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

type Props = {
    show: boolean;
    onClose: () => void;
};

const LoginPopUpPage = ({ show, onClose }: Props) => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [show]);

    const handleRegisterClick = () => {
        onClose();
        navigate("/register-account");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await login({
                email: form.email,
                password: form.password,
                remember_me: rememberMe,
            });

            onClose();
            navigate("/user", { replace: true });
        } catch (err: any) {
            if (err.response?.status === 401) {
                setError("Email atau password salah");
            } else {
                setError("Login gagal, coba lagi");
            }
        } finally {
            setLoading(false);
        }
    };

    if (!show) return null;

    return createPortal(
        <>
            {/* UI TIDAK DIUBAH */}
            <div className="modal fade show d-block" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow-lg rounded-4">
                        <div className="modal-body p-4">
                            <button
                                className="btn-close position-absolute top-0 end-0 m-3"
                                onClick={onClose}
                            />

                            <h3 className="text-center fw-bold mb-2">Selamat datang</h3>
                            <p className="text-center text-muted mb-3">
                                Masuk ke Akunmu
                            </p>

                            {error && (
                                <div className="alert alert-danger py-2 small">
                                    <i className="bi bi-exclamation-triangle me-2" />
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                {/* form lu tetap sama */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show" onClick={onClose} />
        </>,
        document.body
    );
};

export default LoginPopUpPage;
