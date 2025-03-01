import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4'
import Ex5 from './components/Ex5'
import Ex6 from './components/Ex6'
import Ex7 from './components/Ex7'
import Ex8 from './components/Ex8'
import Ex9 from './components/Ex9'
import Ex10 from './components/Ex10'

const Dynamic = () => {
  const { filename } = useParams()
  try {
    const Component = lazy(() => import(/* @vite-ignore */`./components/${filename[0].toUpperCase()}${filename.slice(1).toLowerCase()}`))
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <Component />
      </Suspense>
    )
  }
  catch (error) {
    return <p>Component not found</p>
  }
}

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/:filename" element={<Dynamic />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      {/* <Ex1 /> */}
      {/* <Ex2 /> */}
      {/* <Ex3 /> */}
      {/* <Ex4 /> */}
      {/* <Ex5 /> */}
      {/* <Ex6 /> */}
      {/* <Ex7 /> */}
      {/* <Ex8 /> */}
      {/* <Ex9 /> */}
      {/* <Ex10 /> */}
    </div>
  )
}

export default App