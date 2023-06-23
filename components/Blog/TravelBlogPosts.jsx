import BlogCard from "@components/Cards/BlogCard";
import { getSortedPostsData } from "@utils/travelblogpost";


const TravelBlogPosts = () => {
  const posts = getSortedPostsData();

  return (
    <div>
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

export default TravelBlogPosts