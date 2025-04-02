import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import { StoreProvider } from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
