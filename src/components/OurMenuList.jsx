import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const themeIndicator = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#fa5142",
          padding: "2px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#292A2E",
          font: "inherit",
          "&.Mui-selected": {
            color: "#fa5142",
          },
        },
      },
    },
  },
});

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={themeIndicator}>
      <Box
        sx={{ bgcolor: "background.paper", maxWidth: 1300 }}
        margin="auto"
        alignItems="center"
      >
        <AppBar
          style={{
            padding: "10px",
            backgroundColor: "#F0F0F0",
            color: "black",
          }}
          position="static"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="full width tabs example"
            style={{ fontSize: "18px", gap: "10px", fontFamily: "Oswald" }}
            centered
          >
            <Tab label="APPETIZERS" {...a11yProps(0)} />
            <Tab label="BURGERS (Beef Patty)" {...a11yProps(1)} />
            <Tab label="SPECIALS" {...a11yProps(2)} />
            <Tab label="RICE MEALS" {...a11yProps(3)} />
            <Tab label="PANSIT" {...a11yProps(4)} />
            <Tab label="SALAD" {...a11yProps(5)} />
            <Tab label="DRINKS" {...a11yProps(6)} />
            <Tab label="FRESH FRUIT SHAKE (Seasonal)" {...a11yProps(7)} />
            <Tab label="LIQOUR" {...a11yProps(8)} />
            <Tab label="ADDS-ON" {...a11yProps(9)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6} dir={theme.direction}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={7} dir={theme.direction}>
            Item Eight
          </TabPanel>
          <TabPanel value={value} index={8} dir={theme.direction}>
            Item Nine
          </TabPanel>
          <TabPanel value={value} index={9} dir={theme.direction}>
            Item Ten
          </TabPanel>
        </SwipeableViews>
      </Box>
    </ThemeProvider>
  );
}
