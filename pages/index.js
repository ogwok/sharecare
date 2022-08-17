import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Button, AppBar } from "@mui/material";
import Banner from "../components/Banner";
import CampaignCard from "./CampaignCard";
import axios from "axios";

export default function Home() {
  const [campaigns, setCampaigns] = useState([]);
  // const [data2, setData2] = useState();

  const fetchCampaigns = async () => {
    const { data } = await axios.get("http://localhost:1337/api/campaigns");
    const data2 = await axios.get("http://localhost:1337/api/campaigns");
    setCampaigns(data.data);
    // setData2(data2);
    console.log("hellllo", data2.data.data);
  };
  // console.log("gldsjgbsdgb", data2);

  useEffect(() => {
    fetchCampaigns();
  }, []);
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#36c958" }}>
        <Banner />
        <Box sx={{ bgcolor: "#ffffff" }}>
          <Typography
            gutterBottom
            sx={{
              color: "#000000",
              fontSize: {
                md: 30,
                xs: 25,
              },
              ml: 2,
              mt: 2,
            }}
          >
            {/* {data2?.map((data) => (
              <p>{data.id}</p>
            ))} */}
            FundRaise For
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", pr: 3, mt: -5 }}
          >
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                textTransform: "none",
                fontSize: 20,
                padding: "6px 12px",
                border: "1px solid",
                lineHeight: 1.5,
                backgroundColor: "#36C958",
                borderColor: "#2E2D33",
                "&:hover": {
                  backgroundColor: "#000000",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
              }}
            >
              See All
            </Button>
          </Box>
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
              BackgroundColor: "#FFFFFF",
            }}
          >
            {campaigns &&
              campaigns?.map((data) => <CampaignCard data={data} />)}
          </Grid>
        </Box>
      </AppBar>
    </>
  );
}
