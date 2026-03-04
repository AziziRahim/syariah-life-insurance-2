

const Footer = () => {
  return (
    <footer className="site-footer">
                    <div className="footer-container">
                        <div className="footer-brand">
                            <h5>Syariah Life Insurance</h5>
                            <p>
                                Providing secure and transparent insurance
                                solutions for a better future.
                            </p>
                        </div>

                        <div className="footer-links">
                            <h6>Company</h6>
                            <ul>
                                <li>Tentang Kami</li>
                                <li>Product Kita</li>
                                <li>Testimonials</li>
                                <li>Kontak</li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h6>Legal</h6>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Disclaimer</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        © {new Date().getFullYear()} Syariah Life Insurance. All
                        rights reserved.
                    </div>
                </footer>
    );
};

export default Footer;