import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  ButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Link from "next/link";

const CampaignCard = ({ data }) => {
  // console.log(data);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const [color, setColor] = useState("blue");
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setColor("red"), []);
  return (
    <div className={`title ${color}`}>
      <Link
        href={`/details/${data.id}`}
        style={{ textDecoration: "none" }}
        key={data._id}
      >
        <a>
          <Card sx={{ maxWidth: 345, m: 2, p: 2, ml: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image="/download.png"
              alt="campaign_image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.attributes.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.information}
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress variant="determinate" value={10} />
                <CardActions>
                  <Button
                    disabled
                    sx={{ width: "0%", color: "black", textTransform: "none" }}
                  >
                    Shs.{data.amount}
                  </Button>
                  <Button
                    disabled
                    sx={{ width: "100%", textTransform: "none" }}
                  >
                    Shs. 36,065.03
                  </Button>
                  <Button disabled sx={{ width: "20%" }}>
                    {data.period}
                  </Button>
                </CardActions>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    "& > *": {
                      m: 0,
                    },
                  }}
                >
                  <ButtonGroup>
                    <Button disabled sx={{ width: "0%" }}>
                      Goal
                    </Button>
                    <Button disabled sx={{ width: "70%" }}>
                      Raised
                    </Button>
                    <Button disabled sx={{ width: "20%" }}>
                      Days left
                    </Button>
                  </ButtonGroup>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </a>
      </Link>
    </div>
  );
};
export default CampaignCard;
