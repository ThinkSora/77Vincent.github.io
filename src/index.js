import React from 'react'
import ReactDOM from 'react-dom'
import App from './base/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
