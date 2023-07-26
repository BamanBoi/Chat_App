import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Stack } from '@mui/material';
import { useTheme} from "@mui/material/styles";
import Sidebar from "./Sidebar";
const isAuthenticated = true;
const DashboardLayout = () => {
  //const theme = useTheme();
  if(!isAuthenticated){
    return <Navigate to="/auth/login"/>
  }
  return (
    <>
      <Stack direction='row' sx={{ height: "100vh", width: "100vw" }}>
        <Sidebar/>
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
