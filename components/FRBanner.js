import React from 'react';
import Image from 'next/image';
import {Card, Typography, Box} from '@mui/material';
import KindnessImage from '../public/banner1.png';
export default function FRBanner() {
  return (
    <div>
      <Card
          sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#ffffff',
              mt: 2,
              display: {
                xs: 'flex',
                md: 'block'
              },
              borderRadius: 'none',
              boxShadow: 'none'
              }}
          >
          <Image src={KindnessImage} width={1700} height={400}/>
      </Card>
  </div>
  )
}
