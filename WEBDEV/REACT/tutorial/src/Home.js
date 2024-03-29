import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "I'm learning React.js!", body: "Yes I am starting to learn React.js", author: 'Somebody8pie', id: 0 },
    { title: "I got a great Discord server!", body: `Join it https://discord.gg/xdWK2rkPMr`, author: 'Somebody8banana', id: 1 },
    { title: "I really like Pie", body: "Hi, I'm Somebody8pie and I really like Pie especially pumpkin pie!", author: 'Somebody8pie', id: 2 },

  ]);
  // Takes in the id of the blog were the delete button was clicked
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); // filters out the array and makes a new one without that blog
    setBlogs(newBlogs); // and sets it to the new list of blogs without that one
  }

  return (
    <div className="home">
      <BlogList  blogs={blogs} title="All Blogs"  handleDelete={handleDelete}/>
      {/*   this anonyms function returns true if author pie |*/}
      <BlogList  blogs={blogs.filter((blog) => blog.author === 'Somebody8pie')} title="Pie's Blogs" handleDelete={handleDelete}/>  
    </div>
  );
}
 
export default Home; 

// Good Code
// ----------------------------------------------------------------
//
// // let name = 'mario';
// const [name, setName] = useState('Pie');
// const [taste, setTaste] = useState('Good');
// const handleClick = () => {
//   // name = 'luigi';
//   if(name === 'Pie')
//   {
//       setName('Banana');
//   } else if(name === 'Banana') setName('Pie');
// }
// const handleClickTaste = (ud) => {

//   if(!ud) setTaste('Bad');
//   else if(ud) setTaste('Good');
// }


// return (
//   <div className="home">
//     <h2>Homepage</h2>
//     <p>{ name } tastes { taste }</p>
//     <button onClick={handleClick} className="rate">Food</button>
//     <button onClick={() => {
//       handleClickTaste(true);
//     }} className="rate">👍</button>
//     <button onClick={() => {
//       handleClickTaste(false);
//     }} className="rate">👎</button>
//   </div>