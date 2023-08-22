import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
const HomePage = lazy(() => import('./pages/app/HomePage'))

function App() {
  return (
    <>
      {/* <h3>Hello World</h3> */}
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
