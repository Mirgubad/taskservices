import Button from "../Button"
import ServiceCategory from "../ServiceCategory"
import SubCategory from "../SubCategory"
import styles from "./modal.module.css"

interface ModelProps {
    setCreateSubCategory: React.Dispatch<React.SetStateAction<string>>
    setSubCategories: React.Dispatch<React.SetStateAction<JSX.Element[]>>
    setServiceCategories: React.Dispatch<React.SetStateAction<JSX.Element[]>>
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModelProps> = ({
    setCreateSubCategory,
    setSubCategories,
    setServiceCategories,
    setShowModal,
}) => {
    return (
        <dialog open className={styles.modal}>
            <h4 className={styles.title}>What do you want to create?</h4>
            <div className={styles.action__buttons}>
                <Button
                    onClick={() => {
                        setCreateSubCategory("category")
                        setSubCategories((prevCategories) => [
                            ...prevCategories,
                            <SubCategory key={prevCategories.length} />,
                        ])
                        setShowModal(false)
                    }}
                >
                    Category
                </Button>
                <Button
                    onClick={() => {
                        setCreateSubCategory("service")
                        setServiceCategories((prevCategories) => [
                            ...prevCategories,
                            <ServiceCategory key={prevCategories.length} />,
                        ])
                        setShowModal(false)
                    }}
                >
                    Service
                </Button>
            </div>
        </dialog>
    )
}

export default Modal
