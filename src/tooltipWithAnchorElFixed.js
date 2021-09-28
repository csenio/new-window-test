import * as React from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

export default function AnchorElTooltips({portalParent}) {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  })

  const popperRef = React.useRef(null)
  const areaRef = React.useRef(null)

  const handleMouseMove = event => {
    positionRef.current = {x: event.clientX, y: event.clientY}

    if (popperRef.current != null) {
      popperRef.current.update()
    }
  }

  return (
    <Tooltip
      title='Add'
      placement='top'
      arrow
      PopperProps={{
        popperRef,
        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(positionRef.current.x, areaRef.current.getBoundingClientRect().y, 0, 0)
          },
        },
        container: portalParent || document.body,
      }}
    >
      <Box
        ref={areaRef}
        onMouseMove={handleMouseMove}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          p: 2,
        }}
      >
        Hover
      </Box>
    </Tooltip>
  )
}
