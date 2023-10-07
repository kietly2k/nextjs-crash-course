import articalStyles from "../styles/ArticleList.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={articalStyles.grid}>
      {articles.map((a) => (
          <ArticleItem key={a.id} article={a} />
      ))}
    </div>
  );
};

export default ArticleList;
