import React from "react"
import ChildCategory from "../ChildCategory"
import styles from "./category.module.css"

interface CategoryProps {
  setChildCategories: React.Dispatch<React.SetStateAction<JSX.Element[]>>
  childCategories: JSX.Element[]
}

const Category: React.FC<CategoryProps> = ({
  setChildCategories,
  childCategories,
}) => {
  const handleAddChildCategory = () => {
    setChildCategories((prevCategories) => [
      ...prevCategories,
      <ChildCategory
        childCategories={childCategories}
        setChildCategories={setChildCategories}
        key={prevCategories.length}
      />,
    ])
  }

  return (
    <div className={`${styles.category} `}>
      <p
        className={`${styles.title} ${childCategories.length > 0 ? styles.active : ""
          }`}
      >
        Categories
        <span onClick={handleAddChildCategory} className={styles.addBtn}>
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
        </span>
      </p>

      <div
        style={{ marginTop: childCategories.length > 1 ? "2rem" : "0" }}
        className={styles.child__categories}
      >
        {childCategories}
      </div>
    </div>
  )
}

export default Category
