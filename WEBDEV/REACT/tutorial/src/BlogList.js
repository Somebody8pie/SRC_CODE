import { CgTrash } from 'react-icons/cg'
const BlogList = ({ blogs, title, handleDelete}) => {
    return ( 
        <div className="BlogList">
            <h1 className="blog-list-title">{ title }</h1>
            {blogs.map((blog) => (
            // What to output for each blog
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>by { blog.author }</p>
                    <button className="delete-blog" onClick={() => handleDelete(blog.id)}><CgTrash className="trash-icon"/></button>
                </div> 
            ))}
        </div>
     );
}
 
export default BlogList;