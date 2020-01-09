import React from 'react'
import { render } from 'react-dom'
import 'turretcss/dist/turretcss.min.css'

render(
  <div>
    <h1>Hello</h1>
    <p>This was auto-deployed with AWS Amplify.</p>
  </div>,
  document.getElementById('app')
)
