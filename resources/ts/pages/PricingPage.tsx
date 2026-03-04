import Navbar from "../components/Navbar";
import "../../css/pricing-page.css";

const PricingPage = () => {
    return (
        <>
            <div className="container my-5">
                <div className="pricing-frame">
                    <h2 className="text-center mb-4">
                        Tarif Premi Asuransi Syariah Life Insurance
                    </h2>

                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="table-responsive">
                                <table className="table pricing-table table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>
                                                Usia Masuk
                                                <br />
                                                (Tahun)
                                            </th>
                                            <th colSpan={2}>
                                                Masa Asuransi (Tahun)
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>2</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>17</td>
                                            <td>1.23</td>
                                            <td>1.23</td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td>1.23</td>
                                            <td>1.23</td>
                                        </tr>
                                        <tr>
                                            <td>19</td>
                                            <td>1.23</td>
                                            <td>1.23</td>
                                        </tr>
                                        <tr>
                                            <td>20</td>
                                            <td>1.23</td>
                                            <td>1.23</td>
                                        </tr>
                                        <tr>
                                            <td>21</td>
                                            <td>1.23</td>
                                            <td>1.23</td>
                                        </tr>
                                        <tr>
                                            <td>22</td>
                                            <td>1.23</td>
                                            <td>1.23</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>1.23</td>
                                            <td>1.23</td>
                                        </tr>
                                        <tr>
                                            <td>24</td>
                                            <td>1.23</td>
                                            <td>1.24</td>
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td>1.25</td>
                                            <td>1.25</td>
                                        </tr>
                                        <tr>
                                            <td>26</td>
                                            <td>1.25</td>
                                            <td>1.25</td>
                                        </tr>
                                        <tr>
                                            <td>27</td>
                                            <td>1.25</td>
                                            <td>1.25</td>
                                        </tr>
                                        <tr>
                                            <td>28</td>
                                            <td>1.26</td>
                                            <td>1.27</td>
                                        </tr>
                                        <tr>
                                            <td>29</td>
                                            <td>1.28</td>
                                            <td>1.28</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="simulation-frame">
                                <h5 className="mb-4 fw-semibold text-center">
                                    Contribution Simulation
                                </h5>

                                <div className="diagram">
                                    <div className="diagram-box primary">
                                        Peserta
                                        <br />
                                        <small>Usia Masuk</small>
                                    </div>

                                    <div className="diagram-arrow">→</div>

                                    <div className="diagram-box secondary">
                                        Kontribusi Tahunan
                                        <small>Per Tahun</small>
                                    </div>

                                    <div className="diagram-arrow">→</div>

                                    <div className="diagram-box accent">
                                        Dana Perlindungan
                                        <small>Masa Asuransi</small>
                                    </div>
                                </div>

                                <p className="diagram-note mt-4">
                                    Simulasi ini menunjukkan alur kontribusi
                                    tahunan peserta hingga terbentuknya dana
                                    perlindungan selama masa asuransi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPage;
