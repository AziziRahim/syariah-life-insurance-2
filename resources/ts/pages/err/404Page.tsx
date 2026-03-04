import { useNavigate } from "react-router-dom";

const Page404 = () => {
   const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-dark text-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-info">404</h1>

        <p className="mb-4">
          <strong>Ups! Kamu nyasar.</strong>
          <br />
          Tenang, kita balikin ke jalan yang benar.
        </p>

        <div className="d-flex gap-2 justify-content-center">
          <button
            onClick={() => navigate("/")}
            className="btn btn-info rounded-pill px-4"
          >
            Balik ke Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-light rounded-pill px-4"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page404;