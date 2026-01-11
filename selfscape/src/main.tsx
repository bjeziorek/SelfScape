import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TagsProvider } from './providers/TagsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TagsProvider>
    <App />
    </TagsProvider>
  </StrictMode>,
)
