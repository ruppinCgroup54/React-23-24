import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  boxShadow: 24,
  p: 1,
  textAlign: 'center'
};

export default function TransitionsModal({ text, toggle }) {



  return (
    <div >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={toggle.openModal}
        onClose={() => toggle.setOpenModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={toggle.openModal}>
          <Paper elevation={6} sx={style}>
            <Typography component='h2' color='red' variant='h6' id="transition-modal-title" sx={{ mt: 1 }}>
              Error !
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {text}
            </Typography>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}