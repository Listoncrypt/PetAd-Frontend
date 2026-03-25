import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Import the Router
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
})

async function bootstrap() {
  // Enable MSW mock API in development when VITE_MSW=true.
  // The dynamic import keeps the MSW worker out of the production bundle.
  if (import.meta.env.VITE_MSW === 'true') {
    const { worker } = await import('./mocks/browser')
    await worker.start({ onUnhandledRequest: 'warn' })
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter> {/* 2. Wrap your App */}
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>,
  )
}

bootstrap()