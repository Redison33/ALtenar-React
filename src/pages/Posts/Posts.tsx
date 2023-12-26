import PostsHeader from '../../components/PostsHeader/PostsHeader';
import { Container, GridTitle, PostsGrid, PostsGridTitle } from './PostsStyle';
import Post from '../../components/Post/Post';
import { useEffect } from 'react';
import { usePosts } from '../../state/storePosts';
export interface initPost {
  descriptor: string;
  title: string;
  description: string;
  file: string;
  color: string;
  theme: boolean;
  linkName: string;
  link: string;
  time: string;
  id: number;
  success: boolean;
}
function Posts() {
  const state = usePosts();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        const data = await response.json();
        state.setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);
  return (
    <>
      <PostsHeader />
      <main>
        <section>
          <Container>
            <PostsGridTitle>
              <GridTitle>Пост</GridTitle>
              <GridTitle>Опубликовано</GridTitle>
              <GridTitle>Ссылка</GridTitle>
            </PostsGridTitle>
            <PostsGrid>
              {state.posts.map((post: initPost) => (
                <Post key={post.id} {...post} />
              ))}
            </PostsGrid>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Posts;
