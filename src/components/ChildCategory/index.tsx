import React, { useState } from "react"
import styles from "./child-category.module.css"
import SubCategory from "../SubCategory"
import Modal from "../Modal"
import ServiceCategory from "../ServiceCategory"

interface ChildCategoryProps {
    childCategories: any[]
    setChildCategories: React.Dispatch<React.SetStateAction<any[]>>
}

const ChildCategory: React.FC<ChildCategoryProps> = ({
    childCategories,
    setChildCategories,
}) => {
    const [_value, setValue] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [subCategories, setSubCategories] = useState<JSX.Element[]>([])
    const [serviceCategories, setServiceCategories] = useState<JSX.Element[]>([])
    const [showModal, setShowModal] = useState(false)
    const [createSubCategory, setCreateSubCategory] = useState("")

    const handleDelete = (key: number) => {
        setChildCategories(() =>
            childCategories?.filter((category) => category.key !== key)
        )
    }

    const addChildCategory = () => {
        if (createSubCategory === "category") {
            setSubCategories((prevCategories) => [
                ...prevCategories,
                <SubCategory
                    key={prevCategories.length}
                />,
            ])
        } else {
            setServiceCategories((prevCategories) => [
                ...prevCategories,
                <ServiceCategory key={prevCategories.length} />,
            ])
        }
    }


    return (
        <div className={styles.child__category}>
            <div
                style={{ marginBottom: subCategories.length > 1 || serviceCategories.length > 1 ? "4rem" : "2rem" }}
                className={`${styles["child__category--item"]} ${subCategories.length > 0 || serviceCategories.length > 0 ? styles.active : ""
                    }`}
            >
                <input
                    disabled={disabled}
                    placeholder="Category"
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                />
                {disabled ? (
                    <div className={styles.action__buttons}>
                        <div
                            onClick={() => {
                                subCategories.length < 1 && serviceCategories.length < 1
                                    ? setShowModal(true)
                                    : addChildCategory()
                            }}
                            className={styles.addBtn}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15px"
                                height="15px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M4 12H20M12 4V20"
                                    stroke="#FFF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div onClick={() => setDisabled(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15px"
                                height="15px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z"
                                    fill="#FFF"
                                />
                                <path
                                    d="M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z"
                                    fill="#FFF"
                                />
                            </svg>
                        </div>
                        <div onClick={() => handleDelete(0)} className={styles.delete}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15px"
                                height="15px"
                                viewBox="0 0 24 24"
                                version="1.1"
                            >
                                <title>Close</title>
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g id="Close">
                                        <rect
                                            id="Rectangle"
                                            fillRule="nonzero"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        ></rect>
                                        <line
                                            x1="16.9999"
                                            y1="7"
                                            x2="7.00001"
                                            y2="16.9999"
                                            id="Path"
                                            stroke="#FFF"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="7.00006"
                                            y1="7"
                                            x2="17"
                                            y2="16.9999"
                                            id="Path"
                                            stroke="#FFF"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></line>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div className={styles.action__buttons}>
                        <div style={{ backgroundColor: "#f7db14" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15px"
                                height="15px"
                                viewBox="0 0 24 24"
                                version="1.1"
                            >
                                <title>Close</title>
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g id="Close">
                                        <rect
                                            id="Rectangle"
                                            fillRule="nonzero"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        ></rect>
                                        <line
                                            x1="16.9999"
                                            y1="7"
                                            x2="7.00001"
                                            y2="16.9999"
                                            id="Path"
                                            stroke="#FFF"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="7.00006"
                                            y1="7"
                                            x2="17"
                                            y2="16.9999"
                                            id="Path"
                                            stroke="#FFF"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></line>
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <div
                            onClick={() => setDisabled(true)}
                            style={{ background: "green" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15px"
                                height="15px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z"
                                    fill="#FFF"
                                />
                            </svg>
                        </div>
                    </div>
                )}
                {showModal && subCategories.length < 1 && (
                    <div className={styles.modal__wrapper}>
                        <Modal
                            setShowModal={setShowModal}
                            setServiceCategories={setServiceCategories}
                            setSubCategories={setSubCategories}
                            setCreateSubCategory={setCreateSubCategory}
                        />
                    </div>
                )}
            </div>
            {subCategories && (
                <div className={styles.sub__categories}>{subCategories}</div>
            )}
            {serviceCategories && (
                <div className={styles.sub__categories}>{serviceCategories}</div>
            )}
        </div>
    )
}

export default ChildCategory
