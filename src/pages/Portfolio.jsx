import { Box, Heading } from "@chakra-ui/react";
import PortfolioChart from "../components/PortfolioChart.jsx";

function Portfolio() {
  return (
    <Box>
      <Heading>Portfolio Performance</Heading>
      <PortfolioChart />
    </Box>
  );
}

export default Portfolio;
