import * as React from 'react';

import { Paper, Backdrop, Modal, Fade } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 'fit-content',
  // width: '90vw',
  boxShadow: 24,
  height: '90vh',
  overflowY: 'scroll'
};

export default function UpdateModal({ text, toggle }) {

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
          <Paper elevation={6} sx={{ ...style }}>
            {text}
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}