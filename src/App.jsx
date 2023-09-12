import './App.css'
import Navbar from './components/navbar/navbar'

import Blogs from './components/blogs/blogs'
import Bookmark from './components/bookmarks/Bookmarks'
import ReadingTime from './components/readingTime/ReadingTime'
import { useState } from 'react'
import { addItemToStorage } from './Storage'




function App() {

  const [bookmarks, setBookmarks] = useState([]);

  function addToBookmarkList(blog) {

    addItemToStorage(blog);
    const newBookMarks = JSON.parse(localStorage.getItem('bookMarks'))
    if (newBookMarks) {
      setBookmarks(newBookMarks);
    }
  }

  let sum;
  if (JSON.parse(localStorage.getItem('Time'))) {
    sum = JSON.parse(localStorage.getItem('Time'));
  } else {
    sum = 0;
  }

  function addToTotalTimeList(blog) {

    console.log(sum)
    if (sum || sum === 0) {
      sum = sum + blog.reading_time;
      localStorage.setItem('Time', sum);
      console.log(sum);
    }




  }
  return (
    <>

      <Navbar></Navbar>
      <div className='flex gap-10 max-w-7xl mx-auto p-5'>
        <Blogs addToBookmarkList={addToBookmarkList} addToTotalTimeList={addToTotalTimeList}></Blogs>
        <div>
          <div className='flex justify-center p-5 shadow-xl bg-blue-100 mb-5 rounded-md'>
            <ReadingTime sum={sum}></ReadingTime>
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
