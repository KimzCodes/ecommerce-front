import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const { category, categoryImg, categoryTitle, categoryLink } = styles;

const Category = ({ title, prefix, img }) => {
  return (
    <Link to={`${prefix}/products`} className={categoryLink}>
      <div className={category}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </div>
    </Link>
  );
};

export default Category;
