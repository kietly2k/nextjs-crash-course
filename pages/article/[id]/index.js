import Link from "next/link";
import { server } from "@/config";
import Meta from "@/components/Meta";
// import { useRouter } from "next/router";

const article = ({ article }) => {
  // Get all parameters in the route
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export default article;

// Next.js will pre-render this page on each request using the data returned by getServerSideProps
// context is context of the request
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https:jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// Without getStaticProps, getStaticPaths does nothing
export const getStaticProps = async (context) => {
  // const res = await fetch(
  //   `https:jsonplaceholder.typicode.com/posts/${context.params.id}`
  // );
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  // Get all posts then render route (paths)
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((a) => a.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};
