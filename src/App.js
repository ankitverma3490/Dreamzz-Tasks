import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import GetUserData from "./components/GetUserData";
import MissingPage from "./components/MissingPage";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
function App() {
  const [value, setValue] = useState("1"); // Fix: use string values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Registration Form" value="1" />
              <Tab label="User Data" value="2" />
              <Tab label="Pricing" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ backgroundColor: "#e3dbdb" }}>
            <RegistrationForm />
          </TabPanel>
          <TabPanel value="2" style={{ backgroundColor: "#e3dbdb" }}>
            <GetUserData />
          </TabPanel>
          <TabPanel value="3" style={{ backgroundColor: "#e3dbdb" }}>
            <MissingPage />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default App;
