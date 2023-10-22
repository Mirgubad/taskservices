import React from "react"
import Navigations from "../Navigations"
import Services from "../Services"
import "./header.css"

interface HeaderProps {
  percentage: number
  setPercentage: React.Dispatch<React.SetStateAction<number>>
  handleCenterButtonClick: () => void
}

const Header: React.FC<HeaderProps> = ({
  percentage,
  setPercentage,
  handleCenterButtonClick,
}) => {
  return (
    <header className="header">
      <Services />
      <Navigations
        handleCenterButtonClick={handleCenterButtonClick}
        percentage={percentage}
        setPercentage={setPercentage}
      />
    </header>
  )
}

export default Header
