import { createRoot } from 'react-dom/client'
import { store } from './core/redux/store'
import { Provider } from 'react-redux'
import App from './model/app/app'
import './scss/main/index.scss'

createRoot(document.getElementById('root')).render(<Provider store={store}><App/></Provider>)
