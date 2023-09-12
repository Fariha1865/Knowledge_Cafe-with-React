import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
const Blogs = ({addToBookmarkList,addToTotalTimeList}) => {

    const [blogs,setBlogs] = useState([]);
   
    useEffect(()=>{

           fetch('Blogs.json')
           .then(res=>res.json())
           .then(data=>setBlogs(data));
    },[])
    return (
        <div className="w-[60%]">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7">
            {
                blogs.map((item,index)=><Blog key={index} blog={item} addToBookmarkList={addToBookmarkList} addToTotalTimeList={addToTotalTimeList}></Blog>)
            }
            </div>

        </div>
    );
};

export default Blogs;