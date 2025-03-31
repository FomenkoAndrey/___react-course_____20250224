import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'
import '@ant-design/v5-patch-for-react-19'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)
