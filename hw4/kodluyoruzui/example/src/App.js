import React from 'react'

import { Button } from 'kodluyoruzui'
import 'kodluyoruzui/dist/index.css'

const App = () => {
  return (
    <>
      <Button text='Default' onClick={() => alert('Default')} />
      <br />
      <br />
      <Button text='Primary' type='primary' onClick={() => alert('Primary')} />
      <br />
      <br />
      <Button type='dashed' text='Dashed' onClick={() => alert('Dashed')} />
      <br />
      <br />
      <Button text='Text' type='text' onClick={() => alert('Text')} />
      <br />
      <br />
      <Button type='link' text='Link' onClick={() => alert('Link')} />
    </>
  )
}

export default App
