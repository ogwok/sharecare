import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { AppBar } from "@mui/material";
import FRBanner from "../../components/FRBanner";
import FundRaiseDonate from "../../components/FundRaiseDonate";
import axios from "axios";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Image from "next/image";
import Tab from "@mui/material/Tab";

function TabPanel(props, data) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Details = ({ post }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#36c958" }}>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <FRBanner />
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#ffffff",
            display: "flex",
            border: "none",
          }}
        >
          <Typography
            gutterBottom
            variant="h1"
            sx={{
              color: "#000000",
              width: "auto",
              fontSize: {
                md: 25,
                xs: 20,
              },
              ml: 2,
              mt: 2,
              justifyContent: "flex-end",
              fontWeight: "bold",
            }}
          >
            {post.name}
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#ffffff" }}>
          <FundRaiseDonate post={post} />
          <Box sx={{ width: "70%", backgroundColor: "#ffffff" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Details" {...a11yProps(0)} />
                <Tab label="Audio" {...a11yProps(1)} />
                <Tab label="Video" {...a11yProps(2)} />
                <Tab label="Update" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} md={9} xs={6}>
              <Typography gutterBottom variant="p" sx={{ color: "#000000" }}>
                Through all of the ups and downs of serving in Haiti for over 40
                years where the political climate is unpredictable and
                unreliable, Christianville has been able to always say, we are
                HERE TO STAY! You’ve been incredibly generous in your support of
                Christianville and we thank you sincerely!
              </Typography>
              <Typography gutterBottom variant="p" sx={{ color: "#000000" }}>
                We work hard to stretch your donations being good stewards of
                God’s blessings, yet Christianville is not immune to the
                financial impact the current political turmoil is having and we
                are struggling due to circumstances outside of our control:
              </Typography>
              <Typography gutterBottom variant="p" sx={{ color: "#000000" }}>
                Your gifts will make all the difference to our organization and
                in the lives the many people we all love in the Christianville
                community!
              </Typography>
              <Typography gutterBottom variant="p" sx={{ color: "#000000" }}>
                Blessings,
              </Typography>
              <Typography gutterBottom variant="p" sx={{ color: "#000000" }}>
                Board of Directors -- ShareCare
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Audio here!!!
            </TabPanel>
            <TabPanel value={value} index={1}>
              Video here!!!
            </TabPanel>

            <TabPanel value={value} index={2}>
              {post.data.attributes.files.data.map((data) => (
                <Image
                  loader={function myLoader() {
                    return `http://localhost:1337${data.attributes.url}`;
                  }}
                  src={`http://localhost:1337${data.attributes.url}`}
                  width={500}
                  height={500}
                  alt="image here"
                />
              ))}
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};
export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const data2 = await axios.get(
    "http://localhost:1337/api/campaigns?populate=*"
  );

  // Get the paths we want to pre-render based on posts
  const paths = data2.data?.data.map((details) => ({
    params: {
      slug: details.id.toString(),
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return { paths, fallback: "blocking" };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `http://localhost:1337/api/campaigns/${params?.slug}?populate=*`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export default Details;
