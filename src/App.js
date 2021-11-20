import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'

const Main = React.lazy(() => import('./pages/Main'))
const Detail = React.lazy(() => import('./pages/Detail'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Suspense>
  )
}

export default App
