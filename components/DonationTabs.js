import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '70%', backgroundColor: '#ffffff' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Audio" {...a11yProps(1)} />
          <Tab label="Video" {...a11yProps(2)} />
          <Tab label="Update" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} md={9} xs={6}>     
            <Typography gutterBottom variant="p"  sx={{color: '#000000'}}>
            Through all of the ups and downs of serving in Haiti for over 40 years where the political
            climate is unpredictable and unreliable, 
            Christianville has been able to always say, we are HERE TO STAY!  
            You’ve been incredibly generous in your support of Christianville and we thank you sincerely!  
            </Typography>    
            <Typography gutterBottom variant="p"  sx={{color: '#000000'}}>
            We work hard to stretch your donations being good stewards of God’s blessings, yet Christianville is not immune to the financial impact the 
            current political turmoil is having and we are struggling due to circumstances outside of our control:  
            </Typography>     
            <Typography gutterBottom variant="p"  sx={{color: '#000000'}}>
            Your gifts will make all the difference to our organization and in the lives 
            the many people we all love in the Christianville community!
            </Typography>    
            <Typography gutterBottom variant="p"  sx={{color: '#000000'}}>
            Blessings,
            </Typography>    
            <Typography gutterBottom variant="p"  sx={{color: '#000000'}}>
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
        Pictures!!
      </TabPanel>
    </Box>
  );
}
