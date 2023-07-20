import styles from "./styles.module.css";

const { category, categoryImg, categoryTitle } = styles;

const Category = ({ id, title, img }) => {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img src={img} alt="" />
      </div>
      <h4 className={categoryTitle}>{title}</h4>
    </div>
  );
};

export default Category;
