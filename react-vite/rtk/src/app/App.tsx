import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import '@mantine/core/styles.css'

import './styles/index.css'

function App() {
  return (

    <Suspense fallback="">
      <Header />
      <main className="content-page">
        <AppRouter />
      </main>
      <Footer />
    </Suspense>

  )
}

export default App
