import api from "../../api";
import { useRouter } from "next/router";
const BlogItem = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      {router.isFallback && <h1>Carregando...</h1>}
      {id}
      <br />
      {router.pathname}
      <h1>{router.isFallback.toString()}</h1>
      {post.title}
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export const getStaticPaths = async () => {
  const teste = await api.getPosts();

  //lista de paths
  const paths = teste.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return { paths, fallback: false }; //pegar os mais vistos
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const post = await api.getPostId(id);
  return {
    props: {
      post,
    },
  };
};

export default BlogItem;
