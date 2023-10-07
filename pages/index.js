import ArticleList from "@/components/ArticleList";
import { server } from "../config/index";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

// If you export a function called getStaticProps (Static Site Generation) from a page,
// Next.js will pre-render this page at build time using the props returned by getStaticProps
export async function getStaticProps() {
  // Get data from external api
  //const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')

  // Get data from local api (must provide absolute URL)
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();
  return { props: { articles } };
}
