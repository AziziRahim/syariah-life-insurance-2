import { useState } from "react";
import Navbar from "../components/Navbar";
import "../../css/product-page.css";

type ProductType = "kebajikan" | "pembiayaan" | null;

const ProductPage = () => {
  const [activeProduct, setActiveProduct] = useState<ProductType>("kebajikan");

  return (
    <>
        <div className="container my-5">
          <div className="product-layout">
        <div className="product-list">
          <div
            className={`product-item ${activeProduct === "kebajikan" ? "active" : ""}`}
            onClick={() => setActiveProduct("kebajikan")}
          >
            <h5>Asuransi Kebajikan</h5>
            <p>Perlindungan berbasis syariah</p>
          </div>

          <div
            className={`product-item ${activeProduct === "pembiayaan" ? "active" : ""}`}
            onClick={() => setActiveProduct("pembiayaan")}
          >
            <h5>Asuransi Pembiayaan</h5>
            <p>Solusi aman untuk pembiayaan</p>
          </div>
        </div>

        <div className="product-detail">
          {!activeProduct && (
            <div className="placeholder">
              Pilih produk untuk melihat detail
            </div>
          )}

          {activeProduct === "kebajikan" && (
            <div className="detail-card">
              <h4>Asuransi Kebajikan</h4>
              <p>
                Produk asuransi syariah yang memberikan perlindungan jiwa dan
                manfaat kebajikan dengan prinsip transparan.
              </p>
              <ul>
                <li>✅ Sesuai prinsip syariah</li>
                <li>✅ Manfaat santunan</li>
                <li>✅ Pengelolaan amanah</li>
              </ul>
              <div className="diagram">
                <div className="diagram-box primary">
                    Peserta
                    <br />
                    <small>Usia Masuk</small>
                </div>
                <div className="diagram-arrow">→</div>
                <div className="diagram-box secondary">
                    Kontribusi Tahunan
                    <br />
                    <small>Per Tahun</small>
                </div>
                <div className="diagram-arrow">→</div>
                <div className="diagram-box accent">
                    Dana Kebajikan
                    <br />
                    <small>Masa Asuransi</small>
                </div>
                <p className="diagram-note mt-4">
                    Dana kebajikan dikelola sesuai prinsip syariah untuk manfaat
                    bersama.
                </p>
              </div>
            </div>
          )}

          {activeProduct === "pembiayaan" && (
            <div className="detail-card">
              <h4>Asuransi Pembiayaan</h4>
              <p>
                Perlindungan pembiayaan untuk memberikan rasa aman selama masa
                akad berlangsung.
              </p>
              <ul>
                <li>✅ Perlindungan pembiayaan</li>
                <li>✅ Risiko terkelola</li>
                <li>✅ Proses jelas</li>
              </ul>
                            <div className="diagram">
                <div className="diagram-box primary">
                    Peserta
                    <br />
                    <small>Usia Masuk</small>
                </div>
                <div className="diagram-arrow">→</div>
                <div className="diagram-box secondary">
                    Kontribusi Tahunan
                    <br />
                    <small>Per Tahun</small>
                </div>
                <div className="diagram-arrow">→</div>
                <div className="diagram-box secondary">
                    Tambahan Dana Pembiayaan Medis
                    <br />
                    <small>Per Tahun</small>
                </div>
                <div className="diagram-arrow">→</div>
                <div className="diagram-box accent">
                    Dana Kebajikan
                    <br />
                    <small>Masa Asuransi</small>
                </div>
                <p className="diagram-note mt-4">
                    Dana kebajikan dikelola sesuai prinsip syariah untuk manfaat
                    bersama.
                </p>
              </div>
            </div>
          )}
        </div>
          </div>
        </div>
    </>
  );
};

export default ProductPage;
