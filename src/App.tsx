import "./App.css"
import {useState} from "react"
import AppContainer from "./components/AppContainer"
import Header from "./components/Header"

function App() {
  const [percentage, setPercentage] = useState(100)
  const [position, setPosition] = useState<{x: number; y: number}>({x: 0, y: 0})

  const handleCenterButtonClick = () => {
    setPosition({x: 0, y: 0})
  }

  return (
    <>
      <Header
        percentage={percentage}
        setPercentage={setPercentage}
        handleCenterButtonClick={handleCenterButtonClick}
      />
      <AppContainer
        percentage={percentage}
        position={position}
        setPosition={setPosition}
      />
    </>
  )
}

export default App
