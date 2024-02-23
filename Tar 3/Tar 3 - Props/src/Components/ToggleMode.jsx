import React, { useState } from 'react'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@emotion/react';

export default function ToggleMode({ setMode }) {

  return (
    <ToggleButtonGroup
      // value={mode}
      exclusive
      onChange={(e, val) => setMode(val)}
      aria-label="color mode"
      sx={{ position: 'fixed', top: 10, right: '10vw' }}
    >
      <ToggleButton value="dark" aria-label="dark mode">
        <DarkModeIcon />
      </ToggleButton>
      <ToggleButton value="light" aria-label="light mode">
        <LightModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
