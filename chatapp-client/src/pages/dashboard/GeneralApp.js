import React from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme} from "@mui/material";
import Conversation from '../../components/Conversation/index'
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import StarredMessages from "../../components/StarredMessages";
const GeneralApp = () => {
const theme = useTheme();
const {sidebar}=useSelector((store)=>store.app);
  return (
    <>
    <Stack direction={"row"} sx={{width:"100%"}}>
    <Chats />
    <Box sx={{height:"100%",width:sidebar.open ? "calc(800px)":"calc(1120px)",backgroundColor:theme.palette.mode === "light" ? "#F0F4FA" :theme.palette.background.default,}}>
      <Conversation />
    </Box>
    {sidebar.open && (()=>{
      switch (sidebar.type) {
        case "CONTACT":
          return <Contact/>;
        case "SHARED":
          return <SharedMessage/>;
        case "STARRED":
          return <StarredMessages/>;
      }
    })()}
    </Stack>
    </>
  );
};

export default GeneralApp;
