import React from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';
const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        console.log('Button is clicked');
        fetch('http://localhost:8000/blogs/' + blog.id,
            {
                method: 'DELETE',

            }).then(() => {
                history.push('/home');
            });
    }
    return (
        <div className='blog-details'>
            {isPending && <div>Loading.....</div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>

                    <div className='block'>
                        <div>
                            <div className="blogPageTitle">
                                <h2>{blog.title}</h2>
                            </div>
                            <div className="blogPageauthor">
                                <p>Written By {blog.author}</p>
                            </div>
                        </div>
                        <div>
                            <div className="editButton">
                                <button className="deleteButton" onClick={handleClick}>Delete</button>
                            </div>
                            <div >
                                <button className="updateButton" onClick={handleClick}>Update</button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="blogPagecontent">
                        {blog.body}
                    </div>

                </article>
            )}
        </div>
    )
}

export default BlogDetails
