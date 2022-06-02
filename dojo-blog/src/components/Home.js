import { useState,useEffect } from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';

 
const Home = () => {
  /*{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }])
  This data is necesaary for bloglist 
const handleDelete=(id)=>{
  const newBlogs = blogs.filter((blog=>blog.id!== id));
  setBlogs(newBlogs);
}*/
const { data : blogs,isPending,error} =useFetch('http://localhost:8000/blogs');
  return (
    <div className="Home">
      {error && <div> {error} </div>}
      {isPending && <div className="loading">Loading.....</div>}
      {blogs && <Bloglist blogs={blogs}  />}
      {/* <Bloglist blogs={blogs} title_given = "All Blogs"></Bloglist>
      <Bloglist blogs={blogs.filter((blog)=>blog.author==="mario")} title_given = "Mario's Blog" handleDelete={handleDelete}></Bloglist> */}
      {/* Here we have used props where blog is actually a property.Home -->Parent  BlogList --> child 
      blog , title are properties */}
    </div>
  );
}

export default Home
