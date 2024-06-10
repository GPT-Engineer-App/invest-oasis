import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Portfolio Value",
      data: [12000, 15000, 14000, 16000, 17000, 18000],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

function PortfolioChart() {
  return (
    <Box>
      <Line data={data} />
    </Box>
  );
}

export default PortfolioChart;
