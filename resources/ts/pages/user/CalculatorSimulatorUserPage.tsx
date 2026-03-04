import { useState } from "react";
import Stepper from "../../pages/user/components/Stepper";
import StepOne from "../../pages/user/components/Products";
import StepTwo from "../../pages/user/components/Biodata";
import StepThree from "../../pages/user/components/Compensation";
import SummaryCard from "../../pages/user/components/SumaryCard";
import StepFinal from "../../pages/user/components/SummaryResult";
import PaymentPage from "../../pages/user/components/PaymentPage";

import "../../../css/calculator.css";

const TOTAL_STEPS = 4;

const CalculatorSimulatorUserPage = () => {
  const [step, setStep] = useState(1);
  const [showPayment, setShowPayment] = useState(false);

  const initialFormData = {
    insuranceType: "",
    fullName: "",
    gender: "",
    age: 0,
    coverageAmount: 0,
  };

  const [formData, setFormData] = useState(initialFormData);

  const updateData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setStep(1);
    setShowPayment(false);
  };

  const renderStep = () => {
    if (showPayment) {
      return (
        <PaymentPage
          data={formData}
          onBack={() => setShowPayment(false)}
        />
      );
    }

    if (step === TOTAL_STEPS) {
      return (
        <StepFinal
          data={formData}
          onReset={handleReset}
          onPayment={() => setShowPayment(true)}
          onDownload={() => console.log("Download PDF")}
        />
      );
    }

    switch (step) {
      case 1:
        return <StepOne data={formData} onChange={updateData} />;
      case 2:
        return <StepTwo data={formData} onChange={updateData} />;
      case 3:
        return <StepThree data={formData} onChange={updateData} />;
      default:
        return <div>Step {step} belum dibuat</div>;
    }
  };

  return (
    <div className="container-fluid">
      {!showPayment && <Stepper step={step} total={TOTAL_STEPS} />}

      <div className="row mt-4">
        {showPayment || step === TOTAL_STEPS ? (
          <div className="col-12">
            <div className="card shadow-sm p-4">
              {renderStep()}
            </div>
          </div>
        ) : (
          <>
            <div className="col-lg-8">
              <div className="card shadow-sm p-4">
                {renderStep()}

                <div className="d-flex justify-content-between mt-4">
                  <button
                    className="btn btn-outline-secondary"
                    disabled={step === 1}
                    onClick={() => setStep(step - 1)}
                  >
                    Kembali
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => setStep(step + 1)}
                  >
                    Lanjut
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <SummaryCard data={formData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CalculatorSimulatorUserPage;
