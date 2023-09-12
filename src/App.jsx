import './App.css'
import Navbar from './components/navbar/navbar'

import Blogs from './components/blogs/blogs'
import Bookmark from './components/bookmarks/Bookmarks'




function App() {


  return (
    <>

      <Navbar></Navbar>
      <div className='flex gap-10 max-w-7xl mx-auto p-5'>
        <Blogs></Blogs>
        <div className='bg-gray-200 p-5'>
          <Bookmark></Bookmark>
        </div>

      </div>


    </>
  )
}

export default App
