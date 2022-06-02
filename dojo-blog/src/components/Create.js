import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//Adding new comments to check whether git push works well for a particular branch

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mrunmayee');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
//fumction to handle the delete button
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,body,author};
    console.log(blog);
    setIsPending(true);
    const requestOptions = {
      method: 'POST',
      headers : { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }
    fetch('  http://localhost:8000/blogs',requestOptions ).then(() => {
      setIsPending(false);//when the data is successfully updated  
      console.log("New blog add");
      console.log(blog);
    })
    history.push('/home'); //Post request to the JSON Server and add data to it.
  }

  return (
    <div className="create">
      <h1 class="createHead">Create a new blog</h1>
      <form onSubmit={handleSubmit}>
        <label >Blog Title : </label>
        <input text="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Blog Body :</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog Author : </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mrunmayee</option>
          <option value="yoshi">Akanskha</option>
        </select >
        {!isPending && <button className='createButton'>Create</button>}
        {isPending && <button disabled className='createButton'>Creating ...</button>}
      </form>
    </div>
  )
}

export default Create
