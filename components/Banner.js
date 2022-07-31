import React from 'react';
import Image from 'next/image'
import {Card, Typography, Box} from '@mui/material';
import BannerImage from '../public/banner.png';
export default function Banner() {
  return (
    <div>
    <Card
    sx={{
      width: '100%',
      height: 400,
      backgroundColor: '#2E2D33',
      display: 'flex',
      padding: 0,
      }}
  >
      <Card
          sx={{
              width:{
                md: '60%',
                xs: '100%'
              } ,
              height: 400,
              backgroundColor: '#2E2D33',
              padding: 10
              }}
          >
            
        <Box>
        <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.112 22.864C19.112 20.816 19.496 18.512 20.264 15.952C21.032 13.3067 21.8853 10.832 22.824 8.52799C23.848 5.79733 25.0853 3.06667 26.536 0.335999L34.472 1.744C33.5333 4.21866 32.7227 6.60799 32.04 8.91199C31.3573 10.8747 30.76 13.008 30.248 15.312C29.8213 17.5307 29.608 19.536 29.608 21.328V31.568L19.112 32.72V22.864ZM0.424 22.864C0.424 20.816 0.808 18.512 1.576 15.952C2.344 13.3067 3.19733 10.832 4.136 8.52799C5.16 5.79733 6.39733 3.06667 7.848 0.335999L15.784 1.744C14.8453 4.21866 14.0347 6.60799 13.352 8.91199C12.6693 10.8747 12.072 13.008 11.56 15.312C11.1333 17.5307 10.92 19.536 10.92 21.328V31.568L0.424 32.72V22.864Z" fill="#A6B4C1"/>
        </svg>

        </Box>
          <Typography
          gutterBottom
          sx={{

              color: '#FFFFFF',
              fontSize: {
                md: 45,
                xs: 27
              }

            
            }}
      >
          The best way to find yourself is to loose yourself in the service of others.
          </Typography>
          <Typography
          gutterBottom
          variant="h5"
          sx={{
              color: '#A6B4C1',
              fontSize: {
                md: 20,
                xs: 10
              }
            }}
      >
         Mahatma Ghandi
          </Typography>
      </Card>
      <Card
          sx={{
              width: '40%',
              height: 400,
              backgroundColor: '#2E2D33',
              padding: 5,
              marginTop: 0,
              display: {
                xs: 'none',
                md: 'block'
              }
              }}
          >
          <Image src={BannerImage} width={600} height={450} ALIGN="RIGHT"/>
      </Card>
  </Card></div>
  )
}
