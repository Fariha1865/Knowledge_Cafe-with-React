import './App.css'
import Navbar from './components/navbar/navbar'

import Blogs from './components/blogs/blogs'
import Bookmark from './components/bookmarks/Bookmarks'
import ReadingTime from './components/readingTime/ReadingTime'
import { useEffect, useState } from 'react'
import { addItemToStorage } from './Storage'




function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [timeSum,setTimeSum] = useState(()=>{

 
    if (JSON.parse(localStorage.getItem('Time'))) {
      return JSON.parse(localStorage.getItem('Time'));
      
    } else {
      return 0;
    }
  });

  
  function addToBookmarkList(blog) {

    addItemToStorage(blog);
    const newBookMarks = JSON.parse(localStorage.getItem('bookMarks'))
    if (newBookMarks) {
      setBookmarks(newBookMarks);
    }
  }


  function addToTotalTimeList(time,blog) {

    
   
      setTimeSum(timeSum+time)
      //  let removedBookmark = [...bookmarks];
      //  removedBookmark = removedBookmark.filter(item=>item != blog);
      //  setBookmarks(removedBookmark)
      //  localStorage.setItem('bookMarks',JSON.stringify(removedBookmark))
      
  }

  useEffect(()=>{

    localStorage.setItem('Time', timeSum);
  },[timeSum])
  return (
    <>

      <Navbar></Navbar>
      <div className='flex gap-10 max-w-7xl mx-auto p-5'>
        <Blogs addToBookmarkList={addToBookmarkList} addToTotalTimeList={addToTotalTimeList}></Blogs>
        <div>
          <div className='flex justify-center p-5 shadow-xl bg-blue-100 mb-5 rounded-md'>
            <ReadingTime time={timeSum}></ReadingTime>
          </div>
          <div className='bg-gray-200 p-5 h-max'>
            <Bookmark bookmarks={bookmarks}></Bookmark>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
