import {useState} from 'react'
import NewWindow from './newWindow'
import Popper from './popper'
import Tooltip from './tooltip'
import Menu from './menu'
import TooltipWithAnchorEl from './tooltipWithAnchorEl'
import TooltipWithAnchorElFixed from './tooltipWithAnchorElFixed'

function NewWindowParent({children}) {
  const [rendered, setRendered] = useState(false)

  function handleClick() {
    setRendered(true)
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>show</button>
      {rendered && (
        <NewWindow onUnload={() => setRendered(false)}>
          🔥 New window content 🔥
          {children}
        </NewWindow>
      )}
    </div>
  )
}

/**
 * Fix for the anchorEl bug:
 * We get the reference to the new window via the newly created `onWindowCreation` prop
 * and then pass that reference to our container so it renders in the correct window
 */
function NewWindowParentEdgeCase() {
  const [rendered, setRendered] = useState(false)
  const [portalParent, setPortalParent] = useState(undefined)

  function handleClick() {
    setRendered(true)
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>show</button>
      {rendered && (
        <NewWindow onWindowCreation={setPortalParent} onUnload={() => setRendered(false)}>
          🔥 New window content 🔥
          <TooltipWithAnchorElFixed portalParent={portalParent?.document?.body} />
        </NewWindow>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <div>
        Popper ✅
        <NewWindowParent>
          <Popper />
        </NewWindowParent>
      </div>
      <div>
        Tooltip ✅
        <NewWindowParent>
          <Tooltip />
        </NewWindowParent>
      </div>
      <div>
        Menu ✅
        <NewWindowParent>
          <Menu />
        </NewWindowParent>
      </div>
      <div>
        TooltipWithAnchorEl ❌
        <NewWindowParent>
          <TooltipWithAnchorEl />
        </NewWindowParent>
      </div>
      <div>
        TooltipWithAnchorElFixed ✅
        <NewWindowParentEdgeCase />
      </div>
    </div>
  )
}
