import { useState } from 'react'
import Navigation from "./Header/navigation"
import Hero from "./Hero/hero"
import "./assets/all.scss"

function App() {
  return (
    <>
     <div>
      <Navigation/>
      <div className="container">
        <Hero/>
      </div>
     </div>
    </>
  )
}

export default App
