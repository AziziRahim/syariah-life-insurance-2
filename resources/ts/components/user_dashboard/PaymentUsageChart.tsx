import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const PaymentUsageChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Bayar",
        data: [1, 1, 1, 1, 1, 1],
        backgroundColor: "#2563eb",
      },
      {
        label: "Dipakai",
        data: [0, 0, 1, 0, 1, 1],
        backgroundColor: "#dc2626",
      },
    ],
  };

  return <Bar data={data} />;
};

export default PaymentUsageChart;
