import React, { MouseEvent, useState } from "react"
import ArrowButton from "../ArrowButton"
import Category from "../Category"
import styles from "./app-container.module.css"

interface AppContainerProps {
  percentage: number
  position: { x: number; y: number }
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
}

const AppContainer: React.FC<AppContainerProps> = ({
  percentage,
  position,
  setPosition,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const [childCategories, setChildCategories] = useState<JSX.Element[]>([])

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - dragStart.x
    const deltaY = e.clientY - dragStart.y
    setPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }))
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  const scaleValue = percentage / 100

  const containerStyle: React.CSSProperties = {
    transform: `scale(${scaleValue}) translate(${position.x}px, ${position.y}px)`,
    transformOrigin: "top left",
    minHeight: "88vh",
    paddingTop: "10vh",
  }

  return (
    <section className={styles.app__container} onMouseLeave={handleMouseLeave}>
      <div className={styles.button__up}>
        <ArrowButton />
      </div>
      <div className={styles.button__down}>
        <ArrowButton />
      </div>
      <div className={styles.button__left}>
        <ArrowButton />
      </div>
      <div className={styles.button__right}>
        <ArrowButton />
      </div>
      <div
        className={styles.swipeContainer}
        style={containerStyle}
        onMouseDownCapture={handleMouseDown}
        onMouseMoveCapture={handleMouseMove}
        onMouseUpCapture={handleMouseUp}
      >
        <Category
          childCategories={childCategories}
          setChildCategories={setChildCategories}
        />
      </div>
    </section>
  )
}

export default AppContainer
