import React from 'react';
import {Grid, Typography, Box, Button} from '@mui/material/';
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function FundRaiseDonate({post}) {
    const [value, setValue] = React.useState(0);
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
  return (
    <div>
        <Grid container sx={{ width: 'auto', backgroundColor: '#fffff', p: 2, alignItems: 'center'}}>
            <Grid item md={3} xs={12}>
                <BorderLinearProgress variant="determinate" value={30} sx={{width: 300, height: 30}}/>
                
            </Grid>
            <Grid item md={3} xs={6}>
              <Box sx={{ "*": { my: 1 }, my: 2}}>        
                <Typography gutterBottom variant="h5" component="div" sx={{color: '#000000'}}>
                  Raised: $36,065.03   
                </Typography>  
              </Box>
            </Grid>
            <Grid item md={3} xs={6}>
              <Box sx={{ "*": { my: 1 }, my: 2}}>        
                <Typography gutterBottom variant="h5" component="div" sx={{color: '#000000'}}>
                  Goal: Shs. {post.amount} 
                </Typography> 
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box sx={{ "*": { my: 1 }, my: 2 }}>
                  <Button variant="outlined" 
                    sx={{
                        boxShadow: 'none',
                        textTransform: 'none',
                        fontSize: 20,
                        padding: '6px 12px',
                        border: '1px solid',
                        lineHeight: 1.5,
                        backgroundColor: '#36C958',
                        borderColor: '#2E2D33',
                        '&:hover': {
                            backgroundColor: '#000000',
                            borderColor: '#0062cc',
                            boxShadow: 'none'
                        },
                        m: 2,
                        justifyContent: 'flex-center',
                        alignitems: 'center'
                    }}
                    >
                    Donate Now
                    </Button>
              </Box>
            </Grid>
    </Grid>
    </div>
  )
}
