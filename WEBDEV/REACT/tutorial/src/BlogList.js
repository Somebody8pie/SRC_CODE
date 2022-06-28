const BlogList = () => {
    return ( 
        <div className="BlogList">
        {blogs.map((blog) => (
            // What to output for each blog
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>by { blog.author }</p>
            </div> 
        ))}
        </div>
     );
}
 
export default BlogList;