import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


import GuestServicesPage from "./GuestServicesPage";
import "../../css/landing-page.css";



type SectionKey = "partners" | "services" | "pricing" | "about";

const LandingPage = () => {
    const location = useLocation();

    const partnersRef = useRef<HTMLDivElement | null>(null);
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const pricingRef = useRef<HTMLDivElement | null>(null);
    const aboutUsRef = useRef<HTMLDivElement | null>(null);

    const navigate = useNavigate();
    useEffect(() => {
        const target = location.state?.scrollTo as SectionKey | undefined;
        if (!target) return;

        const map: Record<
            SectionKey,
            React.RefObject<HTMLDivElement | null>
        > = {
            partners: partnersRef,
            services: servicesRef,
            pricing: pricingRef,
            about: aboutUsRef,
        };

        map[target]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // 🔥 clear state so refresh won't re-scroll
        navigate(location.pathname, { replace: true });
    }, [location.state, navigate, location.pathname]);
    const data = [
        {
            name: "Aqmar Naufal",
            role: "CEO, Insurance App",
            message:
                "Aplikasi ini sangat andal dan transparan. Setiap fitur dirancang dengan baik dan mudah digunakan.",
            avatar: "https://i.pravatar.cc/100?img=11",
        },
        {
            name: "Muhammad Fikri",
            role: "Product Designer",
            message:
                "Pengalaman pengguna terasa mulus, dengan dukungan layanan yang sangat responsif dan profesional.",
            avatar: "https://i.pravatar.cc/100?img=32",
        },
        {
            name: "Salsa Putri",
            role: "Doctor & Health Advisor",
            message: "Antarmuka yang modern dan intuitif. Platform ini sangat membantu tim kami berkembang lebih cepat.",
            avatar: "https://i.pravatar.cc/100?img=44",
        },
        {
            name: "Rizky Aditya",
            role: "Karyawan Swasta",
            message: "Tampilan antarmuka bersih, performa cepat, dan sistem yang sangat dapat diandalkan.",
            avatar: "https://i.pravatar.cc/100?img=21",
        },
        {
            name: "Dewi Lestari",
            role: "Marketing Lead",
            message: "Kepercayaan pelanggan meningkat secara signifikan setelah menggunakan platform ini.",
            avatar: "https://i.pravatar.cc/100?img=48",
        },
        {
            name: "Bima Prakoso",
            role: "CTO",
            message: "Proses integrasi yang sederhana dengan dokumentasi teknis yang sangat jelas dan lengkap.",
            avatar: "https://i.pravatar.cc/100?img=56",
        },
    ];

    return (
        <>
            <div className="container">
                <section className="section">
                    <div className="row align-items-start">
                        <div className="col-lg-7">
                            <div className="carousel-frame">
                                <div
                                    id="myCarousel"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-indicators">
                                        <button
                                            type="button"
                                            data-bs-target="#myCarousel"
                                            data-bs-slide-to="0"
                                            className="active"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#myCarousel"
                                            data-bs-slide-to="1"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#myCarousel"
                                            data-bs-slide-to="2"
                                        ></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="/assets/news1.jpg"></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="/assets/news2.jpg"></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="/assets/news3.jpg"></img>
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#myCarousel"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon"></span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#myCarousel"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="news-panel">
                                <h4>Latest News</h4>

                                <div className="news-item">
                                    <h6>Health Insurance Update</h6>
                                    <p>
                                        New syariah coverage launched for
                                        families.
                                    </p>
                                </div>

                                <div className="news-item">
                                    <h6>Policy Enhancement</h6>
                                    <p>
                                        Better claim process starting this
                                        month.
                                    </p>
                                </div>

                                <a href="#" className="btn btn-primary mt-3">
                                    View All News
                                </a>
                            </div>
                        </div>
                        <div className="container my-5">
                            <div className="decision-frame">
                                <div className="row align-items-center g-4">
                                    <div className="col-lg-5 text-center">
                                        <img
                                            src="/assets/element-1.png"
                                            className="decision-illustration"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className="col-lg-7">
                                        <h3>
                                            Thinking About Your Family’s Future?
                                        </h3>
                                        <p className="decision-text">
                                            Choosing the right protection
                                            shouldn’t be complicated. We help
                                            you secure what matters most —
                                            transparently and
                                            syariah-compliantly.
                                        </p>

                                        <ul className="decision-points">
                                            <li>
                                                Trusted coverage you can rely on
                                            </li>
                                            <li>
                                                Simple and transparent claims
                                            </li>
                                            <li>
                                                Support whenever you need it
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <h3 className="text-center mb-4">Why Choose Us</h3>

                        <div className="row g-4">
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="card benefit-card h-100 text-center">
                                    <i className="bi bi-shield-check benefit-icon"></i>
                                    <h6>Secure Protection</h6>
                                    <p>
                                        Reliable coverage with trusted
                                        compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="card benefit-card h-100 text-center">
                                    <i className="bi bi-lightning-charge benefit-icon"></i>
                                    <h6>Fast Process</h6>
                                    <p>Quick onboarding and claim handling.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="card benefit-card h-100 text-center">
                                    <i className="bi bi-people benefit-icon"></i>
                                    <h6>Customer First</h6>
                                    <p>
                                        Dedicated support whenever you need it.
                                    </p>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="card benefit-card h-100 text-center">
                                    <i className="bi bi-bar-chart benefit-icon"></i>
                                    <h6>Transparent Value</h6>
                                    <p>Clear pricing with no hidden fees.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <GuestServicesPage />
                </section>
                <section className="testimonial-wrapper">
                    <div className="testimonial-container">
                        <div className="text-center mb-5">
                            <span className="badge-text">Testimoni</span>
                            <h2 className="fw-bold mt-2">Apa Kata Mereka</h2>
                            <p className="text-muted">
                                15+ ulasan dari orang-orang yang menggunakan produk kami.
                            </p>
                        </div>

                        <div className="testimonial-grid">
                            {data.map((item, i) => (
                                <div className="testimonial-card" key={i}>
                                    <div className="stars">★★★★★</div>

                                    <p className="testimonial-text">
                                        {item.message}
                                    </p>

                                    <div className="user">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                        />
                                        <div>
                                            <strong>{item.name}</strong>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mb-5 mt-5">
                        <h2 className="fw-bold">Our Partners</h2>
                        <p className="text-muted">
                            Perusahaan yang kami kerjasamakan dengan bangga
                        </p>
                    </div>

                    <div className="container" ref={partnersRef}>
                        <div className="row g-4 justify-content-center">
                            <div className="col-6 col-md-3">
                                <div className="partner-card">
                                    <img
                                        src="/assets/partners1.png"
                                        alt="Partner 1"
                                    />
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="partner-card">
                                    <img
                                        src="/assets/partners2.png"
                                        alt="Partner 2"
                                    />
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="partner-card">
                                    <img
                                        src="/assets/partners3.png"
                                        alt="Partner 3"
                                    />
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="partner-card">
                                    <img
                                        src="/assets/partners4.png"
                                        alt="Partner 4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-section my-5" ref={aboutUsRef}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h6 className="about-subtitle">Tentang Kami</h6>
                                <h2 className="about-title">
                                    Perlindungan yang Transparan dan Terpercaya
                                </h2>

                                <p className="about-text">
                                    Kami berkomitmen menyediakan solusi
                                    perlindungan jiwa yang mudah dipahami,
                                    transparan, dan relevan dengan kebutuhan
                                    masyarakat modern. Fokus kami adalah
                                    memberikan rasa aman melalui perencanaan
                                    perlindungan yang terstruktur dan
                                    bertanggung jawab.
                                </p>

                                <ul className="about-list">
                                    <li>✔ Kontribusi jelas dan terukur</li>
                                    <li>
                                        ✔ Prinsip perlindungan berbasis syariah
                                    </li>
                                    <li>✔ Proses sederhana dan transparan</li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <div className="address-frame">
                                    <h5 className="mb-3 fw-semibold">
                                        Kantor Pusat
                                    </h5>

                                    <p className="address-text">
                                        Gedung Nusantara Plaza Lt. 12
                                        <br />
                                        Jl. Jenderal Sudirman No. 45
                                        <br />
                                        Karet Tengsin, Tanah Abang
                                        <br />
                                    </p>

                                    <div className="address-divider"></div>

                                    <p className="address-contact">
                                        <strong>Email:</strong>{" "}
                                        info@syariahlife.co.id
                                        <br />
                                        <strong>Phone:</strong> (021) 555-8899
                                        <br />
                                        <strong>Office Hour:</strong> Mon – Fri,
                                        09:00 – 17:00 WIB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LandingPage;
