import React from 'react'
import { Link } from 'react-router-dom'
/*
The Home is the parent of Bloglist 
Pass props as parameter
*/

const Bloglist = ({ blogs }) => {
    // const blogs = props.blogs;
    //  const title = props.title_given;
    // const handleDelete = props.handleDelete;
    //Syntax - props.NAME_OF_PROPERTY declared in parent -->accessing the property  
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <div className="text">
                        <Link to={`/blogs/${blog.id}`}>
                            <div>
                                <h2>{blog.title}</h2>
                            </div>
                            <div>
                                <p>Written By {blog.author}</p>
                            </div>
                        </Link>

                    </div>
                    {/* <div className="delete">
                        <button className="handleDelete" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div> */}

                </div>
            )
            )}
        </div>
    )
}

export default Bloglist
