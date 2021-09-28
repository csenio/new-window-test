import {useState} from 'react'
import NewWindow from './newWindow'
import Popper from './popper'
import Tooltip from './tooltip'
import Menu from './menu'

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
    </div>
  )
}
