import type TReact from 'react'
import type { createRoot as createRootType } from 'react-dom/client'
import { openpix } from '../src/openpix.js'
import { App } from './App.tsx'
import { Button } from './modules/button.tsx'
import { Checkout } from './modules/checkout/index.tsx'

const createRoot: typeof createRootType = window.ReactDOM.createRoot
const React: typeof TReact = window.React

const root = createRoot(document.getElementById('root'))

// load all clickpix  (dont work running here)
// openpix.init()

root.render(
  <>
    {/* <App /> */}
    <Checkout />
    {/* <Button /> */}
  </>
)
