import React from "react"
import Button from "../Button"
import CustomSelect from "../CustomSelect"
import styles from "./navigations.module.css"

interface NavigationsProps {
    percentage: number
    setPercentage: React.Dispatch<React.SetStateAction<number>>
    handleCenterButtonClick: () => void
}

const Navigations: React.FC<NavigationsProps> = ({
    percentage,
    setPercentage,
    handleCenterButtonClick,
}) => {
    const selectValues = [
        { id: 1, value: 25 },
        { id: 2, value: 30 },
        { id: 3, value: 40 },
        { id: 4, value: 50 },
        { id: 5, value: 60 },
        { id: 6, value: 70 },
        { id: 7, value: 80 },
        { id: 8, value: 90 },
        { id: 9, value: 100 },
        { id: 10, value: 125 },
        { id: 11, value: 150 },
    ]

    const handleIncrease = () => {
        const currentIndex = selectValues.findIndex(
            (option) => option.value === percentage
        )
        const nextIndex = Math.min(currentIndex + 1, selectValues.length - 1)
        setPercentage(selectValues[nextIndex].value)
    }

    const handleDecrease = () => {
        const currentIndex = selectValues.findIndex(
            (option) => option.value === percentage
        )
        const prevIndex = Math.max(currentIndex - 1, 0)
        setPercentage(selectValues[prevIndex].value)
    }

    return (
        <div className={styles.navigations}>
            <div className={styles.navigations__left}>
                <Button>List View</Button>
                <Button onClick={() => handleCenterButtonClick()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gray"
                        width="20px"
                        height="20px"
                        viewBox="-2 -2 24 24"
                        preserveAspectRatio="xMinYMin"
                        className="jam jam-gps-f"
                    >
                        <path d="M18.919 2.635l-5.953 16.08c-.376 1.016-1.459 1.538-2.418 1.165a1.851 1.851 0 0 1-1.045-1.054l-1.887-4.77a3.712 3.712 0 0 0-1.955-2.052l-4.542-1.981C.174 9.61-.256 8.465.157 7.465a1.97 1.97 0 0 1 1.067-1.079L16.54.136c.967-.395 2.04.101 2.395 1.109.157.446.151.94-.015 1.39z" />
                    </svg>
                </Button>
            </div>
            <div className={styles.navigations__right}>
                <Button onClick={handleDecrease}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M6 12L18 12"
                            stroke="gray"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>
                <CustomSelect
                    selectValues={selectValues}
                    setPercentage={setPercentage}
                    percentage={percentage}
                />
                <Button onClick={handleIncrease}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M4 12H20M12 4V20"
                            stroke="gray"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export default Navigations
