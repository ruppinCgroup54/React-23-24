import * as React from 'react';

import { Box, Typography, Backdrop, Slide, Modal } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const style = {
  position: 'relative',
  top: 20,
  left: '10vw',
  width: '80vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  '& svg': {
    fontSize: 80
  },
  '& p': {
    fontSize: 30
  }
};

export default function AlertModal({ toggle, text, isGood }) {

  // pop-up modal for alerts
  return (
    <div>
      <Modal
        open={toggle.openModal}
        onClose={() => toggle.setOpenModal(false)}//היה צריך לשים פונקציה ולא להפעיל את הsetopen
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Slide in={toggle.openModal} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}  >
          <Box sx={style}>


            {isGood ? <CheckCircleOutlineIcon color='primary'></CheckCircleOutlineIcon> :
              <CancelOutlinedIcon color='error'></CancelOutlinedIcon>
            }
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

              {text}
            </Typography>

          </Box>
        </Slide>

      </Modal>
    </div>
  );
}