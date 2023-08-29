import BlogCard from "@components/Cards/BlogCard";
import { getSortedPostsData } from "@utils/devblogpost";


const DevBlogPosts = () => {
  const posts = getSortedPostsData();

  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {posts.map(post => (
        <BlogCard 
          key={post.id}
          title={post.title}
          createdDate={post.date}
          author={post.author}
          coverImage={post.image}
          summary={post.summary}
          button={post.id}
        />
      ))}
    </div>
  )
}

export default DevBlogPosts