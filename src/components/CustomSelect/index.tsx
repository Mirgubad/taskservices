import { useState } from "react"
import styles from "./custom-select.module.css"

interface CustomSelectProps {
    selectValues: { value: number }[]
    percentage: number
    setPercentage: React.Dispatch<React.SetStateAction<number>>
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    selectValues,
    percentage,
    setPercentage,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div onClick={() => setIsOpen(!isOpen)} className={styles.select}>
            {percentage}%
            <div
                style={{ display: isOpen ? "block" : "none" }}
                className={styles.options}
            >
                {selectValues.map((item, index) => (
                    <div
                        key={index}
                        className={styles.option}
                        onClick={() => setPercentage(item.value)}
                    >
                        {item.value}%
                        {
                            percentage === item.value && (<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z"
                                    fill="#0F1729"
                                />
                            </svg>)
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomSelect
