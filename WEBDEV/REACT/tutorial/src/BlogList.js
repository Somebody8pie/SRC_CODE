const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    console.log(props,blogs)

    return ( 
        <div className="BlogList">
            <h1>{ title }</h1>
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