import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/search';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallElement';
import { MembersList } from '../../data';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const StartCall = ({open,handleClose}) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{p:4}} onClose={handleClose}>
        {/* */}
        <DialogTitle sx={{mb:3}}>Start Call</DialogTitle>
        {/* */}
        <DialogContent>
            {/*Form */}
            <Stack spacing={3}>
            <Stack sx={{width:"100%"}}>
            <Search>
            <MagnifyingGlass color='#709CE6'/>
          <StyledInputBase placeholder='Search...' inputProps={{"aria-label":"search"}}/>
        
        </Search>
            </Stack>
            </Stack>
        {/*Call List*/}
        {MembersList.map((el)=> <CallElement {...el}/>)}
    </DialogContent>
    </Dialog>
  );
};

export default StartCall
