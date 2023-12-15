import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button, Container, Typography, Paper, Card } from "@mui/joy";

export default function DetailsModal({ setModalState, data }) {
  if (!data) return null;

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "1rem",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <Card
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Container sx={{ marginTop: "20px" }}>
          <ul>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Amount In USD:
              </Typography>
              <Typography variant="body2">
                {data.AmountInUSD || "N/A"}
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                City:
              </Typography>
              <Typography variant="body2">
                {data.CityLocation || "N/A"}
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Date:
              </Typography>
              <Typography variant="body2">{data.Date || "N/A"}</Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Industry Vertical:
              </Typography>
              <Typography variant="body2">
                {data.IndustryVertical || "N/A"}
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Investment Type:
              </Typography>
              <Typography variant="body2">
                {data.InvestmentType || "N/A"}
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Investors Name:
              </Typography>
              <Typography variant="body2">
                {data.InvestorsName || "N/A"}
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Startup Name:
              </Typography>
              <Typography variant="body2">
                {data.StartupName || "N/A"}
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Sub Vertical:
              </Typography>
              <Typography variant="body2">
                {data.SubVertical || "N/A"}
              </Typography>
            </li>
          </ul>
        </Container>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setModalState(false)}
        >
          Close
        </Button>
      </Card>
    </Container>
  );
}
