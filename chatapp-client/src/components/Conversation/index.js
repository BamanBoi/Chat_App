import { faker } from '@faker-js/faker'
import { Avatar, Box, Stack,Badge, Typography, IconButton, Divider, TextField, InputAdornment } from '@mui/material'
import {styled, useTheme} from '@mui/material/styles';
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import Message from './Message';

const Conversation = () => {
    const theme =useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header />
        <Box width={"100%"} sx={{flexGrow:1,height:"100%" ,overflowY:"scroll"}}>
          <Message menu={true}/>
        </Box>
        <Footer/>
    </Stack>
  )
}

export default Conversation
