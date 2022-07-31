import React, {useState, useEffect} from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import {AppBar} from '@mui/material';
import FRBanner from '../../components/FRBanner';
import FundRaiseDonate from '../../components/FundRaiseDonate';
import DonationTabs from '../../components/DonationTabs';  



const Details = ({post}) => {
console.log('gDFDSHVB', post)
  return (
    <AppBar position="static" sx={{ bgcolor: "#36c958" }}>
        <Box sx={{bgcolor: '#ffffff'}}>
        <FRBanner />
        <Box
        sx={{
            width: '100%',
            height: 'auto',
            backgroundColor: '#ffffff',
            display: 'flex',
            border: 'none'
        }}
        >
        <Typography
        gutterBottom
        variant="h1"
        sx={{
            color: '#000000',
            width: 'auto',
            fontSize: {
              md: 25,
              xs: 20
            },
            ml:2 ,
            mt:2,
            justifyContent: 'flex-end',
            fontWeight: 'bold'
          }}
        >
    {post.name}
        </Typography>
        </Box>
        <Box sx={{backgroundColor: '#ffffff'}}>
            <FundRaiseDonate post={post}/>
            <DonationTabs />
        </Box>
        </Box>
    </AppBar> 
  )
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:4000/campaigns/')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: {
            slug: post._id ,
        }
     
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
  
    return { paths, fallback: 'blocking' }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {

    
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:4000/campaigns/${params?.slug}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
  }

  
export default Details;