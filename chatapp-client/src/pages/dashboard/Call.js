import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from '@mui/material';
import React from 'react'
import { Search, StyledInputBase } from '../../components/search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { SimpleBarStyle } from '../../components/Scrollbar';
import ChatElement from '../../components/ChatElement';
import { CallLogs, ChatList } from '../../data';
import { CallLogElement } from '../../components/CallElement';
import StartCall from '../../sections/main/StartCall';
import { useState } from 'react';

const Call = () => {
    const theme = useTheme();
    const [openDialog,setOpenDialog]= useState(false);
    const handleCloseDialog = () =>{
        setOpenDialog(false);
    };
  return (
    <>
    <Stack>
        {/*Left*/}
        <Box sx={{height:"100vh",backgroundColor:theme.palette.mode ==='light' ? "#F8FAFF" : theme.palette.background,width:320,boxShadow:"0px 0px 2px rgba(0,0,0,0.25)"}}>
        <Stack p={3} spacing={2} sx={{maxHeight:"100vh"}}>
          <Stack>
            <Typography variant='h5'>
                Call Logs
            </Typography>
          </Stack>
          <Stack>
          <Search>
            <MagnifyingGlass color='#709CE6'/>
          <StyledInputBase placeholder='Search...' inputProps={{"aria-label":"search"}}/>
        </Search>
          </Stack>
        
        <Stack direction={'row'} justifyContent="space-between" alignItems={"center"}>
            <Typography variant='subtitle2' component={Link}>
                Start Conversation
            </Typography>
            <IconButton onClick={()=>{
              setOpenDialog(true);
            }}>
                <Plus style={{color: theme.palette.primary.main}}/>
            </IconButton>
        </Stack>
        <Divider />
        <Stack spacing={3} sx={{flexGrow:1,overflowY:"scroll", height:"100%"}}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack>
                    
                   {/*Call Logs */}
                   {CallLogs.map((el) => <CallLogElement {...el}/> )}
                </Stack>
            </SimpleBarStyle>
        </Stack>
        </Stack>
        </Box>
        {/*Right*/}

    </Stack>
    {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}
    </>
  )
}

export default Call