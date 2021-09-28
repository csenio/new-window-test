import * as React from 'react'
import Tooltip from '@mui/material/Tooltip'

export default function BasicTooltip() {
  return (
    <Tooltip title='Delete'>
      <button>🗑️</button>
    </Tooltip>
  )
}
